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

const cacheStub = {
  match: async () => undefined,
  put: async () => {},
  delete: async () => true,
  keys: async () => []
};

(globalThis as typeof globalThis & { caches: CacheStorage }).caches = {
  open: async () => cacheStub as unknown as Cache,
  has: async () => false,
  delete: async () => false,
  keys: async () => []
} as unknown as CacheStorage;

import { getDatabaseUri } from '../lib/payloadEnv';

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
  // development + NOT migrating — required for pushDevSchema (see @payloadcms/db-postgres connect)
  process.env.NODE_ENV = 'development';
  delete process.env.PAYLOAD_MIGRATING;

  const nextEnv = await import('@next/env');
  const loadEnvConfig =
    'loadEnvConfig' in nextEnv && typeof nextEnv.loadEnvConfig === 'function'
      ? nextEnv.loadEnvConfig
      : (nextEnv as { default: { loadEnvConfig: (dir: string, dev: boolean) => void } })
          .default.loadEnvConfig;
  loadEnvConfig(process.cwd(), true);

  const { getPayload } = await import('payload');
  const { default: config } = await import('../payload.config');

  const payload = await getPayload({ config });
  console.log('[ensurePayloadSchema] Payload schema push complete.');
  await payload.db.destroy();
}

async function main() {
  if (await tableExists()) {
    console.log('[ensurePayloadSchema] Schema already present — skipping.');
    return;
  }

  console.log('[ensurePayloadSchema] No Payload tables found — creating schema...');
  await pushSchema();
}

main().catch((err) => {
  console.error('[ensurePayloadSchema] Failed:', err);
  process.exit(1);
});
