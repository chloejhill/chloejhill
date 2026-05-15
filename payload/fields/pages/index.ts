import type { Field } from 'payload';

import { aboutPageFields } from './about';
import { articlesPageFields } from './articles';
import { contactPageFields } from './contact';
import { homePageFields } from './home';
import { practicePageFields } from './practice';
import { projectsPageFields } from './projects';
import { thinkingPageFields } from './thinking';
import { workWithMePageFields } from './workWithMe';

export const pageContentFields: Field[] = [
  ...homePageFields,
  ...aboutPageFields,
  ...contactPageFields,
  ...workWithMePageFields,
  ...thinkingPageFields,
  ...practicePageFields,
  ...articlesPageFields,
  ...projectsPageFields
];
