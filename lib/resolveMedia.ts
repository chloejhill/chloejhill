type MediaDoc = {
  url?: string | null;
  filename?: string | null;
  alt?: string | null;
  id?: string | number;
};

export function resolveMediaSrc(
  media: MediaDoc | string | number | null | undefined
): string | null {
  if (!media || typeof media === 'string' || typeof media === 'number') return null;
  if (typeof media.url === 'string' && media.url.trim()) return media.url;
  if (typeof media.filename === 'string' && media.filename.trim()) {
    return `/api/media/file/${encodeURIComponent(media.filename)}`;
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
