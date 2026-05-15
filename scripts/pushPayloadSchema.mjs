/**
 * Push Payload schema to Postgres (used by ensurePayloadSchema).
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

process.env.NODE_ENV = 'development';
process.env.PAYLOAD_MIGRATING = 'true';

const configPath = path.resolve(process.cwd(), 'payload.config.ts');
const configModule = await import(pathToFileURL(configPath).href);
const { getPayload } = await import('payload');

const payload = await getPayload({ config: configModule.default });
console.log('[pushPayloadSchema] Schema push complete.');
await payload.db.destroy();
