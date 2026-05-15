/** Flatten nested page content objects into dot-keys for t() / img() fallbacks. */
export function flattenPageStrings(
  prefix: string,
  value: Record<string, unknown>,
  out: Record<string, string> = {}
): Record<string, string> {
  for (const [key, child] of Object.entries(value)) {
    const path = `${prefix}.${key}`;
    if (typeof child === 'string') {
      if (child.trim()) out[path] = child;
    } else if (child && typeof child === 'object' && !Array.isArray(child)) {
      flattenPageStrings(path, child as Record<string, unknown>, out);
    }
  }
  return out;
}

export function flattenPageImages(
  prefix: string,
  value: Record<string, unknown>,
  out: Record<string, string> = {}
): Record<string, string> {
  for (const [key, child] of Object.entries(value)) {
    const path = `${prefix}.${key}`;
    if (typeof child === 'string' && child.startsWith('/')) {
      out[path] = child;
    } else if (child && typeof child === 'object' && !Array.isArray(child)) {
      flattenPageImages(path, child as Record<string, unknown>, out);
    }
  }
  return out;
}
