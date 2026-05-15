/**
 * Wrapper for Payload CLI (avoids undici CacheStorage crash on Node 20).
 */
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

const { spawnSync } = await import('node:child_process');
const { fileURLToPath } = await import('node:url');
import path from 'node:path';

const payloadBin = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../node_modules/payload/bin.js'
);

const result = spawnSync(process.execPath, ['--import', 'tsx', payloadBin, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env
});

process.exit(result.status ?? 1);
