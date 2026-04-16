import path from 'path';
import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user)
  },
  upload: {
    staticDir: path.resolve(process.cwd(), 'public', 'media'),
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumbnail', width: 300 },
      { name: 'small', width: 600 },
      { name: 'medium', width: 900 },
      { name: 'large', width: 1400 },
      { name: 'xlarge', width: 1920 }
    ]
  },
  fields: [
    { name: 'alt', type: 'text' }
  ]
};

