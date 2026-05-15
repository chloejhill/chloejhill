'use client';

import { useEffect, useState } from 'react';

import { pageDocToOverrides } from '@/lib/pageContent';
import type { PageOverrides } from '@/lib/payloadContent';

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
        const page = data?.docs?.[0] ?? null;
        if (!page) return;

        const next = pageDocToOverrides(page);
        if (!cancelled) setOverrides(next);
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
