import path from 'path';
import { fileURLToPath } from 'url';

import { buildConfig } from 'payload';
import sharp from 'sharp';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

import { getDatabaseSsl, getDatabaseUri } from './lib/payloadEnv';
import { Articles } from './payload/collections/Articles';
import { Media } from './payload/collections/Media';
import { Pages } from './payload/collections/Pages';
import { Users } from './payload/collections/Users';
import { SiteSettings } from './payload/globals/SiteSettings';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

export default buildConfig({
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    meta: {
      titleSuffix: ' - Admin'
    },
    importMap: {
      baseDir: dirname,
      importMapFile: path.resolve(dirname, 'app/(payload)/admin/importMap.js')
    }
  },
  secret: process.env.PAYLOAD_SECRET || 'dev-only-secret-change-me',
  db: postgresAdapter({
    pool: {
      connectionString: getDatabaseUri(),
      ssl: getDatabaseSsl()
    },
    // Avoid interactive drizzle prompts blocking `next dev` and API routes.
    push: process.env.PAYLOAD_PUSH_SCHEMA === 'true'
  }),
  collections: [Users, Pages, Articles, Media],
  globals: [SiteSettings],
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(blobToken),
      collections: { media: true },
      token: blobToken,
      // Bypass Vercel's 4.5MB serverless body limit for admin uploads
      clientUploads: true
    })
  ],
  editor: lexicalEditor({}),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  }
});
