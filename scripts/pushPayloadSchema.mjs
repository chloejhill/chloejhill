/**
 * Push Payload schema to Postgres. Run via ensurePayloadSchema (sets NODE_ENV=development).
 */
import nextEnv from '@next/env';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

nextEnv.loadEnvConfig(process.cwd(), true);

const cacheStub = {
  match: async () => undefined,
  put: async () => {},
  delete: async () => true,
  keys: async () => []
};

globalThis.caches = {
  open: async () => cacheStub,
  has: async () => false,
  delete: async () => false,
  keys: async () => []
};

const configPath = path.resolve(process.cwd(), 'payload.config.ts');
const configModule = await import(pathToFileURL(configPath).href);
const { getPayload } = await import('payload');

const payload = await getPayload({ config: configModule.default });

if (process.env.PAYLOAD_PUSH_SCHEMA === 'true') {
  const { pushDevSchema } = await import('@payloadcms/drizzle');
  console.log('[pushPayloadSchema] Pushing schema to database...');
  await pushDevSchema(payload.db);
}

console.log('[pushPayloadSchema] Schema push complete.');
await payload.db.destroy();
