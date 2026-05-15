import type { CmsArticle, CmsCoverItem, CmsTestimonial } from '@/lib/cmsTypes';

export const defaultTestimonials: CmsTestimonial[] = [
  {
    id: 'annelies',
    name: 'Annelies Seawell',
    role: 'Sustainability Analyst, IKEA',
    text: 'Chloe is a creative strategist with deep sustainability expertise and a gift for translating complex systems into compelling stories. A true partner in systems and behaviour change, she inspires better decisions and bold action for a more sustainable future.',
    photoSrc: '/images/Testimony%20Headshots/Annelies.jpeg'
  },
  {
    id: 'bruce',
    name: 'Bruce Tonn',
    role: 'President, Three3',
    text: 'Chloe brings remarkable depth and originality to futures work — blending intellectual rigor with insight into the human and spiritual dimensions of transformation.',
    photoSrc: '/images/Testimony%20Headshots/Bruce.jpg'
  },
  {
    id: 'anita',
    name: 'Anita de Horde',
    role: 'Executive Director, Finance for Biodiversity Foundation',
    text: 'Chloe brings rare clarity and depth to complex work, making difficult ideas accessible and meaningful. Working with her is seamless, energizing and always strategically powerful.',
    photoSrc: '/images/Testimony%20Headshots/Anita.jpeg'
  },
  {
    id: 'rebecca',
    name: 'Rebecca Clements',
    role: 'Sustainability Consultant',
    text: 'Chloe is a true visionary who is consistently ahead of the curve, grounded in purpose and extraordinary at guiding organisations to places they could not reach on their own. She’s an absolute inspiration to work with.',
    photoSrc: '/images/Testimony%20Headshots/rebecca-clements.jpg'
  }
];

export const defaultPublications: CmsCoverItem[] = [
  { id: 'pbl', title: 'PBL', src: '/images/writings/PBL.png' },
  { id: 'cbd', title: 'CBD', src: '/images/writings/CBD.png' },
  { id: 'ffb', title: 'FFB', src: '/images/writings/FFB.png' },
  { id: 'ncaves', title: 'NCAVES', src: '/images/writings/NCAVES.png' },
  { id: 'ipes', title: 'IPES', src: '/images/writings/IPES.png' },
  { id: 'iucn', title: 'IUCN', src: '/images/writings/IUCN.png' },
  { id: 'iucn-nl', title: 'IUCN NL', src: '/images/writings/IUCN NL.png' },
  { id: 'wwf', title: 'WWF', src: '/images/writings/WWF.png' }
];

export const defaultBooks: CmsCoverItem[] = [
  { id: 'futures', title: 'Futures', src: '/images/books/Futures.png' },
  {
    id: 'philanthropy',
    title: 'Philanthropy',
    src: '/images/books/Philanthropy.png'
  },
  {
    id: 'regen',
    title: 'Regen Cultures',
    src: '/images/books/Regen Cultures.png'
  }
];

