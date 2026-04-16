## Payload CMS setup (Next.js App Router): editable text + images on all pages

This doc describes a practical way to add **Payload CMS** to a **Next.js (App Router)** project so admins can edit:
- Page **text** (including rich text)
- Page **images** (uploads via Payload Media)
- A flexible page layout system (so you can keep adding sections without changing the DB each time)

It also shows how to render those editable pages on the frontend by **slug**.

---

## High-level architecture

1. **Payload admin UI** lives inside your Next.js app.
2. You create two key collections:
   - `media`: stores uploaded images (with resizing / image sizes)
   - `pages`: stores each editable page by `slug`, with fields like `hero` and `layout` blocks
3. Each “image spot” on the page is an `upload` field that references `media`.
4. Each “text spot” is either:
   - `text` / `textarea` fields, or
   - `richText` fields (Lexical editor), which Payload provides
5. The frontend route `/[slug]` fetches the published page by slug and renders:
   - `hero`
   - `layout` blocks (each block knows which fields it contains)

---

## 0) Prerequisites

- Next.js with App Router (`app/` directory)
- Node.js 18+ (Payload v3 supports Node 18+)
- Postgres database
- A storage provider for uploaded media (examples):
  - Local disk (dev)
  - S3 / Cloud storage
  - Vercel Blob (common)

---

## 1) Install dependencies

Run:

```bash
npm i payload @payloadcms/next @payloadcms/db-postgres
```

Then pick a storage adapter. For Vercel Blob:

```bash
npm i @payloadcms/storage-vercel-blob
```

Optional but common:

Rich text with Lexical:

```bash
npm i @payloadcms/richtext-lexical
```

Live preview (draft mode) (optional):

```bash
npm i @payloadcms/live-preview-react
```

SEO plugin (optional):

```bash
npm i @payloadcms/plugin-seo
```

---

## 2) Environment variables

In your `.env`:

```bash
DATABASE_URI=postgres://USER:PASSWORD@HOST:5432/DBNAME
PAYLOAD_SECRET=some-random-string

# Storage example (Vercel Blob)
BLOB_READ_WRITE_TOKEN=your-token

# For Payload admin + previews
NEXT_PUBLIC_SERVER_URL=https://your-domain.com
PREVIEW_SECRET=optional-preview-secret-if-you-enable-draft-preview
```

Notes:
- `PAYLOAD_SECRET` is required by Payload.
- `DATABASE_URI` is required if using Postgres.
- If you enable live preview, you also need `PREVIEW_SECRET`.

---

## 3) Create Payload entry files

### 3.1 `payload.config.ts`

Create a file similar to this (adjust imports for your chosen storage adapter):

```ts
// payload.config.ts
import { buildConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

import { Pages } from './collections/Pages';
import { Media } from './collections/Media';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: ' - Admin',
    },
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: { rejectUnauthorized: true },
    },
  }),
  collections: [Pages, Media],
  // If you have globals like header/footer, add them here:
  // globals: [Header, Footer],
  plugins: [
    // Media storage adapter
    vercelBlobStorage({
      collections: {
        // Only enable this for collections that contain Payload "upload" files.
        media: true,
        // pages: false,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
```

### 3.2 `payload.ts` (server-side helper)

```ts
// payload.ts
import { getPayload } from 'payload';
import config from './payload.config';

let cached: { client: Awaited<ReturnType<typeof getPayload>> | null; promise: Promise<any> | null } =
  (global as any).payload || { client: null, promise: null };

if (!(global as any).payload) (global as any).payload = cached;

export async function getPayloadClient() {
  if (!cached.promise) {
    cached.promise = getPayload({ config });
  }
  cached.client = await cached.promise;
  return cached.client;
}
```

---

## 4) Collections

### 4.1 `collections/Media.ts`

This collection stores uploaded images. Payload’s `upload` fields will reference this.

```ts
// collections/Media.ts
import type { CollectionConfig } from 'payload';
import { defaultLexical } from '../fields/defaultLexical';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,   // tighten later
    update: () => true,   // tighten later
    delete: () => true,   // tighten later
  },
  fields: [
    { name: 'alt', type: 'text' },
    // Optional: caption as rich text
    {
      name: 'caption',
      type: 'richText',
      editor: defaultLexical,
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      { name: 'thumbnail', width: 300 },
      { name: 'small', width: 600 },
      { name: 'medium', width: 900 },
      { name: 'large', width: 1400 },
      { name: 'xlarge', width: 1920 },
      // OG-like example
      { name: 'og', width: 1200, height: 630, crop: 'center' },
    ],
  },
};
```

### 4.2 Rich text editor (example) `fields/defaultLexical.ts`

```ts
// fields/defaultLexical.ts
import { lexicalEditor, ParagraphFeature, BoldFeature, ItalicFeature, UnderlineFeature, HeadingFeature, FixedToolbarFeature, InlineToolbarFeature, LinkFeature } from '@payloadcms/richtext-lexical';

export const defaultLexical = lexicalEditor({
  features: ({ rootFeatures }) => [
    ...rootFeatures,
    ParagraphFeature(),
    UnderlineFeature(),
    BoldFeature(),
    ItalicFeature(),
    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
    FixedToolbarFeature(),
    InlineToolbarFeature(),
    LinkFeature({
      enabledCollections: ['pages'], // adjust if needed
    }),
  ],
});
```

