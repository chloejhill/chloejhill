import type { Field } from 'payload';

import {
  pageContentGroup,
  textareaField,
  textField,
  uploadField
} from './shared';

function paragraphGroup(
  name: string,
  label: string,
  count: number
): Field {
  return {
    name,
    type: 'group',
    label,
    fields: Array.from({ length: count }, (_, i) =>
      textareaField(`p${i + 1}`, `Paragraph ${i + 1}`)
    )
  };
}

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
          label: 'Inquiry & empirical',
          fields: [
            {
              name: 'inquiry',
              type: 'group',
              label: 'Where my inquiry begins',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textField('bannerLabel', 'Banner label'),
                uploadField('bannerImage', 'Banner image')
              ]
            },
            {
              name: 'empirical',
              type: 'group',
              label: 'Empirical grounding',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3')
              ]
            },
            {
              name: 'writings',
              type: 'group',
              label: 'Selected writings',
              fields: [textField('sectionTitle', 'Section title')]
            }
          ]
        },
        {
          label: 'Futures & AATT',
          fields: [
            {
              name: 'futureInquiry',
              type: 'group',
              fields: [
                textField('label', 'Banner label'),
                uploadField('bannerImage', 'Banner image')
              ]
            },
            {
              name: 'transcendental',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3'),
                textField('linkText', 'Publication link text'),
                textareaField('p4', 'Paragraph 4'),
                uploadField('leafImage', 'Decorative leaf image')
              ]
            },
            {
              name: 'transformation',
              type: 'group',
              fields: [textField('label', 'Banner label')]
            },
            {
              name: 'aatt',
              type: 'group',
              label: 'AATT framework',
              fields: [
                textField('title', 'Section title (line 1)'),
                textField('titleLine2', 'Section title (line 2)'),
                textareaField('intro', 'Intro paragraph'),
                {
                  name: 'items',
                  type: 'array',
                  label: 'AATT dimensions',
                  labels: { singular: 'Dimension', plural: 'Dimensions' },
                  fields: [
                    textField('title', 'Title'),
                    textField('subtitle', 'Subtitle'),
                    textareaField('description', 'Description'),
                    {
                      name: 'iconLeft',
                      type: 'checkbox',
                      label: 'Icon on left',
                      defaultValue: false
                    },
                    uploadField('icon', 'Icon image')
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Inner dimension & evolution',
          fields: [
            {
              name: 'innerDimension',
              type: 'group',
              fields: [
                textField('bannerLabel', 'Banner label'),
                uploadField('bannerImage', 'Banner image'),
                textField('heading', 'Heading'),
                textareaField('body', 'Body'),
                textField('dotsUrl', 'Dots Directory URL'),
                uploadField('dotsImage', 'Dots logo')
              ]
            },
            {
              name: 'booksSection',
              type: 'group',
              label: 'Current books',
              fields: [textField('sectionTitle', 'Section title')]
            },
            {
              name: 'evolution',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textField('practiceLinkLabel', 'Practice link label'),
                textField('practiceLinkSuffix', 'Practice link suffix'),
                textField('aboutLinkLabel', 'About link label'),
                textField('aboutLinkSuffix', 'About link suffix'),
                uploadField('backgroundImage', 'Background image'),
                uploadField('dashImage', 'Link dash image')
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
              fields: [
                textField('label', 'Label'),
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
              labels: { singular: 'Book', plural: 'Books' },
              maxRows: 6,
              fields: [
                textField('title', 'Book title'),
                uploadField('cover', 'Book cover image')
              ]
            }
          ]
        }
      ]
    }
  ])
];
