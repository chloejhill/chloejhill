'use client';

import { useEffect, useState } from 'react';
import type { PageOverrides } from '@/lib/payloadContent';

type MediaDoc = {
  url?: string | null;
  filename?: string | null;
  alt?: string | null;
};

type PageDoc = {
  strings?: Array<{ key: string; value: string }> | null;
  images?: Array<{ key: string; alt?: string | null; image?: MediaDoc | string | null }> | null;
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

export function usePayloadOverrides(slug: string) {
  const [overrides, setOverrides] = useState<PageOverrides | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const url = `/api/pages?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=2`;
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        const page = (data?.docs?.[0] ?? null) as PageDoc | null;
        if (!page) return;

        const strings: Record<string, string> = {};
        for (const row of page.strings ?? []) {
          if (isNonEmptyString(row?.key) && isNonEmptyString(row?.value)) {
            strings[row.key] = row.value;
          }
        }

        const images: Record<string, { src: string; alt?: string }> = {};
        for (const row of page.images ?? []) {
          const key = (row as any)?.key;
          const src = normalizeMediaToSrc((row as any)?.image);
          if (isNonEmptyString(key) && isNonEmptyString(src)) {
            images[key] = {
              src,
              alt: isNonEmptyString((row as any)?.alt) ? (row as any).alt : undefined
            };
          }
        }

        if (!cancelled) setOverrides({ strings, images });
      } catch {
        // fallback: keep null
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return overrides;
}

