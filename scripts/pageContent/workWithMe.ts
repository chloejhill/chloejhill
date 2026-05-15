import { defaultEngagementCards } from '../../lib/defaultContent';
import type { ArraySeedDef } from './arraySeeds';

export const workWithMeContent = {
  hero: {
    title: 'Work with me',
    subtitle:
      'Helping philanthropists, foundations, advisors, and mission-driven leaders navigate complexity, long-term transitions, and strategic uncertainty with greater clarity.'
  },
  ways: {
    title: 'Ways I Typically Support',
    intro:
      'I support those seeking to better understand complex systems, identify where meaningful change may be possible, and act with greater clarity in uncertain conditions. While each context is different, my work typically takes shape through four recurring pathways.'
  },
  engagement: {
    title: 'Common Forms of Engagement',
    intro:
      'I support philanthropists, foundations, advisors, and mission-driven leaders navigating complexity, uncertainty, and long-term change.'
  },
  testimonials: {
    title: 'Nice things people say',
    items: []
  },
  cta: {
    title: 'If this resonates',
    body: 'If you are exploring complex systems, seeking clearer strategic orientation, or considering where meaningful long-term action may be possible, I’d be glad to explore whether this work may be useful.',
    link: '→ Request a conversation'
  }
};

export const workWithMeImageSeeds = [
  {
    path: 'public/images/workWithMe/hero.png',
    fieldPath: 'hero.image',
    alt: 'Mountains',
    storageFilename: 'workWithMe-hero.png'
  },
  {
    path: 'public/images/workWithMe/overlay.png',
    fieldPath: 'hero.overlay',
    alt: ''
  },
  {
    path: 'public/images/services/starttrans.png',
    fieldPath: 'cta.image',
    alt: 'Chloe profile'
  }
];

export const workWithMeArraySeeds: ArraySeedDef[] = [
  {
    arrayPath: 'engagement.items',
    items: defaultEngagementCards.map((card) => ({
      data: {
        title: card.title,
        variant: card.variant,
        description: card.description,
        outcome: card.outcome
      }
    }))
  },
  {
    arrayPath: 'testimonials.items',
    items: [
      {
        data: {
          name: 'Annelies Seawell',
          role: 'Sustainability Analyst, IKEA',
          quote:
            'Chloe is a creative strategist with deep sustainability expertise and a gift for translating complex systems into compelling stories. A true partner in systems and behaviour change, she inspires better decisions and bold action for a more sustainable future.'
        },
        images: [
          {
            field: 'photo',
            path: 'public/images/Testimony Headshots/Annelies.jpeg',
            alt: 'Annelies Seawell',
            storageFilename: 'testimonial-annelies.jpeg'
          }
        ]
      },
      {
        data: {
          name: 'Bruce Tonn',
          role: 'President, Three3',
          quote:
            'Chloe brings remarkable depth and originality to futures work — blending intellectual rigor with insight into the human and spiritual dimensions of transformation.'
        },
        images: [
          {
            field: 'photo',
            path: 'public/images/Testimony Headshots/Bruce.jpg',
            alt: 'Bruce Tonn',
            storageFilename: 'testimonial-bruce.jpg'
          }
        ]
      },
      {
        data: {
          name: 'Anita de Horde',
          role: 'Executive Director, Finance for Biodiversity Foundation',
          quote:
            'Chloe brings rare clarity and depth to complex work, making difficult ideas accessible and meaningful. Working with her is seamless, energizing and always strategically powerful.'
        },
        images: [
          {
            field: 'photo',
            path: 'public/images/Testimony Headshots/Anita.jpeg',
            alt: 'Anita de Horde',
            storageFilename: 'testimonial-anita.jpeg'
          }
        ]
      },
      {
        data: {
          name: 'Rebecca Clements',
          role: 'Sustainability Consultant',
          quote:
            'Chloe is a true visionary who is consistently ahead of the curve, grounded in purpose and extraordinary at guiding organisations to places they could not reach on their own. She’s an absolute inspiration to work with.'
        },
        images: [
          {
            field: 'photo',
            path: 'public/images/Testimony Headshots/rebecca-clements.jpg',
            alt: 'Rebecca Clements',
            storageFilename: 'testimonial-rebecca-clements.jpg'
          }
        ]
      }
    ]
  }
];
