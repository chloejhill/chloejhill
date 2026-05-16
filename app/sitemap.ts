import type { MetadataRoute } from 'next';

import { getSiteUrlString } from '@/lib/siteUrl';

const PATHS = [
  '/',
  '/about',
  '/thinking',
  '/practice',
  '/work-with-me',
  '/articles',
  '/projects',
  '/contact'
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrlString();

  const lastModified = new Date();

  return PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '/' ? 1 : 0.8
  }));
}
