import path from 'path';
import { fileURLToPath } from 'url';

import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Media } from './payload/collections/Media';
import { Pages } from './payload/collections/Pages';
import { Users } from './payload/collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: ' - Admin'
    }
  },
  secret: process.env.PAYLOAD_SECRET || 'dev-only-secret-change-me',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : false
    }
  }),
  collections: [Users, Pages, Media],
  editor: lexicalEditor({}),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  }
});
