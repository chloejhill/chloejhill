import type { Field } from 'payload';

import { pageContentGroup, textField } from './shared';

export const projectsPageFields: Field[] = [
  pageContentGroup('projects', 'projects', 'Projects', [
    {
      name: 'hero',
      type: 'group',
      fields: [textField('title', 'Hero title')]
    }
  ])
];
