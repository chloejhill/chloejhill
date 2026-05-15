import type { Field } from 'payload';

import {
  pageContentGroup,
  textareaField,
  textField,
  uploadField
} from './shared';

export const homePageFields: Field[] = [
  pageContentGroup('home', 'home', 'Home', [
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
                textareaField(
                  'title',
                  'Hero title',
                  'Use Enter for a line break (displays as two lines).'
                ),
                textareaField('subtitle', 'Hero subtitle'),
                uploadField('profileImage', 'Hero portrait')
              ]
            }
          ]
        },
        {
          label: 'Pickle',
          fields: [
            {
              name: 'pickle',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('body', 'Section body')
              ]
            }
          ]
        },
        {
          label: 'Approach',
          fields: [
            {
              name: 'approach',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('body', 'Section body'),
                uploadField('image', 'Approach image')
              ]
            },
            {
              name: 'compass',
              type: 'group',
              label: 'Compass (parallax background)',
              fields: [uploadField('image', 'Compass image')]
            }
          ]
        },
        {
          label: 'Attention',
          fields: [
            {
              name: 'attention',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('intro', 'Section intro'),
                {
                  name: 'systems',
                  type: 'group',
                  label: 'Systems card',
                  fields: [
                    textField('title', 'Card title'),
                    textareaField('body', 'Card body (back of flip card)')
                  ]
                },
                {
                  name: 'futures',
                  type: 'group',
                  label: 'Futures card',
                  fields: [
                    textField('title', 'Card title'),
                    textareaField('body', 'Card body')
                  ]
                },
                {
                  name: 'inner',
                  type: 'group',
                  label: 'Inner dimension card',
                  fields: [
                    textField('title', 'Card title'),
                    textareaField('body', 'Card body')
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Why',
          fields: [
            {
              name: 'why',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3')
              ]
            }
          ]
        },
        {
          label: 'Explore',
          fields: [
            {
              name: 'explore',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                uploadField('image', 'Side image'),
                uploadField('dash', 'Link dash icon'),
                textField('linkThinking', 'Thinking link label'),
                textField('linkThinkingSuffix', 'Thinking link suffix'),
                textField('linkPractice', 'Practice link label'),
                textField('linkPracticeSuffix', 'Practice link suffix'),
                textField('linkAbout', 'About link label'),
                textField('linkAboutSuffix', 'About link suffix')
              ]
            }
          ]
        }
      ]
    }
  ])
];
