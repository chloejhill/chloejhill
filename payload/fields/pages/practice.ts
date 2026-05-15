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
      name: 'hero',
      type: 'group',
      fields: [
        textField('title', 'Hero title'),
        textareaField('subtitle', 'Hero subtitle'),
        uploadField('image', 'Hero image')
      ]
    }
  ])
];
