type MediaDoc = {
  url?: string | null;
  filename?: string | null;
  alt?: string | null;
  id?: string | number;
  width?: number | null;
  height?: number | null;
};

const API_MEDIA_PREFIX = '/api/media/file/';

/**
 * next/image returns 400 for absolute same-origin Payload URLs
 * (e.g. https://site.com/api/media/file/x). Use a relative path instead.
 */
export function normalizeMediaUrlForNext(url: string): string {
  const trimmed = url.trim();
  const apiIndex = trimmed.indexOf(API_MEDIA_PREFIX);
  if (apiIndex !== -1) {
    return trimmed.slice(apiIndex);
  }
  return trimmed;
}

export function resolveMediaSrc(
  media: MediaDoc | string | number | null | undefined
): string | null {
  if (!media || typeof media === 'string' || typeof media === 'number') return null;
  if (typeof media.url === 'string' && media.url.trim()) {
    return normalizeMediaUrlForNext(media.url);
  }
  if (typeof media.filename === 'string' && media.filename.trim()) {
    return `${API_MEDIA_PREFIX}${encodeURIComponent(media.filename)}`;
  }
  return null;
}

export function resolveMediaAlt(
  media: MediaDoc | string | number | null | undefined,
  fallback = ''
): string {
  if (!media || typeof media === 'string' || typeof media === 'number') return fallback;
  if (typeof media.alt === 'string' && media.alt.trim()) return media.alt;
  return fallback;
}

export function resolveMediaDimensions(
  media: MediaDoc | string | number | null | undefined
): { width?: number; height?: number } {
  if (!media || typeof media === 'string' || typeof media === 'number') {
    return {};
  }
  const width = typeof media.width === 'number' && media.width > 0 ? media.width : undefined;
  const height =
    typeof media.height === 'number' && media.height > 0 ? media.height : undefined;
  return { width, height };
}
