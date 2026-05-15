import { flattenPageImages, flattenPageStrings } from '@/lib/flattenPageContent';

import { thinkingHeroImages, thinkingPageContent } from './thinking';
import { practicePageContent } from './practice';

const thinkingRecord = thinkingPageContent as unknown as Record<string, unknown>;
const practiceRecord = practicePageContent as unknown as Record<string, unknown>;

export const thinkingStringDefaults = flattenPageStrings('thinking', thinkingRecord);
export const thinkingImageDefaults: Record<string, string> = {
  ...flattenPageImages('thinking', thinkingRecord),
  'thinking.hero.leftImage': thinkingHeroImages.leftImage,
  'thinking.hero.rightImage': thinkingHeroImages.rightImage
};

export const practiceStringDefaults = flattenPageStrings('practice', practiceRecord);
export const practiceImageDefaults = flattenPageImages('practice', practiceRecord);

export { thinkingPageContent, practicePageContent };
