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

export type CmsEngagementCard = {
  id: string;
  title: string;
  variant: 'cool' | 'warm';
  description: string;
  outcome: string;
};

export type CmsNavLink = {
  id: string;
  label: string;
  href: string;
  openInNewTab?: boolean;
};

export type CmsAattItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconLeft: boolean;
  iconSrc: string;
};

export type CmsPatternCard = {
  id: string;
  title: string;
  description: string;
};

export type CmsIllustrationItem = {
  id: string;
  title: string;
  description: string;
};

export type CmsOrgLogo = {
  id: string;
  alt: string;
  src: string;
};

export type CmsTimelineItem = {
  id: string;
  year: string;
  text: string;
};

export type PageBlocks = {
  testimonials?: CmsTestimonial[];
  engagementCards?: CmsEngagementCard[];
  publications?: CmsCoverItem[];
  books?: CmsCoverItem[];
  aattItems?: CmsAattItem[];
  patternCards?: CmsPatternCard[];
  illustrationItems?: CmsIllustrationItem[];
  organisationLogos?: CmsOrgLogo[];
  timeline?: CmsTimelineItem[];
  workShowsUpBullets?: string[];
  contextBullets?: string[];
};
