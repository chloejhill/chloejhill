import 'server-only';

import type { CmsNavLink } from '@/lib/cmsTypes';
import {
  defaultSiteSettings,
  type SiteFooterSettings,
  type SiteSettingsData
} from '@/lib/defaultSiteSettings';
import { getPayloadClient, isPayloadConfigured } from '@/payload';

export type { SiteFooterSettings, SiteSettingsData } from '@/lib/defaultSiteSettings';

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function mapNavLinks(items: unknown[] | undefined): CmsNavLink[] | undefined {
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsNavLink[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as {
      id?: string;
      label?: string;
      href?: string;
      openInNewTab?: boolean;
    };
    if (!isNonEmptyString(item.label) || !isNonEmptyString(item.href)) continue;
    mapped.push({
      id: item.id ?? `nav-${index}`,
      label: item.label,
      href: item.href,
      openInNewTab: Boolean(item.openInNewTab)
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function mapFooter(footer: unknown): SiteFooterSettings | undefined {
  if (!footer || typeof footer !== 'object') return undefined;
  const data = footer as Record<string, unknown>;

  const newsletterTitle = isNonEmptyString(data.newsletterTitle)
    ? data.newsletterTitle
    : defaultSiteSettings.footer.newsletterTitle;
  const newsletterText = isNonEmptyString(data.newsletterText)
    ? data.newsletterText
    : defaultSiteSettings.footer.newsletterText;
  const copyrightText = isNonEmptyString(data.copyrightText)
    ? data.copyrightText
    : defaultSiteSettings.footer.copyrightText;
  const privacyLabel = isNonEmptyString(data.privacyLabel)
    ? data.privacyLabel
    : defaultSiteSettings.footer.privacyLabel;
  const privacyHref = isNonEmptyString(data.privacyHref)
    ? data.privacyHref
    : defaultSiteSettings.footer.privacyHref;
  const creditLabel = isNonEmptyString(data.creditLabel)
    ? data.creditLabel
    : defaultSiteSettings.footer.creditLabel;
  const creditHref = isNonEmptyString(data.creditHref)
    ? data.creditHref
    : defaultSiteSettings.footer.creditHref;

  return {
    newsletterTitle,
    newsletterText,
    copyrightText,
    privacyLabel,
    privacyHref,
    creditLabel,
    creditHref
  };
}

export function globalDocToSiteSettings(doc: Record<string, unknown>): SiteSettingsData {
  const navLinks =
    mapNavLinks(doc.navLinks as unknown[] | undefined) ?? defaultSiteSettings.navLinks;
  const linkedInUrl = isNonEmptyString(doc.linkedInUrl)
    ? doc.linkedInUrl
    : defaultSiteSettings.linkedInUrl;
  const footer =
    mapFooter(doc.footer) ?? defaultSiteSettings.footer;

  return { navLinks, linkedInUrl, footer };
}

export async function fetchSiteSettings(): Promise<SiteSettingsData> {
  if (!isPayloadConfigured()) return defaultSiteSettings;

  try {
    const payload = await getPayloadClient();
    const doc = await payload.findGlobal({
      slug: 'site-settings',
      depth: 0
    });

    if (!doc) return defaultSiteSettings;
    return globalDocToSiteSettings(doc as Record<string, unknown>);
  } catch {
    return defaultSiteSettings;
  }
}
