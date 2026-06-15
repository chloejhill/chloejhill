import type { CmsNavLink } from '@/lib/cmsTypes';

export type SiteFooterSettings = {
  newsletterTitle: string;
  newsletterText: string;
  copyrightText: string;
  privacyLabel: string;
  privacyHref: string;
  creditLabel: string;
  creditHref: string;
};

export type SiteSettingsData = {
  navLinks: CmsNavLink[];
  linkedInUrl: string;
  footer: SiteFooterSettings;
};

export const defaultNavLinks: CmsNavLink[] = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'thinking', label: 'Thinking', href: '/thinking' },
  { id: 'practice', label: 'Practice', href: '/practice' },
  { id: 'work-with-me', label: 'Work with me', href: '/work-with-me' },
  { id: 'articles', label: 'Insights', href: '/insights' },
  { id: 'contact', label: 'Get in touch', href: '/contact' }
];

export const defaultSiteSettings: SiteSettingsData = {
  navLinks: defaultNavLinks,
  linkedInUrl: 'https://www.linkedin.com/in/chloejhill/',
  footer: {
    newsletterTitle: 'Sign up to my quarterly newsletter',
    newsletterText:
      'reflections, tools, and updates from my work and the world around it, sent with intention, not noise',
    copyrightText: '© Chloe J. Hill 2026',
    privacyLabel: 'Privacy Policy',
    privacyHref: '/privacy',
    creditLabel: 'Website by Modern Day Strategy',
    creditHref: 'https://www.moderndaystrategy.com/'
  }
};