export const defaultArticles: CmsArticle[] = [
  {
    id: '1',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis.',
    image: '/images/home/thinking.png',
    featuredImage: '/images/home/approach.png',
    date: '01.02.2024',
    theme: 'Theme Name 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis. Maecenas dignissim luctus libero, et ultricies leo. Nunc quis mauris et sapien tincidunt lacinia. Curabitur sollicitudin ante vel dui vulputate luctus. Nullam vitae massa tortor. Curabitur tincidunt condimentum magna, ut semper nunc pellentesque ac. Sed tempus ut quam aliquet viverra. Vivamus non sapien vel lacus elementum feugiat vel ut mi.

Nam mi risus, varius eu lobortis in, molestie tempus nulla. Vestibulum fringilla elit ac volutpat tristique. Donec eu tempor sapien. Pellentesque vitae imperdiet ex. Donec ultrices malesuada ante, malesuada aliquam tellus placerat eu. Cras et semper justo. Ut auctor et ex nec tempor. Suspendisse et lorem quis nibh lobortis porta ullamcorper eu mi. Integer molestie odio ac tristique convallis. Nam blandit leo eget nisl fringilla auctor. Sed lorem leo, finibus porta ornare sit amet, sodales quis nibh. Mauris at dui aliquam, euismod lacus eu, tempor lacus. Ut semper molestie ex, at bibendum quam blandit non.

Proin vulputate id nisl lobortis gravida. Sed sollicitudin odio eget viverra malesuada. Phasellus laoreet arcu at diam tincidunt, at dictum nunc vehicula. Pellentesque ante libero, eleifend non lacus nec, placerat ultrices lacus. Ut fermentum fringilla molestie. Curabitur sollicitudin varius dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus luctus convallis mi vitae cursus. Duis imperdiet quam quis feugiat porta. Pellentesque vel nulla tortor. Suspendisse potenti. Etiam ultricies libero est, in accumsan odio elementum at.

Donec tincidunt porta odio, ac pretium diam ultrices quis. Donec diam ligula, aliquet eu tincidunt cursus, condimentum pellentesque dui. Praesent viverra, quam eu fermentum egestas, sapien dui maximus velit, ac posuere diam velit quis erat. Integer lacinia nisi magna, sit amet interdum nulla facilisis sit amet. Etiam condimentum condimentum metus, eu auctor metus porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed diam eros, egestas vel dolor sit amet, accumsan aliquam velit.

Pellentesque luctus lacus ipsum, sed malesuada ligula sodales sit amet. Nulla quis metus tincidunt, maximus risus nec, porta arcu. Ut lobortis varius nibh at suscipit. Quisque vel sapien sodales sapien eleifend aliquet. Duis at est velit. Vestibulum auctor convallis orci a auctor. Cras ac dictum neque. Integer eu leo volutpat, semper ligula sit amet, scelerisque metus. Vestibulum viverra porta tincidunt. Fusce cursus ultrices risus ac hendrerit. Donec vel quam porta, cursus nunc in, lacinia dui. In eu eleifend elit.`
  },
  {
    id: '2',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-2',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis.',
    image: '/images/practice/connecting.png',
    featuredImage: '/images/hero.png',
    date: '01.02.2024',
    theme: 'Theme Name 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis. Maecenas dignissim luctus libero, et ultricies leo. Nunc quis mauris et sapien tincidunt lacinia. Curabitur sollicitudin ante vel dui vulputate luctus. Nullam vitae massa tortor. Curabitur tincidunt condimentum magna, ut semper nunc pellentesque ac. Sed tempus ut quam aliquet viverra. Vivamus non sapien vel lacus elementum feugiat vel ut mi.

Nam mi risus, varius eu lobortis in, molestie tempus nulla. Vestibulum fringilla elit ac volutpat tristique. Donec eu tempor sapien. Pellentesque vitae imperdiet ex. Donec ultrices malesuada ante, malesuada aliquam tellus placerat eu. Cras et semper justo. Ut auctor et ex nec tempor. Suspendisse et lorem quis nibh lobortis porta ullamcorper eu mi. Integer molestie odio ac tristique convallis. Nam blandit leo eget nisl fringilla auctor. Sed lorem leo, finibus porta ornare sit amet, sodales quis nibh. Mauris at dui aliquam, euismod lacus eu, tempor lacus. Ut semper molestie ex, at bibendum quam blandit non.`
  },
  {
    id: '3',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis.',
    image: '/images/about/philosophy.png',
    featuredImage: '/images/profile.png',
    date: '01.02.2024',
    theme: 'Theme Name 1',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo id enim id bibendum. Morbi facilisis tortor odio. Suspendisse a lobortis arcu. Aliquam pellentesque, dui ut feugiat gravida, ligula felis luctus sem, in blandit ligula nisi id ipsum. Aliquam volutpat quis nisl at iaculis. Maecenas dignissim luctus libero, et ultricies leo. Nunc quis mauris et sapien tincidunt lacinia. Curabitur sollicitudin ante vel dui vulputate luctus. Nullam vitae massa tortor. Curabitur tincidunt condimentum magna, ut semper nunc pellentesque ac. Sed tempus ut quam aliquet viverra. Vivamus non sapien vel lacus elementum feugiat vel ut mi.`
  }
];
