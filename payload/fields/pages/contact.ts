import type { Field } from 'payload';

import {
  pageContentGroup,
  textareaField,
  textField,
  uploadField
} from './shared';

export const contactPageFields: Field[] = [
  pageContentGroup('contact', 'contact', 'Contact', [
    {
      name: 'hero',
      type: 'group',
      fields: [
        textareaField('title', 'Hero title', 'Use Enter for a line break.'),
        uploadField('image', 'Desktop hero image'),
        uploadField('mobileImage', 'Mobile hero image')
      ]
    },
    {
      name: 'details',
      type: 'group',
      label: 'Contact details',
      fields: [
        textField('email', 'Email'),
        textField('phone', 'Phone')
      ]
    }
  ])
];
