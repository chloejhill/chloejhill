/**
 * One-time Postgres fix when the Pages collection no longer has an `articles` tab but the
 * database still has `pages.articles_*` columns. Drizzle `push` may stop and ask whether
 * `articles_hero_title` was renamed to `thinking_inquiry_title` — that prompt has no TTY on
 * Vercel (exit 13). Run this locally once against production DATABASE_URI, then redeploy
 * (or run `npm run push:schema` locally if Drizzle still reports more drift).
 */
import fs from 'fs';
import path from 'path';

function loadEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) return;
  for (const rawLine of fs.readFileSync(filePath, 'utf8').split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIndex = line.indexOf('=');
    if (eqIndex <= 0) continue;
    const key = line.slice(0, eqIndex).trim();
    const value = line.slice(eqIndex + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(path.join(process.cwd(), '.env.production.local'));
loadEnvFile(path.join(process.cwd(), '.env.local'));
loadEnvFile(path.join(process.cwd(), '.env'));

import { getDatabaseUri } from '../lib/payloadEnv';

async function main() {
  const uri = getDatabaseUri();
  if (!uri) {
    console.error('Set DATABASE_URI (or POSTGRES_URL) and retry.');
    process.exit(1);
  }

  const { default: pg } = await import('pg');
  const pool = new pg.Pool({
    connectionString: uri,
    ssl: uri.includes('neon.tech') || process.env.DATABASE_SSL === 'true'
      ? { rejectUnauthorized: false }
      : false
  });

  try {
    const r = await pool.query(`
      SELECT
        EXISTS (
          SELECT FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'pages' AND column_name = 'articles_hero_title'
        ) AS has_articles_hero,
        EXISTS (
          SELECT FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'pages' AND column_name = 'thinking_inquiry_title'
        ) AS has_thinking_inquiry
    `);
    const row = r.rows[0] as { has_articles_hero?: boolean; has_thinking_inquiry?: boolean };

    if (!row?.has_articles_hero) {
      console.log('[fixPagesSchemaDrift] No pages.articles_hero_title column — nothing to rename.');
      return;
    }

    if (row.has_thinking_inquiry) {
      console.warn(
        '[fixPagesSchemaDrift] Both articles_hero_title and thinking_inquiry_title exist. Manual merge/drop may be required.'
      );
      process.exit(1);
    }

    await pool.query(
      `ALTER TABLE pages RENAME COLUMN articles_hero_title TO thinking_inquiry_title`
    );
    console.log(
      '[fixPagesSchemaDrift] Renamed pages.articles_hero_title → thinking_inquiry_title.'
    );

    const v = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '_pages_v'
          AND column_name = 'version_articles_hero_title'
      ) AS has_old,
      EXISTS (
        SELECT FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '_pages_v'
          AND column_name = 'version_thinking_inquiry_title'
      ) AS has_new
    `);
    const vrow = v.rows[0] as { has_old?: boolean; has_new?: boolean };
    if (vrow?.has_old && !vrow?.has_new) {
      await pool.query(
        `ALTER TABLE _pages_v RENAME COLUMN version_articles_hero_title TO version_thinking_inquiry_title`
      );
      console.log(
        '[fixPagesSchemaDrift] Renamed _pages_v.version_articles_hero_title → version_thinking_inquiry_title.'
      );
    }

    console.log(
      'Next: from this repo run `DATABASE_URI=... PAYLOAD_SECRET=... npm run push:schema` if the admin/API still errors, then `npm run seed` against prod.'
    );
  } finally {
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
