import type { CollectionConfig } from 'payload';

import { pageContentFields } from '../fields/pages';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    description:
      'Edit site page copy and images. Open a page and use the labeled fields for that page (hero, sections, uploads).'
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user)
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          'Page identifier: home, about, contact, work-with-me, thinking, practice, projects'
      }
    },
    ...pageContentFields
  ],
  versions: {
    drafts: true
  }
};
