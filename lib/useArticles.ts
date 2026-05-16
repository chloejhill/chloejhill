'use client';

import { useEffect, useState } from 'react';

import type { CmsArticle } from '@/lib/cmsTypes';
import { resolveMediaDimensions, resolveMediaSrc } from '@/lib/resolveMedia';

function formatArticleDate(value: string | null | undefined): string {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function mapArticleDoc(doc: Record<string, unknown>): CmsArticle | null {
  const id = doc.id != null ? String(doc.id) : '';
  const slug = typeof doc.slug === 'string' ? doc.slug : '';
  const title = typeof doc.title === 'string' ? doc.title : '';
  const description = typeof doc.description === 'string' ? doc.description : '';
  const content = typeof doc.content === 'string' ? doc.content : '';
  const image = resolveMediaSrc(doc.image as never);
  if (!id || !slug || !title || !image) return null;

  const featured = resolveMediaSrc(doc.featuredImage as never);
  const { width: imageWidth, height: imageHeight } = resolveMediaDimensions(
    doc.image as never
  );

  return {
    id,
    slug,
    title,
    description,
    image,
    imageWidth,
    imageHeight,
    featuredImage: featured ?? undefined,
    date: formatArticleDate(doc.publishedAt as string | null | undefined),
    theme: typeof doc.theme === 'string' ? doc.theme : '',
    content
  };
}

export function useArticles() {
  const [articles, setArticles] = useState<CmsArticle[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch('/api/articles?limit=100&depth=2&sort=-publishedAt', {
          cache: 'no-store'
        });
        if (!res.ok) return;
        const data = await res.json();
        const next = ((data?.docs ?? []) as Record<string, unknown>[])
          .map(mapArticleDoc)
          .filter((article): article is CmsArticle => article != null);
        if (!cancelled) setArticles(next);
      } catch {
        // keep null → fallbacks
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return articles;
}

export function useArticle(slug: string) {
  const [article, setArticle] = useState<CmsArticle | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch(
          `/api/articles?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=2`,
          { cache: 'no-store' }
        );
        if (!res.ok) return;
        const data = await res.json();
        const doc = (data?.docs?.[0] ?? null) as Record<string, unknown> | null;
        const next = doc ? mapArticleDoc(doc) : null;
        if (!cancelled) {
          setArticle(next);
          setLoaded(true);
        }
      } catch {
        if (!cancelled) setLoaded(true);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { article, loaded };
}
