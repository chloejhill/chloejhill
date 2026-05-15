# Payload 3 + Next.js App Router — Admin mounting, styles, and import map

This document describes how the **ARLA** (`arla-main`) codebase wires Payload CMS 3 admin into Next.js 16.x (App Router), React 19, and Postgres. Use it to diff against another repo where admin styling or custom components are not applying.

---

## 1. How Payload admin is mounted

### Route group

- **`src/app/(payload)/`** — sibling of **`src/app/(frontend)/`**.
- There is **no** `src/app/layout.tsx`. Next.js uses **parallel root layouts** (one per route group) when the top-level `app/layout.tsx` is omitted.

### Admin URL

- **`src/app/(payload)/admin/[[...segments]]/page.tsx`** catches all `/admin` segments.

### Data flow

1. **`(payload)/layout.tsx`** — Loads Payload’s global admin CSS, optional `custom.scss`, wires **`handleServerFunctions`** with **`config` + `importMap`**, and wraps children in **`RootLayout`** from `@payloadcms/next/layouts`.
2. **`admin/[[...segments]]/page.tsx`** — Renders **`RootPage`** from `@payloadcms/next/views` with **`config`**, **`params` / `searchParams`**, and **`importMap`**.
3. **`not-found.tsx`** — Same pattern with **`NotFoundPage`** so 404s inside admin still get the correct shell and map.

### `importMap` wiring

- The map is a **generated** module: **`src/app/(payload)/admin/importMap.js`**.
- It is imported in:
  - **`(payload)/layout.tsx`** → passed to **`handleServerFunctions`** and **`RootLayout`**
  - **`admin/[[...segments]]/page.tsx`** and **`not-found.tsx`** → passed to **`RootPage`** / **`NotFoundPage`**

There is **no** `importMap` field inside `payload.config.ts` in this project; resolution is **config string paths** (see section 3) plus **`payload generate:importmap`** output.

### Critical layout code (`src/app/(payload)/layout.tsx`)

> Payload marks this file as auto-generated; treat edits as you would template output.

```tsx
import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
```

### Admin page (`src/app/(payload)/admin/[[...segments]]/page.tsx`)

```tsx
import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, params, searchParams, importMap })

export default Page
```

---

## 2. How the login page gets its styles

### Primary source

- **`import '@payloadcms/next/css'`** in **`src/app/(payload)/layout.tsx`**.
- That runs for every `/admin` request under this route group, so **login and the rest of admin** share Payload’s design tokens and base styles.
- **`RootLayout`** from `@payloadcms/next` owns the admin document shell. Theme is handled inside Payload’s UI (typically **`data-theme`** on `html`). Custom graphics may target `html[data-theme="dark"]`, etc.

### Optional overrides

- **`import './custom.scss'`** in the same layout. In this repo **`src/app/(payload)/custom.scss` is empty** — it exists as a hook for admin-only overrides.

### Not used for admin

- **`src/app/(frontend)/globals.css`** is only imported from **`(frontend)/layout.tsx`**.
- The **marketing site’s Tailwind/globals do not load on `/admin`** unless you explicitly import them into the payload route group (this project does not).

### Load order (practical)

1. `@payloadcms/next/css`
2. `custom.scss`
3. React tree: `RootLayout` → `RootPage` / children  
4. Custom admin components add their own CSS if they import styles (e.g. SCSS).

### Theme note

- There is **no** separate `ThemeProvider` in **`(payload)`**; Payload admin handles light/dark.
- The frontend uses `payload-theme` in `src/providers/Theme/shared.ts` for the **website**; admin uses Payload’s own theme UI/storage, aligned with `data-theme` where custom SVG/CSS references it.

---

## 3. Files and config lines that matter for admin appearance

| Area | Path / notes |
|------|----------------|
| Admin layout + CSS + server fn + `RootLayout` | `src/app/(payload)/layout.tsx` |
| Admin shell page | `src/app/(payload)/admin/[[...segments]]/page.tsx` |
| Admin not-found | `src/app/(payload)/admin/[[...segments]]/not-found.tsx` |
| Generated import map | `src/app/(payload)/admin/importMap.js` (regenerate; do not hand-maintain) |
| Admin SCSS hook | `src/app/(payload)/custom.scss` |
| Global `admin` UI + meta | `src/payload.config.ts` — `buildConfig({ admin: { components, meta }, ... })` |
| Next + Payload bundling | `next.config.js` — `withPayload(nextConfig, { devBundleServerPackages: false })` |
| TS path aliases | `tsconfig.json` — `@payload-config` → `./src/payload.config.ts`, `@/*` → `./src/*` |
| Regenerate map | `package.json` — `generate:importmap`; `ci` runs migrate + `generate:importmap` + build |
| REST API route (Payload CSS) | `src/app/(payload)/api/[...slug]/route.ts` — `import '@payloadcms/next/css'` |
| GraphQL playground | `src/app/(payload)/api/graphql-playground/route.ts` — `import '@payloadcms/next/css'` |
| Tailwind (site + tooling) | `tailwind.config.mjs` — `darkMode: ['selector', '[data-theme="dark"]']` (useful if custom admin components use Tailwind with the same selector as Payload) |
| PostCSS | `postcss.config.js` |

### `payload.config.ts` — `admin` block (excerpt)

```ts
export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
      graphics: {
        Icon: '@/graphics/Icon/index.tsx#Icon',
        Logo: '@/graphics/Logo/index.tsx#Logo',
      },
    },
    meta: {
      description: 'Autism Research Lab Africa',
      icons: [{ type: 'image/svg+xml', rel: 'icon', url: '/assets/favicon.svg' }],
      openGraph: {
        description: 'Autism Research Lab Africa',
        images: [{ height: 600, url: '/assets/logo-green.svg', width: 800 }],
        title: 'ARLA',
      },
      titleSuffix: 'ARLA - Autism Research Lab Africa',
    },
  },
  // ...db, collections, etc.
})
```

