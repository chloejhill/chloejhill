import type { Field } from 'payload';

import {
  pageContentGroup,
  textareaField,
  textField,
  uploadField
} from './shared';

export const aboutPageFields: Field[] = [
  pageContentGroup('about', 'about', 'About', [
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
                textField('kicker', 'Kicker'),
                textareaField('title', 'Headline'),
                uploadField('oceanImage', 'Ocean background'),
                uploadField('frameImage', 'Frame overlay'),
                uploadField('profileImage', 'Profile photo')
              ]
            }
          ]
        },
        {
          label: 'Where I’m coming from',
          fields: [
            {
              name: 'whereComingFrom',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3'),
                textareaField('p4', 'Paragraph 4')
              ]
            }
          ]
        },
        {
          label: 'How I work',
          fields: [
            {
              name: 'howIWork',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3')
              ]
            },
            {
              name: 'guides',
              type: 'group',
              label: 'What guides my work',
              fields: [
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3'),
                textareaField('p4', 'Paragraph 4')
              ]
            }
          ]
        },
        {
          label: 'Philosophy',
          fields: [
            {
              name: 'footsteps',
              type: 'group',
              label: 'Footsteps parallax',
              fields: [uploadField('image', 'Footsteps image')]
            },
            {
              name: 'philosophy',
              type: 'group',
              fields: [
                uploadField('image', 'Portrait image'),
                textField('title', 'Section title'),
                textareaField('p1', 'Paragraph 1'),
                textareaField('p2', 'Paragraph 2'),
                textareaField('p3', 'Paragraph 3'),
                textareaField('p4', 'Paragraph 4'),
                textareaField('p5', 'Paragraph 5')
              ]
            }
          ]
        },
        {
          label: 'Timeline',
          fields: [
            {
              name: 'timeline',
              type: 'array',
              label: 'Timeline',
              labels: { singular: 'Entry', plural: 'Entries' },
              fields: [
                textField('year', 'Year'),
                textareaField('text', 'Description')
              ]
            }
          ]
        },
        {
          label: 'Affiliations & quote',
          fields: [
            {
              name: 'affiliations',
              type: 'group',
              fields: [
                textField('title', 'Section title'),
                textareaField('intro', 'Intro text'),
                uploadField('sacredChangemakers', 'Sacred Changemakers logo'),
                uploadField('apf', 'APF logo')
              ]
            },
            {
              name: 'quote',
              type: 'group',
              fields: [
                textareaField('text', 'Quote text'),
                textField('author', 'Quote author')
              ]
            }
          ]
        }
      ]
    }
  ])
];