### 4.3 `collections/Pages.ts`

This is the core of “editable content on all pages”.

Key ideas:
- Add a `slug` field so you can fetch pages by URL.
- Add a `hero` group for top-of-page editable fields.
- Add a `layout` field using Payload “blocks” so you can add sections in the admin.
- Each section uses `richText` and `upload` fields (uploads reference `media`).

```ts
// collections/Pages.ts
import type { CollectionConfig } from 'payload';

import { HeroBlock } from '../sections/HeroBlock';
import { RichTextSection } from '../sections/RichTextSection';
import { ImageSection } from '../sections/ImageSection';

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: ({ req }) => {
      // If you want pages to be viewable without auth, return true.
      // For draft/publish behavior see Payload docs.
      return true;
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  defaultPopulate: {
    hero: true,
    layout: true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },

    {
      name: 'hero',
      type: 'group',
      fields: HeroBlock,
    },

    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        RichTextSection,
        ImageSection,
        // Add more sections/blocks over time.
      ],
    },

    // Basic SEO/meta fields (optional)
    {
      name: 'meta',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },

    // Enable draft/publish
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
  ],
  versions: {
    drafts: true,
  },
  hooks: {
    // Optional: revalidate cache after publish/edit.
  },
};
```

---

## 5) Define sections/blocks (examples)

### 5.1 `sections/HeroBlock.ts`

```ts
// sections/HeroBlock.ts
import type { Field } from 'payload';
import { defaultLexical } from '../fields/defaultLexical';

export const HeroBlock: Field[] = [
  {
    name: 'headline',
    type: 'text',
    required: true,
  },
  {
    name: 'intro',
    type: 'richText',
    editor: defaultLexical,
  },
  {
    name: 'primaryImage',
    type: 'upload',
    relationTo: 'media',
  },
];
```

### 5.2 `sections/RichTextSection.ts`

```ts
// sections/RichTextSection.ts
import type { Block } from 'payload';
import { defaultLexical } from '../fields/defaultLexical';

export const RichTextSection: Block = {
  slug: 'richTextSection',
  interfaceName: 'RichTextSection',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: defaultLexical,
      required: true,
    },
  ],
};
```

### 5.3 `sections/ImageSection.ts`

```ts
// sections/ImageSection.ts
import type { Block } from 'payload';

export const ImageSection: Block = {
  slug: 'imageSection',
  interfaceName: 'ImageSection',
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'caption', type: 'text' },
    { name: 'altOverride', type: 'text', label: 'Alt text (optional)' },
  ],
};
```

---

## 6) Render uploaded images on the frontend

You typically do:
- Payload returns a `media` object for the upload field.
- That object includes `url` and `filename` (depending on storage).
- Use `next/image` to render.

Example image component:

```tsx
// components/PayloadImage.tsx
import Image from 'next/image';

type PayloadMedia = {
  url?: string | null;
  filename?: string | null;
  alt?: string | null;
  updatedAt?: string;
};

export function PayloadImage({
  resource,
  alt,
  className,
}: {
  resource: PayloadMedia | null | undefined;
  alt?: string;
  className?: string;
}) {
  if (!resource) return null;

  // Prefer url if present
  const src = resource.url
    ? resource.url
    : resource.filename
      ? `/api/media/file/${encodeURIComponent(resource.filename)}`
      : null;

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt ?? resource.alt ?? ''}
      fill
      className={className}
      sizes="100vw"
    />
  );
}
```

You will likely need to adjust the `src` construction depending on your storage provider.

---

## 7) Add Payload admin UI route (Next.js App Router)

Payload’s `@payloadcms/next` provides an embedded admin.

Create a layout file under `app` (adjust folder name if you like):

### `app/(payload)/layout.tsx`

```tsx
// app/(payload)/layout.tsx
import config from '../../../payload.config';
import { importMap } from './admin/importMap';
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts';
import type { ServerFunctionClient } from 'payload';

type Args = { children: React.ReactNode };

const serverFunction: ServerFunctionClient = async function (args) {
  'use server';
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

export default function Layout({ children }: Args) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
```

You’ll also need to run Payload’s `generate:importmap`:

```bash
npx payload generate:importmap
```

---

## 8) Frontend routing: fetch page by slug and render blocks

Create a dynamic route:

### `app/[slug]/page.tsx`

