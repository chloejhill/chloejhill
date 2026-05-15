import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import '../globals.css';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Chloe Site',
  description: 'Chloe Site'
};

/** Re-fetch CMS content from Payload at most every 60s (no full redeploy needed). */
export const revalidate = 60;

export default function SiteLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} antialiased`}>{children}</body>
    </html>
  );
}
