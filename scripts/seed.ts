import fs from 'fs';
import path from 'path';

import { SLUG_TO_CONTENT_GROUP } from '../lib/pageContent';
import { applyArraySeeds, type ArraySeedDef } from './pageContent/arraySeeds';
import { articleSeeds } from './pageContent/articlesSeed';
import { aboutContent, aboutImageSeeds } from './pageContent/about';
import { articlesContent } from './pageContent/articles';
import { contactContent, contactImageSeeds } from './pageContent/contact';
import { homeContent, homeImageSeeds } from './pageContent/home';
import { practiceContent, practiceImageSeeds } from './pageContent/practice';
import { projectsContent } from './pageContent/projects';
import { setNested } from './pageContent/setNested';
import {
  thinkingArraySeeds,
  thinkingContent,
  thinkingImageSeeds
} from './pageContent/thinking';
import {
  workWithMeArraySeeds,
  workWithMeContent,
  workWithMeImageSeeds
} from './pageContent/workWithMe';

function loadEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');

  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIndex = line.indexOf('=');
    if (eqIndex <= 0) continue;
    const key = line.slice(0, eqIndex).trim();
    const value = line.slice(eqIndex + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

function ensureEnvLoaded() {
  const cwd = process.cwd();
  loadEnvFile(path.join(cwd, '.env.local'));
  loadEnvFile(path.join(cwd, '.env'));
}

async function postJSON(url: string, data: unknown, token?: string) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `JWT ${token}` } : {})
    },
    body: JSON.stringify(data)
  });
  const body = await res.json().catch(() => ({}));
  return { res, body };
}

async function patchJSON(url: string, data: unknown, token: string) {
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    },
    body: JSON.stringify(data)
  });
  const body = await res.json().catch(() => ({}));
  return { res, body };
}

type ImageSeed = {
  path: string;
  fieldPath: string;
  alt: string;
  /** Override Payload storage filename (avoids reusing wrong legacy media). */
  storageFilename?: string;
};

type PageSeed = {
  slug: string;
  title: string;
  content: Record<string, unknown>;
  imageSeeds?: ImageSeed[];
  arraySeeds?: ArraySeedDef[];
};

const pageSeeds: PageSeed[] = [
  { slug: 'home', title: 'Home', content: homeContent, imageSeeds: homeImageSeeds },
  {
    slug: 'about',
    title: 'About',
    content: aboutContent,
    imageSeeds: aboutImageSeeds
  },
  {
    slug: 'contact',
    title: 'Contact',
    content: contactContent,
    imageSeeds: contactImageSeeds
  },
  {
    slug: 'work-with-me',
    title: 'Work with me',
    content: workWithMeContent,
    imageSeeds: workWithMeImageSeeds,
    arraySeeds: workWithMeArraySeeds
  },
  {
    slug: 'thinking',
    title: 'Thinking',
    content: thinkingContent,
    imageSeeds: thinkingImageSeeds,
    arraySeeds: thinkingArraySeeds
  },
  {
    slug: 'practice',
    title: 'Practice',
    content: practiceContent,
    imageSeeds: practiceImageSeeds
  },
  { slug: 'articles', title: 'Articles', content: articlesContent },
  { slug: 'projects', title: 'Projects', content: projectsContent }
];

/** Unique Payload filename so different paths (e.g. hero.png vs workWithMe/hero.png) never collide. */
function storageFilenameForPath(filePath: string): string {
  const rel = filePath.replace(/^public\/images\/?/, '');
  const parts = rel.split('/').filter(Boolean);
  if (parts.length <= 1) return parts[0] ?? path.basename(filePath);
  const base = parts[parts.length - 1]!;
  const prefix = parts.slice(0, -1).join('-');
  return `${prefix}-${base}`;
}

async function findMediaByFilename(
  serverURL: string,
  token: string,
  filename: string
): Promise<{ id: string | number } | null> {
  const res = await fetch(
    `${serverURL}/api/media?where[filename][equals]=${encodeURIComponent(filename)}&limit=1`,
    { headers: { Authorization: `JWT ${token}` } }
  );
  const body = await res.json().catch(() => ({}));
  const doc = body?.docs?.[0];
  return doc?.id != null ? { id: doc.id } : null;
}

function mimeTypeForFilename(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const types: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.avif': 'image/avif'
  };
  const mime = types[ext];
  if (!mime) {
    throw new Error(`Unsupported image extension for seed upload: ${filename}`);
  }
  return mime;
}