```tsx
import { getPayload } from 'payload';
import config from '../../payload.config';

import { PayloadImage } from '@/components/PayloadImage';

export default async function Page({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: params.slug } },
    limit: 1,
    pagination: false,
    draft: false, // enable draft mode if you implement preview
  });

  const page = result.docs?.[0];
  if (!page) return <div>Not found</div>;

  return (
    <main>
      {/* Hero */}
      <section>
        {page.hero?.headline && <h1>{page.hero.headline}</h1>}
        {page.hero?.intro && (
          <div>
            {/* Render rich text using Payload/lexical renderer that matches your setup */}
            {/* Replace this with your own rich text render component */}
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(page.hero.intro, null, 2)}</pre>
          </div>
        )}
        <div style={{ position: 'relative', width: '100%', height: 400 }}>
          <PayloadImage resource={page.hero?.primaryImage as any} />
        </div>
      </section>

      {/* Layout blocks */}
      {Array.isArray(page.layout) && page.layout.length > 0 && (
        <div>
          {page.layout.map((block: any, i: number) => {
            switch (block.blockType) {
              case 'richTextSection':
                return (
                  <section key={block.id ?? i}>
                    {/* render block.content richText */}
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(block.content, null, 2)}</pre>
                  </section>
                );

              case 'imageSection':
                return (
                  <section key={block.id ?? i}>
                    <div style={{ position: 'relative', width: '100%', height: 300 }}>
                      <PayloadImage resource={block.image as any} />
                    </div>
                    {block.caption && <p>{block.caption}</p>}
                  </section>
                );

              default:
                return null;
            }
          })}
        </div>
      )}
    </main>
  );
}
```

Important:
- For rich text fields you should use Payload’s recommended lexical renderer (or convert to HTML). The doc above uses a placeholder `pre` so you can wire your renderer.

---

## 8.1) Mixed routing: fixed routes + `/:slug` support

If your project has both:
- fixed routes like `/about`, `/contact`, `/get-involved`
- and a generic dynamic route like `app/[slug]/page.tsx`

…you can still make everything editable by ensuring each fixed route renders the corresponding Payload `pages` document by `slug`.

### Recommended pattern
1. Implement the shared “render Payload page” logic once (for example `renderPayloadPage(slug)` or a `PayloadPage` component).
2. Call it from:
   - `app/[slug]/page.tsx`
   - and from each fixed route file `app/about/page.tsx`, `app/contact/page.tsx`, etc.

### Fixed route wrapper example (`/about`)

```tsx
// app/about/page.tsx
import { getPayload } from 'payload';
import config from '../../payload.config';

import { PayloadImage } from '@/components/PayloadImage';

export default async function About() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'about' } },
    limit: 1,
    pagination: false,
    draft: false,
  });

  const page = result.docs?.[0];
  if (!page) return <div>Not found</div>;

  return (
    <main>
      <h1>{page.hero?.headline}</h1>

      {page.hero?.primaryImage && (
        <div style={{ position: 'relative', width: '100%', height: 300 }}>
          <PayloadImage resource={page.hero.primaryImage as any} />
        </div>
      )}

      {/* Render page.layout blocks here using your shared block renderer */}
    </main>
  );
}
```

### Behavior rules
- Your Payload `pages` collection must contain a document with `slug: 'about'` for `/about` to work.
- The dynamic route `app/[slug]/page.tsx` should fetch by `params.slug`.
- If a page is missing or deleted, return a `404` (recommended) instead of showing the wrong template.

## 9) Live preview (optional but useful)

If you want the preview to update as the admin edits, you can implement Next.js draft mode:

1. Add preview endpoint that:
   - verifies `previewSecret`
   - checks Payload auth
   - enables `draftMode()` and redirects to a relative preview path
2. On the frontend, include `PayloadLivePreview` when draft mode is enabled.

Skeleton:

### `app/preview/route.ts`

```ts
import type { NextRequest } from 'next/server';
import { draftMode } from 'next/headers';
import { getPayload } from 'payload';
import config from '../../payload.config';

export async function GET(req: NextRequest) {
  const payload = await getPayload({ config });
  const { searchParams } = new URL(req.url);
  const previewSecret = searchParams.get('previewSecret');
  const path = searchParams.get('path');

  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response('Forbidden', { status: 403 });
  }

  const draft = await draftMode();
  draft.enable();

  return Response.redirect(new URL(path ?? '/', req.url));
}
```

### `components/LivePreviewListener.tsx`

```tsx
'use client';
import { RefreshRouteOnSave } from '@payloadcms/live-preview-react';
import { useRouter } from 'next/navigation';

export function LivePreviewListener() {
  const router = useRouter();

  return (
    <RefreshRouteOnSave
      refresh={router.refresh}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL as string}
    />
  );
}
```

---

## 10) What you need to confirm for your “edit all pages” goal

If you want admins to edit text + images on *every* page, then:
- Every place you want editable must correspond to a Payload field type (`text`, `textarea`, `richText`, `upload`).
- Your frontend renderer must read those fields from the `pages` document and render them.
- If you currently have pages that are not driven by the `pages` collection, you must route them through the `/[slug]` renderer (or a shared renderer).

---

## 11) Checklist (copy/paste)

1. Create `payload.config.ts` and `payload.ts`
2. Create collections: `media` and `pages`
3. Add `hero` + `layout` blocks to `pages`
4. Add block definitions for each section type you want editors to manage
5. Add Next Payload admin layout under `app/(payload)/layout.tsx`
6. Implement `/[slug]` frontend route to fetch pages by slug and render hero + blocks
7. Verify image uploads reference `media` and that your frontend builds the correct image `src`
8. (Optional) Add live preview via draft mode

