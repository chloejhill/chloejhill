import { thinkingPageContent } from '../../lib/pageDefaults/thinking';
import type { ArraySeedDef } from './arraySeeds';

const { booksSection, ...thinkingPageFields } = thinkingPageContent;

export const thinkingContent = {
  ...thinkingPageFields,
  booksSection,
  publications: [],
  books: [] as { title: string; cover?: unknown }[]
};

export const thinkingImageSeeds = [
  {
    path: 'public/images/services/heroleft.png',
    fieldPath: 'hero.leftImage',
    alt: 'Hero left'
  },
  {
    path: 'public/images/services/heroright.png',
    fieldPath: 'hero.rightImage',
    alt: 'Hero right'
  },
  { path: 'public/images/syschange.png', fieldPath: 'inquiry.bannerImage', alt: 'Systems change' },
  { path: 'public/images/finq.png', fieldPath: 'futureInquiry.bannerImage', alt: 'Future inquiry' },
  { path: 'public/images/leaf.png', fieldPath: 'transcendental.leafImage', alt: '' },
  { path: 'public/images/innerd.png', fieldPath: 'innerDimension.bannerImage', alt: 'Inner dimension' },
  { path: 'public/images/dots.png', fieldPath: 'innerDimension.dotsImage', alt: 'The Dots Directory' },
  { path: 'public/images/evolution.png', fieldPath: 'evolution.backgroundImage', alt: '' },
  { path: 'public/images/home/dash.png', fieldPath: 'evolution.dashImage', alt: '' }
];

export const thinkingArraySeeds: ArraySeedDef[] = [
  {
    arrayPath: 'publications',
    items: [
      { data: { label: 'PBL' }, images: [{ field: 'cover', path: 'public/images/writings/PBL.png', alt: 'PBL', storageFilename: 'publication-pbl.png' }] },
      { data: { label: 'CBD' }, images: [{ field: 'cover', path: 'public/images/writings/CBD.png', alt: 'CBD', storageFilename: 'publication-cbd.png' }] },
      { data: { label: 'FFB' }, images: [{ field: 'cover', path: 'public/images/writings/FFB.png', alt: 'FFB', storageFilename: 'publication-ffb.png' }] },
      { data: { label: 'NCAVES' }, images: [{ field: 'cover', path: 'public/images/writings/NCAVES.png', alt: 'NCAVES', storageFilename: 'publication-ncaves.png' }] },
      { data: { label: 'IPES' }, images: [{ field: 'cover', path: 'public/images/writings/IPES.png', alt: 'IPES', storageFilename: 'publication-ipes.png' }] },
      { data: { label: 'IUCN' }, images: [{ field: 'cover', path: 'public/images/writings/IUCN.png', alt: 'IUCN', storageFilename: 'publication-iucn.png' }] },
      { data: { label: 'IUCN NL' }, images: [{ field: 'cover', path: 'public/images/writings/IUCN NL.png', alt: 'IUCN NL', storageFilename: 'publication-iucn-nl.png' }] },
      { data: { label: 'WWF' }, images: [{ field: 'cover', path: 'public/images/writings/WWF.png', alt: 'WWF', storageFilename: 'publication-wwf.png' }] }
    ]
  },
  {
    arrayPath: 'books',
    items: [
      { data: { title: 'Futures' }, images: [{ field: 'cover', path: 'public/images/books/Futures.png', alt: 'Futures', storageFilename: 'book-futures.png' }] },
      { data: { title: 'Philanthropy' }, images: [{ field: 'cover', path: 'public/images/books/Philanthropy.png', alt: 'Philanthropy', storageFilename: 'book-philanthropy.png' }] },
      { data: { title: 'Regen Cultures' }, images: [{ field: 'cover', path: 'public/images/books/Regen Cultures.png', alt: 'Regen Cultures', storageFilename: 'book-regen-cultures.png' }] }
    ]
  },
  {
    arrayPath: 'aatt.items',
    items: thinkingPageContent.aatt.items.map((item) => ({
      data: {
        title: item.title,
        subtitle: item.subtitle,
        description: item.description,
        iconLeft: item.iconLeft
      },
      images: [{ field: 'icon', path: `public${item.iconImage}`, alt: item.title }]
    }))
  }
];
