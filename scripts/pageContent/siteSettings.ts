import { defaultSiteSettings } from '../../lib/defaultSiteSettings';

export const siteSettingsContent = {
  navLinks: defaultSiteSettings.navLinks.map(({ label, href }) => ({
    label,
    href,
    openInNewTab: false
  })),
  linkedInUrl: defaultSiteSettings.linkedInUrl,
  footer: defaultSiteSettings.footer
};
