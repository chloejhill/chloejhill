import config from '../../../../payload.config';
import { RootPage } from '@payloadcms/next/views';
import { importMap } from '../importMap.js';

type Args = {
  params: Promise<{ segments?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ params, searchParams }: Args) {
  // Preserve `undefined` when no segments exist so `/admin` resolves correctly.
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
      config={config}
      params={normalizedParams}
      searchParams={normalizedSearchParams}
      importMap={importMap}
    />
  );
}

