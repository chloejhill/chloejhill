import type { Metadata } from 'next';
import { Lora } from 'next/font/google';

import { SiteSettingsProvider } from '@/lib/SiteSettingsProvider';
import { fetchSiteSettings } from '@/lib/siteSettings';
import { getSiteUrl } from '@/lib/siteUrl';

import '../globals.css';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const defaultDescription =
  'Systems change researcher, writer, and advisor. Thinking about uncertainty, transformation, and how we meet what\u2019s coming.';

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: 'Chloe J. Hill — systems change, futures thinking & leadership',
    template: '%s | Chloe J. Hill'
  },
  description: defaultDescription,
  keywords: [
    'Chloe J. Hill',
    'systems change',
    'futures thinking',
    'sustainability',
    'conscious leadership',
    'foresight',
    'transformation'
  ],
  authors: [{ name: 'Chloe J. Hill', url: 'https://www.linkedin.com/in/chloejhill/' }],
  creator: 'Chloe J. Hill',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Chloe J. Hill',
    title: 'Chloe J. Hill — systems change, futures thinking & leadership',
    description: defaultDescription
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chloe J. Hill — systems change, futures thinking & leadership',
    description: defaultDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

/** Re-fetch CMS content from Payload at most every 60s (no full redeploy needed). */
export const revalidate = 60;

export default async function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await fetchSiteSettings();

  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>
        <SiteSettingsProvider value={siteSettings}>{children}</SiteSettingsProvider>
      </body>
    </html>
  );
}
