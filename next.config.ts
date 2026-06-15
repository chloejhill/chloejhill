import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/insights',
        permanent: true
      },
      {
        source: '/articles/:slug',
        destination: '/insights/:slug',
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com'
      },
      {
        protocol: 'https',
        hostname: 'chloejhill.vercel.app'
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com'
      }
    ]
  }
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
