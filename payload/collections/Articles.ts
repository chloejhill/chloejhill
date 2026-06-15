import type { CollectionConfig } from 'payload';

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt', 'updatedAt'],
    description:
      'Articles shown on /insights and individual insight pages. Each article requires a list image.'
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user)
  },
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Title' },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'URL slug',
      admin: {
        description: 'Used in the URL, e.g. my-article-title'
      }
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Short description',
      admin: {
        description: 'Shown on the insights listing page.'
      }
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'List image',
      admin: {
        description: 'Required thumbnail for the insights listing.'
      }
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Article header image',
      admin: {
        description: 'Optional larger image on the article detail page.'
      }
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd.MM.yyyy'
        }
      }
    },
    { name: 'theme', type: 'text', label: 'Theme label' },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Article body',
      admin: {
        description:
          'Separate paragraphs with a blank line. Add links as https://example.com or [link text](https://example.com).'
      }
    }
  ],
  versions: {
    drafts: true
  }
};
