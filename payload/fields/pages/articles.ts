import type { Field } from 'payload';

import { pageContentGroup, textField } from './shared';

export const articlesPageFields: Field[] = [
  pageContentGroup('articles', 'articles', 'Articles', [
    {
      name: 'hero',
      type: 'group',
      fields: [textField('title', 'Hero title')]
    }
  ])
];
