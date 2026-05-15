import type { Field } from 'payload';

import {
  pageContentGroup,
  textareaField,
  textField,
  uploadField
} from './shared';

export const thinkingPageFields: Field[] = [
  pageContentGroup('thinking', 'thinking', 'Thinking', [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                textField('title', 'Hero title'),
                textareaField('subtitle', 'Hero subtitle'),
                uploadField('leftImage', 'Hero left image'),
                uploadField('rightImage', 'Hero right image')
              ]
            }
          ]
        },
        {
          label: 'Publications',
          fields: [
            {
              name: 'publications',
              type: 'array',
              label: 'Selected Writings & Publications',
              labels: {
                singular: 'Publication cover',
                plural: 'Publication covers'
              },
              admin: {
                description:
                  'Cover images for the “Selected Writings & Publications” carousel. Image only — add a short label for accessibility.'
              },
              fields: [
                textField(
                  'label',
                  'Label',
                  'Short name shown to screen readers, e.g. WWF or PBL.'
                ),
                uploadField('cover', 'Cover image')
              ]
            }
          ]
        },
        {
          label: 'Books',
          fields: [
            {
              name: 'books',
              type: 'array',
              label: 'Current Books',
              labels: {
                singular: 'Book',
                plural: 'Books'
              },
              maxRows: 3,
              admin: {
                description:
                  'Exactly three book covers for “Current Books that are shaping my Ideas”.'
              },
              fields: [
                textField(
                  'title',
                  'Book title',
                  'For accessibility, e.g. Futures or Regen Cultures.'
                ),
                uploadField('cover', 'Book cover image')
              ]
            }
          ]
        }
      ]
    }
  ])
];
