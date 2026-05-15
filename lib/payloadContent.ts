import 'server-only';

import { pageDocToOverrides, type PageOverrides } from '@/lib/pageContent';
import { getPayloadClient, isPayloadConfigured } from '@/payload';

export type { PageOverrides } from '@/lib/pageContent';
export type {
  CmsArticle,
  CmsCoverItem,
  CmsTestimonial,
  PageBlocks
} from '@/lib/cmsTypes';

export async function fetchPageOverrides(slug: string): Promise<PageOverrides | null> {
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

    const page = result.docs?.[0];
    if (!page) return null;

    return pageDocToOverrides(page as Record<string, unknown> & { slug?: string });
  } catch {
    return null;
  }
}
