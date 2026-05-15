import { setNested } from './setNested';

export type ArrayItemSeed = {
  data: Record<string, unknown>;
  images?: Array<{
    field: string;
    path: string;
    alt: string;
    storageFilename?: string;
  }>;
};

export type ArraySeedDef = {
  arrayPath: string;
  items: ArrayItemSeed[];
};

export async function applyArraySeeds(
  content: Record<string, unknown>,
  pageSlug: string,
  arraySeeds: ArraySeedDef[] | undefined,
  upload: (
    filePath: string,
    alt: string,
    storageFilename?: string
  ) => Promise<string | number>
) {
  for (const def of arraySeeds ?? []) {
    const rows: Record<string, unknown>[] = [];
    for (const item of def.items) {
      const row = { ...item.data };
      for (const image of item.images ?? []) {
        row[image.field] = await upload(
          image.path,
          image.alt,
          image.storageFilename
        );
      }
      rows.push(row);
    }
    setNested(content, def.arrayPath, rows);
  }
}
