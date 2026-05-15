import { isDatabaseConfigured } from './lib/payloadEnv';
import config from './payload.config';
import { getPayload } from 'payload';

type Cache = {
  client: Awaited<ReturnType<typeof getPayload>> | null;
  promise: Promise<Awaited<ReturnType<typeof getPayload>>> | null;
};

const globalForPayload = globalThis as unknown as { __payload?: Cache };

const cache: Cache = globalForPayload.__payload ?? { client: null, promise: null };

if (!globalForPayload.__payload) globalForPayload.__payload = cache;

export async function getPayloadClient() {
  if (!cache.promise) {
    cache.promise = getPayload({ config });
  }

  cache.client = await cache.promise;
  return cache.client;
}

export function isPayloadConfigured() {
  return Boolean(process.env.PAYLOAD_SECRET && isDatabaseConfigured());
}
