import type { Metadata } from 'next';

import config from '../../../../payload.config';
import { RootPage, generatePageMetadata } from '@payloadcms/next/views';
import { importMap } from '../importMap.js';
import type { SanitizedConfig } from 'payload';

const configPromise = Promise.resolve(config as unknown as SanitizedConfig);

type Args = {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata(args: Args): Promise<Metadata> {
  const normalizedParams = args.params as unknown as Promise<
    Record<string, string | string[]>
  >;
  const normalizedSearchParams = args.searchParams.then((sp) => {
    const out: Record<string, string | string[]> = {};
    for (const [key, value] of Object.entries(sp)) {
      if (value !== undefined) out[key] = value;
    }
    return out;
  });
  return generatePageMetadata({
    config: configPromise,
    params: normalizedParams,
    searchParams: normalizedSearchParams
  });
}

export default async function Page({ params, searchParams }: Args) {
  const normalizedParams = params as unknown as Promise<{ segments: string[] }>;
  const normalizedSearchParams = searchParams.then((sp) => {
    const out: Record<string, string | string[]> = {};
    for (const [key, value] of Object.entries(sp)) {
      if (value !== undefined) out[key] = value;
    }
    return out;
  });

  return (
    <RootPage
      config={configPromise}
      params={normalizedParams}
      searchParams={normalizedSearchParams}
      importMap={importMap}
    />
  );
}
