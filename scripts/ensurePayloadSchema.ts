/**
 * Ensures Payload Postgres tables exist (prod Neon starts empty; dev auto-pushes).
 * Safe to run on each Vercel build — skips when core tables already exist.
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

loadEnvFile(path.join(process.cwd(), '.env.local'));
loadEnvFile(path.join(process.cwd(), '.env'));

import { getDatabaseUri } from '../lib/payloadEnv';

/** True when DB predates the Thinking `booksSection` group + About `timeline` array (schema drift). */
async function schemaNeedsSync(): Promise<boolean> {
  const uri = getDatabaseUri();
  if (!uri) {
    console.error('[ensurePayloadSchema] No DATABASE_URI / POSTGRES_URL / DATABASE_URL set.');
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
    const result = await pool.query(
      `SELECT
        EXISTS (
          SELECT FROM information_schema.columns
          WHERE table_schema = 'public'
            AND table_name = 'pages'
            AND column_name = 'thinking_books_section_section_title'
        ) AS has_books_section_title,
        EXISTS (
          SELECT FROM information_schema.tables
          WHERE table_schema = 'public' AND table_name = 'pages_about_timeline'
        ) AS has_about_timeline`
    );
    const row = result.rows[0] as
      | { has_books_section_title?: boolean; has_about_timeline?: boolean }
      | undefined;
    if (!row) return false;
    const stale =
      !row.has_books_section_title || !row.has_about_timeline;
    if (stale) {
      console.log(
        '[ensurePayloadSchema] Payload pages schema is behind code (missing columns/tables) — will sync.'
      );
    }
    return stale;
  } finally {
    await pool.end();
  }
}

async function tableExists(): Promise<boolean> {
  const uri = getDatabaseUri();
  if (!uri) {
    console.error('[ensurePayloadSchema] No DATABASE_URI / POSTGRES_URL / DATABASE_URL set.');
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
    const result = await pool.query(
      `SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'users'
      ) AS ok`
    );
    return Boolean(result.rows[0]?.ok);
  } finally {
    await pool.end();
  }
}

async function pushSchema() {
  const { spawnSync } = await import('node:child_process');
  const pathMod = await import('node:path');
  const script = pathMod.join(process.cwd(), 'scripts/pushPayloadSchema.mjs');

  // NODE_ENV must not be "production" for pushDevSchema; set via child env (read-only in TS).
  const { PAYLOAD_MIGRATING: _omitMigrating, ...baseEnv } = process.env;
  const env: NodeJS.ProcessEnv = {
    ...baseEnv,
    NODE_ENV: 'development',
    PAYLOAD_PUSH_SCHEMA: 'true',
    PAYLOAD_FORCE_DRIZZLE_PUSH: 'true'
  };

  const result = spawnSync(
    process.execPath,
    ['-r', './scripts/payload-preload.cjs', '--import', 'tsx', script],
    { stdio: 'inherit', env, cwd: process.cwd() }
  );

  if (result.status !== 0) {
    throw new Error(`pushPayloadSchema exited with code ${result.status ?? 1}`);
  }
}

async function main() {
  const hasUsers = await tableExists();
  if (!hasUsers) {
    console.log('[ensurePayloadSchema] No Payload tables found — creating schema...');
    await pushSchema();
    return;
  }

  if (await schemaNeedsSync()) {
    console.log('[ensurePayloadSchema] Syncing schema to match current Payload config...');
    await pushSchema();
    return;
  }

  console.log('[ensurePayloadSchema] Schema already present — skipping.');
}

main().catch((err) => {
  console.error('[ensurePayloadSchema] Failed:', err);
  process.exit(1);
});
