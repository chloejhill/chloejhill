/**
 * Canonical site URL for metadata, sitemap, and robots.
 *
 * Set in Vercel **Production** environment:
 *   NEXT_PUBLIC_SITE_URL=https://www.chloejhill.com
 * (or NEXT_PUBLIC_SERVER_URL — same value, no trailing slash)
 */
function normalizeSiteUrl(url: string): string {
  return url.replace(/\/+$/, '');
}

export function getSiteUrlString(): string {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SERVER_URL?.trim();
  if (explicit) return normalizeSiteUrl(explicit);

  // Production deploy on Vercel: use the project's production domain, not the preview hostname.
  if (process.env.VERCEL_ENV === 'production') {
    const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
    if (productionHost) {
      const host = productionHost
        .replace(/^https?:\/\//, '')
        .replace(/\/+$/, '');
      return `https://${host}`;
    }
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, '').replace(/\/+$/, '');
    return `https://${host}`;
  }

  return 'http://localhost:3000';
}

export function getSiteUrl(): URL {
  return new URL(getSiteUrlString());
}
