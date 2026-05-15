export type CmsTestimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  photoSrc?: string;
  photoAlt?: string;
};

export type CmsCoverItem = {
  id: string;
  title: string;
  src: string;
};

export type CmsArticle = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  featuredImage?: string;
  date: string;
  theme: string;
  content: string;
};

export type PageBlocks = {
  testimonials?: CmsTestimonial[];
  publications?: CmsCoverItem[];
  books?: CmsCoverItem[];
};
