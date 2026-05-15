import type { Field } from 'payload';

import {
  pageContentGroup,
  textareaField,
  textField,
  uploadField
} from './shared';

export const practicePageFields: Field[] = [
  pageContentGroup('practice', 'practice', 'Practice', [
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
                uploadField('image', 'Hero image')
              ]
            }
          ]
        },
        {
          label: 'Body',
          fields: [
            {
              name: 'complexity',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                uploadField('image', 'Section image')
              ]
            },
            {
              name: 'workShowsUp',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('intro', 'Intro'),
                textField('bulletsLabel', 'Bullets label'),
                {
                  name: 'bullets',
                  type: 'array',
                  label: 'Bullet points',
                  fields: [textareaField('text', 'Bullet text')]
                },
                textareaField('closing', 'Closing paragraph'),
                uploadField('image', 'Section image')
              ]
            },
            {
              name: 'context',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('intro', 'Intro'),
                {
                  name: 'bullets',
                  type: 'array',
                  label: 'Bullet points',
                  fields: [textareaField('text', 'Bullet text')]
                },
                textareaField('closing', 'Closing paragraph'),
                uploadField('image', 'Section image')
              ]
            },
            {
              name: 'patterns',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                uploadField('backgroundImage', 'Section background'),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Pattern cards',
                  maxRows: 4,
                  fields: [
                    textField('title', 'Card title'),
                    textareaField('description', 'Description')
                  ]
                }
              ]
            },
            {
              name: 'organisations',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                {
                  name: 'logos',
                  type: 'array',
                  label: 'Organisation logos',
                  fields: [
                    textField('alt', 'Logo name (accessibility)'),
                    uploadField('logo', 'Logo image')
                  ]
                }
              ]
            },
            {
              name: 'illustrations',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                uploadField('decorativeImage', 'Decorative image'),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Illustration items',
                  fields: [
                    textField('title', 'Title'),
                    textareaField('description', 'Description')
                  ]
                }
              ]
            },
            {
              name: 'connecting',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3'),
                textField('thinkingLinkLabel', 'Thinking link label'),
                textField('thinkingLinkSuffix', 'Thinking link suffix'),
                textField('aboutLinkLabel', 'About link label'),
                textField('aboutLinkSuffix', 'About link suffix'),
                uploadField('backgroundImage', 'Background image'),
                uploadField('dashImage', 'Link dash image'),
                uploadField('leafImage', 'Decorative leaf')
              ]
            },
            {
              name: 'cta',
              type: 'group',
              fields: [
                textField('title', 'CTA title'),
                textareaField('body', 'CTA body'),
                textField('linkText', 'Link text'),
                textField('linkHref', 'Link URL'),
                uploadField('profileImage', 'Profile image')
              ]
            }
          ]
        }
      ]
    }
  ])
];
