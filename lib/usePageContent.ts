import type { PageOverrides } from '@/lib/pageContent';

export function usePageContent(
  overrides: PageOverrides | null,
  stringDefaults: Record<string, string>,
  imageDefaults: Record<string, string> = {}
) {
  const t = (key: string, fallback?: string) =>
    overrides?.strings?.[key] || stringDefaults[key] || fallback || '';

  const img = (key: string, fallbackSrc?: string) =>
    overrides?.images?.[key]?.src || imageDefaults[key] || fallbackSrc || '';

  const alt = (key: string, fallbackAlt?: string) =>
    overrides?.images?.[key]?.alt || fallbackAlt || '';

  return { t, img, alt };
}
