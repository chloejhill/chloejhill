import type { MetadataRoute } from 'next';

import { getSiteUrl, getSiteUrlString } from '@/lib/siteUrl';

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrlString();
  const hostname = getSiteUrl().hostname;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/']
    },
    sitemap: `${base}/sitemap.xml`,
    host: hostname
  };
}
