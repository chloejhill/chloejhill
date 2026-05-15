export function setNested(
  target: Record<string, unknown>,
  path: string,
  value: unknown
) {
  const parts = path.split('.');
  let current: Record<string, unknown> = target;

  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i]!;
    if (
      !current[key] ||
      typeof current[key] !== 'object' ||
      Array.isArray(current[key])
    ) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }

  current[parts[parts.length - 1]!] = value;
}
