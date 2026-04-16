import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user)
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'strings',
      type: 'array',
      labels: {
        singular: 'Text Override',
        plural: 'Text Overrides'
      },
      fields: [
        {
          name: 'key',
          type: 'text',
          required: true,
          admin: { description: 'Stable identifier, e.g. home.hero.title' }
        },
        { name: 'value', type: 'textarea', required: true }
      ]
    },
    {
      name: 'images',
      type: 'array',
      labels: {
        singular: 'Image Override',
        plural: 'Image Overrides'
      },
      fields: [
        {
          name: 'key',
          type: 'text',
          required: true,
          admin: { description: 'Stable identifier, e.g. home.hero.profileImage' }
        },
        { name: 'alt', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true }
      ]
    }
  ],
  versions: {
    drafts: true
  }
};

