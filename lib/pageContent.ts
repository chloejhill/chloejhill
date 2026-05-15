import type {
  CmsAattItem,
  CmsCoverItem,
  CmsEngagementCard,
  CmsIllustrationItem,
  CmsOrgLogo,
  CmsPatternCard,
  CmsTestimonial,
  CmsTimelineItem,
  PageBlocks
} from '@/lib/cmsTypes';
import { resolveMediaAlt, resolveMediaSrc } from '@/lib/resolveMedia';

export type PageOverrides = {
  strings: Record<string, string>;
  images: Record<string, { src: string; alt?: string }>;
  blocks: PageBlocks;
};

type MediaDoc = {
  url?: string | null;
  filename?: string | null;
  alt?: string | null;
  id?: string | number;
};

/** CMS page slug → top-level group name on the document */
export const SLUG_TO_CONTENT_GROUP: Record<string, string> = {
  home: 'home',
  about: 'about',
  contact: 'contact',
  'work-with-me': 'workWithMe',
  thinking: 'thinking',
  practice: 'practice',
  projects: 'projects'
};

/** CMS page slug → key prefix used in t() / img() on the site */
export function pageKeyPrefix(slug: string): string {
  return SLUG_TO_CONTENT_GROUP[slug] ?? slug;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export function normalizeMediaToSrc(
  media: MediaDoc | string | number | null | undefined
): string | null {
  return resolveMediaSrc(media);
}

function isMediaDoc(value: unknown): value is MediaDoc {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  return Boolean(normalizeMediaToSrc(value as MediaDoc));
}

const BLOCK_ARRAY_KEYS = new Set([
  'items',
  'publications',
  'books',
  'bullets',
  'logos'
]);

function flattenStructured(
  prefix: string,
  value: unknown,
  strings: Record<string, string>,
  images: Record<string, { src: string; alt?: string }>
) {
  if (value == null) return;

  if (isMediaDoc(value)) {
    const src = normalizeMediaToSrc(value);
    if (src) {
      const altText = (value as MediaDoc).alt;
      images[prefix] = {
        src,
        alt: isNonEmptyString(altText) ? altText : undefined
      };
    }
    return;
  }

  if (typeof value === 'string') {
    if (isNonEmptyString(value)) strings[prefix] = value;
    return;
  }

  if (typeof value === 'number' || typeof value === 'boolean') return;

  if (Array.isArray(value)) return;

  if (typeof value === 'object') {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      if (BLOCK_ARRAY_KEYS.has(key)) continue;
      flattenStructured(`${prefix}.${key}`, child, strings, images);
    }
  }
}

