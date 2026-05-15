/**
 * Vercel + Neon often expose POSTGRES_URL / DATABASE_URL, while this app expects DATABASE_URI.
 */
export function getDatabaseUri(): string {
  return (
    process.env.DATABASE_URI?.trim() ||
    process.env.POSTGRES_URL?.trim() ||
    process.env.DATABASE_URL?.trim() ||
    ''
  );
}

export function isDatabaseConfigured(): boolean {
  return Boolean(getDatabaseUri());
}

/** Neon / Vercel Postgres usually require TLS. */
export function getDatabaseSsl():
  | false
  | { rejectUnauthorized: boolean } {
  if (process.env.DATABASE_SSL === 'false') return false;
  if (process.env.DATABASE_SSL === 'true') {
    return {
      rejectUnauthorized: process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === 'true'
    };
  }

  const uri = getDatabaseUri();
  if (
    uri.includes('sslmode=require') ||
    uri.includes('neon.tech') ||
    process.env.VERCEL === '1'
  ) {
    return { rejectUnauthorized: false };
  }

  return false;
}