### Custom admin components — config keys → files → import map

| Config location | Key | Value in `payload.config.ts` | Example `importMap.js` key |
|-----------------|-----|------------------------------|----------------------------|
| `admin.components` | `beforeLogin` | `['@/components/BeforeLogin']` | `@/components/BeforeLogin#default` |
| `admin.components` | `beforeDashboard` | `['@/components/BeforeDashboard']` | `@/components/BeforeDashboard#default` |
| `admin.components.graphics` | `Icon` | `'@/graphics/Icon/index.tsx#Icon'` | `@/graphics/Icon/index.tsx#Icon` |
| `admin.components.graphics` | `Logo` | `'@/graphics/Logo/index.tsx#Logo'` | `@/graphics/Logo/index.tsx#Logo` |

**Implementation files (this repo):**

- `src/components/BeforeLogin/index.tsx` — default export
- `src/components/BeforeDashboard/index.tsx` (+ `index.scss` with `@import '~@payloadcms/ui/scss'`)
- `src/graphics/Icon/index.tsx` — named export `Icon`
- `src/graphics/Logo/index.tsx` — named export `Logo`

### Field / global components (paths in config; same `importMap`)

- **Slug field UI:** `src/fields/slug/index.ts` — `components.Field.path: '@/fields/slug/SlugComponent#SlugComponent'`
- **Header array row label:** `src/Header/config.ts` — `RowLabel: '@/Header/RowLabel#RowLabel'`
- **Plugins** add Lexical, SEO, search, Vercel blob client entries to `importMap.js` when you run `generate:importmap`.

### Aliases

- This repo does **not** use a `cms/*` alias.
- Use **`@payload-config`** and **`@/*`** as in `tsconfig.json`.

---

## 4. Recipe for mirroring in another repo (checklist)

1. **Dependencies** — Align `payload`, `@payloadcms/next`, `@payloadcms/ui`, `@payloadcms/db-postgres`, and plugins; match majors/minors where possible (this repo: Payload **3.30.0**, Next **^16.1.6**, React **19** per `package.json`).

2. **`next.config.js`** — `export default withPayload(nextConfig, { … })` from `@payloadcms/next/withPayload`.

3. **`tsconfig.json` paths** — `@payload-config` → `payload.config.ts`; `@/*` → `src/*` (or your source root). Strings in `payload.config` must match what the import map generator resolves.

4. **`src/app/(payload)/layout.tsx`** — Same pattern as section 1: `config`, `@payloadcms/next/css`, `importMap`, `custom.scss`, `handleServerFunctions` with `{ ...args, config, importMap }`, `'use server'` on the server function, `RootLayout` with `config`, `importMap`, `serverFunction`.

5. **`src/app/(payload)/admin/[[...segments]]/page.tsx`** — `RootPage` + `generatePageMetadata` + `importMap`.

6. **`src/app/(payload)/admin/[[...segments]]/not-found.tsx`** — `NotFoundPage` + `importMap`.

7. **`src/app/(payload)/admin/importMap.js`** — Run `payload generate:importmap` (see `package.json`). Commit the file. Re-run after any change to `admin.components`, field `components.*.path`, plugin client components, etc.

8. **`package.json`** — Add script `generate:importmap`; in CI run it **before** `next build`.

9. **Route isolation** — Dedicated `(payload)` group whose layout imports `@payloadcms/next/css`. If admin only mounts under a layout that never imports this CSS, the UI looks unstyled.

10. **Parallel root layouts** — This repo has **no** root `app/layout.tsx`; **`(frontend)/layout.tsx`** owns site `html` + `globals.css`; **`(payload)/layout.tsx`** uses Payload’s `RootLayout` only. If the other app uses a **single** root layout, ensure admin routes still load `@payloadcms/next/css` (or keep the payload route group separate).

11. **Env** — `DATABASE_URI` (or adapter connection string), `PAYLOAD_SECRET`, and any plugin keys (e.g. `RESEND_API_KEY`, `BLOB_READ_WRITE_TOKEN`). Misconfig blocks admin but is separate from CSS.

12. **Common gotchas when diffing** — Missing `withPayload`; missing `@payloadcms/next/css` on the layout wrapping `/admin`; stale or missing `importMap.js`; `importMap` not passed to `RootLayout` / `RootPage` / `handleServerFunctions`; wrong `@payload-config` or `@/*` paths; building without `generate:importmap` after config changes.

---

## 5. Minimal snippets (critical parts only)

### CSS + import map + `RootLayout` entry points

```ts
import '@payloadcms/next/css'
import { importMap } from './admin/importMap.js'
import './custom.scss'
```

### Login-related `admin.components` (see full block in section 3)

- `beforeLogin`, `beforeDashboard`, `graphics.Icon`, `graphics.Logo`

---

## 6. Summary

Admin styling in this working app comes primarily from **`@payloadcms/next/css`** in **`src/app/(payload)/layout.tsx`**, together with **`RootLayout`**, **`importMap`**, and **`handleServerFunctions`** on the same tree as **`RootPage`**. Custom login/dashboard chrome is declared under **`admin.components`** (and field/global `components` paths) in **`payload.config.ts`**, materialized in **`src/app/(payload)/admin/importMap.js`** via **`payload generate:importmap`**, with paths resolved through **`tsconfig`** aliases **`@payload-config`** and **`@/*`**.

When debugging the other repo, compare: **`withPayload`**, **`(payload)/layout.tsx` imports**, **`importMap` wiring**, **`tsconfig` paths**, **CI/build order**, and **whether admin is accidentally nested under a layout that never loads `@payloadcms/next/css`**.
