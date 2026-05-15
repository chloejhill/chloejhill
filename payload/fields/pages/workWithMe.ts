import type { Field } from 'payload';

import {
  pageContentGroup,
  textareaField,
  textField,
  uploadField
} from './shared';

export const workWithMePageFields: Field[] = [
  pageContentGroup('work-with-me', 'workWithMe', 'Work with me', [
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
                uploadField('image', 'Hero background'),
                uploadField('overlay', 'Hero overlay texture')
              ]
            }
          ]
        },
        {
          label: 'Body',
          fields: [
            {
              name: 'ways',
              type: 'group',
              label: 'Ways I typically support',
              fields: [
                textField('title', 'Section title'),
                textareaField('intro', 'Intro paragraph')
              ]
            },
            {
              name: 'engagement',
              type: 'group',
              label: 'Common forms of engagement',
              fields: [
                textField('title', 'Section title'),
                textareaField('intro', 'Intro paragraph')
              ]
            },
            {
              name: 'testimonials',
              type: 'group',
              label: 'Nice things people say',
              fields: [
                textField('title', 'Section heading'),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Testimonials',
                  labels: {
                    singular: 'Testimonial',
                    plural: 'Testimonials'
                  },
                  admin: {
                    description:
                      'Add or reorder testimonials shown in the carousel on the Work with me page.'
                  },
                  fields: [
                    textField('name', 'Name'),
                    textField('role', 'Role / organisation'),
                    textareaField('quote', 'Quote'),
                    uploadField('photo', 'Headshot photo')
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'CTA',
          fields: [
            {
              name: 'cta',
              type: 'group',
              fields: [
                textField('title', 'CTA title'),
                textareaField('body', 'CTA body'),
                textField('link', 'CTA link text'),
                uploadField('image', 'CTA profile image')
              ]
            }
          ]
        }
      ]
    }
  ])
];
