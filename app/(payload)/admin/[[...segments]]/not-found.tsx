import type { Metadata } from 'next';

import config from '../../../../payload.config';
import { NotFoundPage } from '@payloadcms/next/views';
import { importMap } from '../importMap.js';
import type { SanitizedConfig } from 'payload';

const configPromise = Promise.resolve(config as unknown as SanitizedConfig);

type Args = {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Not found' };
}

export default async function NotFound({ params, searchParams }: Args) {
  const normalizedParams = params as unknown as Promise<{ segments: string[] }>;
  const normalizedSearchParams = searchParams.then((sp) => {
    const out: Record<string, string | string[]> = {};
    for (const [key, value] of Object.entries(sp)) {
      if (value !== undefined) out[key] = value;
    }
    return out;
  });

  return (
    <NotFoundPage
      config={configPromise}
      importMap={importMap}
      params={normalizedParams}
      searchParams={normalizedSearchParams}
    />
  );
}