async function uploadMediaFile(
  serverURL: string,
  token: string,
  filePath: string,
  alt: string,
  pageSlug: string,
  storageFilenameOverride?: string
): Promise<string | number> {
  const absolutePath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Media file not found: ${filePath}`);
  }

  const storageFilename =
    storageFilenameOverride ??
    `${pageSlug}__${storageFilenameForPath(filePath)}`;
  const existing = await findMediaByFilename(serverURL, token, storageFilename);
  if (existing) return existing.id;

  const buffer = fs.readFileSync(absolutePath);
  const mimeType = mimeTypeForFilename(storageFilename);
  const file = new File([buffer], storageFilename, { type: mimeType });
  const form = new FormData();
  form.append('file', file);
  if (alt) form.append('alt', alt);

  const res = await fetch(`${serverURL}/api/media`, {
    method: 'POST',
    headers: { Authorization: `JWT ${token}` },
    body: form
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      `Failed to upload ${storageFilename}: ${JSON.stringify(body?.errors ?? body)}`
    );
  }
  return body.doc.id as string | number;
}

async function buildPageContent(
  serverURL: string,
  token: string,
  pageSlug: string,
  content: Record<string, unknown>,
  imageSeeds?: ImageSeed[],
  arraySeeds?: ArraySeedDef[]
) {
  const next = structuredClone(content) as Record<string, unknown>;

  for (const def of imageSeeds ?? []) {
    const mediaId = await uploadMediaFile(
      serverURL,
      token,
      def.path,
      def.alt,
      pageSlug,
      def.storageFilename
    );
    setNested(next, def.fieldPath, mediaId);
  }

  await applyArraySeeds(next, pageSlug, arraySeeds, (filePath, alt, storageFilename) =>
    uploadMediaFile(serverURL, token, filePath, alt, pageSlug, storageFilename)
  );

  return next;
}

async function upsertArticles(serverURL: string, token: string) {
  for (const article of articleSeeds) {
    if (!fs.existsSync(path.join(process.cwd(), article.listImagePath))) {
      throw new Error(
        `Article list image not found: ${article.listImagePath} (article: ${article.slug})`
      );
    }

    const image = await uploadMediaFile(
      serverURL,
      token,
      article.listImagePath,
      article.title,
      'articles',
      article.listStorageFilename
    );
    const featuredImage =
      article.featuredImagePath &&
      fs.existsSync(path.join(process.cwd(), article.featuredImagePath))
        ? await uploadMediaFile(
            serverURL,
            token,
            article.featuredImagePath,
            `${article.title} featured`,
            'articles',
            article.featuredStorageFilename
          )
        : undefined;

    const payload = {
      title: article.title,
      slug: article.slug,
      description: article.description,
      theme: article.theme,
      content: article.content,
      publishedAt: article.publishedAt,
      image,
      ...(featuredImage ? { featuredImage } : {})
    };

    const getRes = await fetch(
      `${serverURL}/api/articles?where[slug][equals]=${encodeURIComponent(article.slug)}&limit=1`,
      { headers: { Authorization: `JWT ${token}` } }
    );
    const getBody = await getRes.json().catch(() => ({}));
    const existing = getBody?.docs?.[0];

    if (existing?.id) {
      const { res, body } = await patchJSON(
        `${serverURL}/api/articles/${existing.id}`,
        payload,
        token
      );
      if (!res.ok) {
        throw new Error(
          `Failed updating article ${article.slug}: ${JSON.stringify(body?.errors ?? body)}`
        );
      }
      console.log(`Updated article seed: ${article.slug}`);
      continue;
    }

    const { res, body } = await postJSON(`${serverURL}/api/articles`, payload, token);
    if (!res.ok) {
      throw new Error(
        `Failed creating article ${article.slug}: ${JSON.stringify(body?.errors ?? body)}`
      );
    }
    console.log(`Created article seed: ${article.slug}`);
  }
}

async function upsertPages(serverURL: string, token: string) {
  for (const page of pageSeeds) {
    const groupName = SLUG_TO_CONTENT_GROUP[page.slug];
    if (!groupName) {
      throw new Error(`No content group for slug: ${page.slug}`);
    }

    const content = await buildPageContent(
      serverURL,
      token,
      page.slug,
      page.content,
      page.imageSeeds,
      page.arraySeeds
    );

    const payload = {
      title: page.title,
      slug: page.slug,
      [groupName]: content
    };

    const getRes = await fetch(
      `${serverURL}/api/pages?where[slug][equals]=${encodeURIComponent(page.slug)}&limit=1`,
      { headers: { Authorization: `JWT ${token}` } }
    );
    const getBody = await getRes.json().catch(() => ({}));
    const existing = getBody?.docs?.[0];

    if (existing?.id) {
      const { res, body } = await patchJSON(
        `${serverURL}/api/pages/${existing.id}`,
        payload,
        token
      );
      if (!res.ok) {
        throw new Error(
          `Failed updating page ${page.slug}: ${JSON.stringify(body?.errors ?? body)}`
        );
      }
      console.log(`Updated page seed: ${page.slug}`);
      continue;
    }

    const { res, body } = await postJSON(
      `${serverURL}/api/pages`,
      payload,
      token
    );
    if (!res.ok) {
      throw new Error(
        `Failed creating page ${page.slug}: ${JSON.stringify(body?.errors ?? body)}`
      );
    }
    console.log(`Created page seed: ${page.slug}`);
  }
}

async function main() {
  ensureEnvLoaded();

  const serverURL =
    process.env.SEED_SERVER_URL ||
    process.env.NEXT_PUBLIC_SERVER_URL ||
    'http://localhost:3000';
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@chloe.local';
  const password = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe123!';

  const health = await fetch(`${serverURL}/api/users/me`).catch(() => null);
  if (!health) {
    throw new Error(
      `Cannot reach ${serverURL}. Start dev server first (npm run dev).`
    );
  }

  const firstRegister = await postJSON(
    `${serverURL}/api/users/first-register`,
    { email, password }
  );
  if (firstRegister.res.ok) {
    console.log(`Created first admin user: ${email}`);
  } else {
    console.log('First user likely already exists, continuing...');
  }

  const login = await postJSON(`${serverURL}/api/users/login`, {
    email,
    password
  });
  if (!login.res.ok || !login.body?.token) {
    throw new Error(
      'Failed login. Set SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD correctly and retry.'
    );
  }

  await upsertPages(serverURL, login.body.token);
  await upsertArticles(serverURL, login.body.token);
  console.log('Seed complete.');
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
