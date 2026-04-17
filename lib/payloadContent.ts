import 'server-only';

import { getPayloadClient, isPayloadConfigured } from '@/payload';

type MediaDoc = {
  url?: string | null;
  filename?: string | null;
  alt?: string | null;
};

type PageDoc = {
  strings?: Array<{ key: string; value: string }> | null;
  images?: Array<{ key: string; alt?: string | null; image?: MediaDoc | string | null }> | null;
};

export type PageOverrides = {
  strings: Record<string, string>;
  images: Record<string, { src: string; alt?: string }>;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function normalizeMediaToSrc(media: MediaDoc | string | null | undefined): string | null {
  if (!media) return null;
  if (typeof media === 'string') return null;

  if (isNonEmptyString(media.url)) return media.url;
  if (isNonEmptyString(media.filename)) return `/api/media/file/${encodeURIComponent(media.filename)}`;

  return null;
}

export async function fetchPageOverrides(slug: string): Promise<PageOverrides | null> {
  if (process.env.NODE_ENV === 'development') return null;
  if (!isPayloadConfigured()) return null;

  try {
    const payload = await getPayloadClient();

    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      pagination: false,
      depth: 2,
      draft: false
    });

    const page = result.docs?.[0] as unknown as PageDoc | undefined;
    if (!page) return null;

    const strings: Record<string, string> = {};
    for (const row of page.strings ?? []) {
      if (isNonEmptyString(row?.key) && isNonEmptyString(row?.value)) {
        strings[row.key] = row.value;
      }
    }

    const images: Record<string, { src: string; alt?: string }> = {};
    for (const row of page.images ?? []) {
      const src = normalizeMediaToSrc((row as any)?.image);
      const key = (row as any)?.key;
      if (isNonEmptyString(key) && isNonEmptyString(src)) {
        images[key] = {
          src,
          alt: isNonEmptyString((row as any)?.alt) ? (row as any).alt : undefined
        };
      }
    }

    return { strings, images };
  } catch {
    return null;
  }
}

