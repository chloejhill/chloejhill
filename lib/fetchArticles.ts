import 'server-only';

import type { CmsArticle } from '@/lib/cmsTypes';
import { resolveMediaSrc } from '@/lib/resolveMedia';
import { getPayloadClient, isPayloadConfigured } from '@/payload';

function formatArticleDate(value: string | Date | null | undefined): string {
  if (!value) return '';
  const date = value instanceof Date ? value : new Date(value);
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

  return {
    id,
    slug,
    title,
    description,
    image,
    featuredImage: featured ?? undefined,
    date: formatArticleDate(doc.publishedAt as string | Date | null | undefined),
    theme: typeof doc.theme === 'string' ? doc.theme : '',
    content
  };
}

export async function fetchArticles(): Promise<CmsArticle[]> {
  if (!isPayloadConfigured()) return [];

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'articles',
      limit: 100,
      pagination: false,
      depth: 2,
      draft: false,
      sort: '-publishedAt'
    });

    return (result.docs as Record<string, unknown>[])
      .map(mapArticleDoc)
      .filter((article): article is CmsArticle => article != null);
  } catch {
    return [];
  }
}

export async function fetchArticleBySlug(slug: string): Promise<CmsArticle | null> {
  if (!isPayloadConfigured()) return null;

  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'articles',
      where: { slug: { equals: slug } },
      limit: 1,
      pagination: false,
      depth: 2,
      draft: false
    });

    const doc = result.docs?.[0] as Record<string, unknown> | undefined;
    if (!doc) return null;
    return mapArticleDoc(doc);
  } catch {
    return null;
  }
}