function mapEngagementCards(group: unknown): CmsEngagementCard[] | undefined {
  if (!group || typeof group !== 'object') return undefined;
  const items = (group as { items?: unknown[] }).items;
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsEngagementCard[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as {
      id?: string;
      title?: string;
      variant?: string;
      description?: string;
      outcome?: string;
    };
    if (
      !isNonEmptyString(item.title) ||
      !isNonEmptyString(item.description) ||
      !isNonEmptyString(item.outcome)
    ) {
      continue;
    }
    const variant = item.variant === 'warm' ? 'warm' : 'cool';
    mapped.push({
      id: item.id ?? `engagement-${index}`,
      title: item.title,
      variant,
      description: item.description,
      outcome: item.outcome
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function mapTestimonials(group: unknown): CmsTestimonial[] | undefined {
  if (!group || typeof group !== 'object') return undefined;
  const items = (group as { items?: unknown[] }).items;
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsTestimonial[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as {
      id?: string;
      name?: string;
      role?: string;
      quote?: string;
      photo?: MediaDoc | string | number | null;
    };
    if (!isNonEmptyString(item.name) || !isNonEmptyString(item.quote)) continue;
    const photoSrc = resolveMediaSrc(item.photo);
    mapped.push({
      id: item.id ?? `testimonial-${index}`,
      name: item.name,
      role: item.role ?? '',
      text: item.quote,
      ...(photoSrc ? { photoSrc } : {}),
      photoAlt: resolveMediaAlt(item.photo, item.name)
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function mapCoverItems(
  items: unknown[] | undefined,
  imageField: 'cover' | 'image'
): CmsCoverItem[] | undefined {
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped = items
    .map((row, index) => {
      if (!row || typeof row !== 'object') return null;
      const item = row as {
        id?: string;
        label?: string;
        title?: string;
        cover?: MediaDoc | string | number | null;
        image?: MediaDoc | string | number | null;
      };
      const media = item[imageField];
      const src = resolveMediaSrc(media);
      if (!src) return null;
      const title =
        (isNonEmptyString(item.label) && item.label) ||
        (isNonEmptyString(item.title) && item.title) ||
        `Item ${index + 1}`;
      return {
        id: item.id ?? `cover-${index}`,
        title,
        src
      } satisfies CmsCoverItem;
    })
    .filter((row): row is CmsCoverItem => row != null);

  return mapped.length > 0 ? mapped : undefined;
}

function mapAattItems(group: unknown): CmsAattItem[] | undefined {
  if (!group || typeof group !== 'object') return undefined;
  const items = (group as { items?: unknown[] }).items;
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsAattItem[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as {
      id?: string;
      title?: string;
      subtitle?: string;
      description?: string;
      iconLeft?: boolean;
      icon?: MediaDoc | string | number | null;
    };
    const iconSrc = resolveMediaSrc(item.icon);
    if (
      !isNonEmptyString(item.title) ||
      !isNonEmptyString(item.subtitle) ||
      !isNonEmptyString(item.description) ||
      !iconSrc
    ) {
      continue;
    }
    mapped.push({
      id: item.id ?? `aatt-${index}`,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      iconLeft: Boolean(item.iconLeft),
      iconSrc
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function mapPatternCards(group: unknown): CmsPatternCard[] | undefined {
  if (!group || typeof group !== 'object') return undefined;
  const items = (group as { items?: unknown[] }).items;
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsPatternCard[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as { id?: string; title?: string; description?: string };
    if (!isNonEmptyString(item.title) || !isNonEmptyString(item.description)) {
      continue;
    }
    mapped.push({
      id: item.id ?? `pattern-${index}`,
      title: item.title,
      description: item.description
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function mapIllustrationItems(group: unknown): CmsIllustrationItem[] | undefined {
  if (!group || typeof group !== 'object') return undefined;
  const items = (group as { items?: unknown[] }).items;
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsIllustrationItem[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as { id?: string; title?: string; description?: string };
    if (!isNonEmptyString(item.title) || !isNonEmptyString(item.description)) {
      continue;
    }
    mapped.push({
      id: item.id ?? `illustration-${index}`,
      title: item.title,
      description: item.description
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function mapOrganisationLogos(group: unknown): CmsOrgLogo[] | undefined {
  if (!group || typeof group !== 'object') return undefined;
  const items = (group as { logos?: unknown[] }).logos;
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsOrgLogo[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as {
      id?: string;
      alt?: string;
      logo?: MediaDoc | string | number | null;
    };
    const src = resolveMediaSrc(item.logo);
    if (!src) continue;
    mapped.push({
      id: item.id ?? `org-${index}`,
      alt: item.alt ?? `Organisation ${index + 1}`,
      src
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function mapBulletTexts(items: unknown[] | undefined): string[] | undefined {
  if (!Array.isArray(items) || items.length === 0) return undefined;
  const mapped = items
    .map((row) => {
      if (!row || typeof row !== 'object') return null;
      const text = (row as { text?: string }).text;
      return isNonEmptyString(text) ? text : null;
    })
    .filter((row): row is string => row != null);
  return mapped.length > 0 ? mapped : undefined;
}

function mapTimeline(items: unknown[] | undefined): CmsTimelineItem[] | undefined {
  if (!Array.isArray(items) || items.length === 0) return undefined;

  const mapped: CmsTimelineItem[] = [];
  for (const [index, row] of items.entries()) {
    if (!row || typeof row !== 'object') continue;
    const item = row as { id?: string; year?: string; text?: string };
    if (!isNonEmptyString(item.year) || !isNonEmptyString(item.text)) continue;
    mapped.push({
      id: item.id ?? `timeline-${index}`,
      year: item.year,
      text: item.text
    });
  }

  return mapped.length > 0 ? mapped : undefined;
}

function extractPageBlocks(
  slug: string,
  page: Record<string, unknown>
): PageBlocks {
  const groupName = SLUG_TO_CONTENT_GROUP[slug];
  if (!groupName) return {};
  const group = page[groupName];
  if (!group || typeof group !== 'object') return {};

  const data = group as Record<string, unknown>;

  if (slug === 'work-with-me') {
    return {
      engagementCards: mapEngagementCards(data.engagement),
      testimonials: mapTestimonials(data.testimonials)
    };
  }

  if (slug === 'thinking') {
    return {
      publications: mapCoverItems(
        data.publications as unknown[] | undefined,
        'cover'
      ),
      books: mapCoverItems(data.books as unknown[] | undefined, 'cover'),
      aattItems: mapAattItems(data.aatt)
    };
  }

  if (slug === 'practice') {
    const workShowsUp =
      data.workShowsUp && typeof data.workShowsUp === 'object'
        ? (data.workShowsUp as Record<string, unknown>)
        : undefined;
    const context =
      data.context && typeof data.context === 'object'
        ? (data.context as Record<string, unknown>)
        : undefined;
    return {
      patternCards: mapPatternCards(data.patterns),
      illustrationItems: mapIllustrationItems(data.illustrations),
      organisationLogos: mapOrganisationLogos(data.organisations),
      workShowsUpBullets: mapBulletTexts(
        workShowsUp?.bullets as unknown[] | undefined
      ),
      contextBullets: mapBulletTexts(context?.bullets as unknown[] | undefined)
    };
  }

  if (slug === 'about') {
    return {
      timeline: mapTimeline(data.timeline as unknown[] | undefined)
    };
  }

  return {};
}

type LegacyPageDoc = {
  slug?: string;
  strings?: Array<{ key: string; value: string }> | null;
  images?: Array<{
    key: string;
    alt?: string | null;
    image?: MediaDoc | string | null;
  }> | null;
};

export function pageDocToOverrides(
  page: LegacyPageDoc & Record<string, unknown>
): PageOverrides {
  const strings: Record<string, string> = {};
  const images: Record<string, { src: string; alt?: string }> = {};
  const blocks: PageBlocks = {};

  const slug = page.slug;
  if (slug) {
    const groupName = SLUG_TO_CONTENT_GROUP[slug];
    const group = groupName ? page[groupName] : undefined;
    if (group && typeof group === 'object') {
      flattenStructured(pageKeyPrefix(slug), group, strings, images);
    }
    Object.assign(blocks, extractPageBlocks(slug, page));
  }

  for (const row of page.strings ?? []) {
    if (isNonEmptyString(row?.key) && isNonEmptyString(row?.value)) {
      strings[row.key] = row.value;
    }
  }

  for (const row of page.images ?? []) {
    const src = normalizeMediaToSrc(row?.image);
    if (isNonEmptyString(row?.key) && isNonEmptyString(src)) {
      images[row.key] = {
        src,
        alt: isNonEmptyString(row?.alt) ? row.alt : undefined
      };
    }
  }

  return { strings, images, blocks };
}
