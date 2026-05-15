import { practicePageContent } from '../../lib/pageDefaults/practice';
import type { ArraySeedDef } from './arraySeeds';

export const practiceContent = practicePageContent;

export const practiceImageSeeds = [
  {
    path: 'public/images/hero.png',
    fieldPath: 'hero.image',
    alt: 'Hero',
    storageFilename: 'practice-hero.png'
  },
  { path: 'public/images/practice/complexity.png', fieldPath: 'complexity.image', alt: 'Complexity' },
  { path: 'public/images/practice/showsup.png', fieldPath: 'workShowsUp.image', alt: 'Work shows up' },
  { path: 'public/images/practice/context.png', fieldPath: 'context.image', alt: 'Context' },
  { path: 'public/images/background.png', fieldPath: 'patterns.backgroundImage', alt: '' },
  { path: 'public/images/illustrations.png', fieldPath: 'illustrations.decorativeImage', alt: '' },
  { path: 'public/images/practice/connecting.png', fieldPath: 'connecting.backgroundImage', alt: '' },
  { path: 'public/images/home/dash.png', fieldPath: 'connecting.dashImage', alt: '' },
  { path: 'public/images/leaf2.png', fieldPath: 'connecting.leafImage', alt: '' },
  { path: 'public/images/services/starttrans.png', fieldPath: 'cta.profileImage', alt: 'Chloe profile' }
];

export const practiceArraySeeds: ArraySeedDef[] = [
  {
    arrayPath: 'workShowsUp.bullets',
    items: practicePageContent.workShowsUp.bullets.map((text) => ({ data: { text } }))
  },
  {
    arrayPath: 'context.bullets',
    items: practicePageContent.context.bullets.map((text) => ({ data: { text } }))
  },
  {
    arrayPath: 'patterns.items',
    items: practicePageContent.patterns.items.map((item) => ({
      data: { title: item.title, description: item.description }
    }))
  },
  {
    arrayPath: 'illustrations.items',
    items: practicePageContent.illustrations.items.map((item) => ({
      data: { title: item.title, description: item.description }
    }))
  },
  {
    arrayPath: 'organisations.logos',
    items: practicePageContent.organisations.logos.map((fileName) => ({
      data: { alt: fileName.replace(/\.(png|jpg|jpeg|webp|svg)$/i, '') },
      images: [{ field: 'logo', path: `public/images/Logos/${fileName}`, alt: fileName }]
    }))
  }
];
