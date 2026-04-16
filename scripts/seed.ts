import fs from 'fs';
import path from 'path';

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

type SeedPage = {
  slug: string;
  title: string;
  strings: Array<{ key: string; value: string }>;
};

const pageSeeds: SeedPage[] = [
  {
    slug: 'home',
    title: 'Home',
    strings: [
      { key: 'home.hero.title', value: 'Systems Change Researcher, Writer, Advisor. Publisher Futurist.' },
      {
        key: 'home.hero.subtitle',
        value: 'Thinking about uncertainty, transformation, and how we meet what is coming.'
      }
    ]
  },
  {
    slug: 'about',
    title: 'About',
    strings: [
      { key: 'about.hero.kicker', value: "Hi! I'm Chloe Hill" },
      {
        key: 'about.hero.title',
        value:
          'Researcher, writer, and practitioner shaped by work in uncertainty, systems change, and transformational practice'
      }
    ]
  },
  {
    slug: 'contact',
    title: 'Contact',
    strings: [
      { key: 'contact.hero.title', value: "Let's\nConnect" },
      { key: 'contact.details.email', value: 'chloehill@mail.com' }
    ]
  },
  {
    slug: 'thinking',
    title: 'Thinking',
    strings: [
      { key: 'thinking.hero.title', value: 'Thinking into the uncertainty' },
      {
        key: 'thinking.hero.subtitle',
        value:
          'Research and inquiry into how we understand, anticipate, and respond to profound change.'
      }
    ]
  },
  {
    slug: 'practice',
    title: 'Practice',
    strings: [
      { key: 'practice.hero.title', value: 'Where thinking meets Reality' },
      {
        key: 'practice.hero.subtitle',
        value: 'Where my thinking has been tested, applied, and refined in practice.'
      }
    ]
  },
  {
    slug: 'articles',
    title: 'Articles',
    strings: [{ key: 'articles.hero.title', value: 'Latest Insights' }]
  },
  {
    slug: 'projects',
    title: 'Projects',
    strings: [{ key: 'projects.hero.title', value: 'Impact Delivered' }]
  }
];

async function upsertPages(serverURL: string, token: string) {
  for (const page of pageSeeds) {
    const getRes = await fetch(
      `${serverURL}/api/pages?where[slug][equals]=${encodeURIComponent(page.slug)}&limit=1`,
      { headers: { Authorization: `JWT ${token}` } }
    );
    const getBody = await getRes.json().catch(() => ({}));
    const existing = getBody?.docs?.[0];

    if (existing?.id) {
      const { res } = await patchJSON(
        `${serverURL}/api/pages/${existing.id}`,
        { title: page.title, slug: page.slug, strings: page.strings },
        token
      );
      if (!res.ok) throw new Error(`Failed updating page ${page.slug}`);
      console.log(`Updated page seed: ${page.slug}`);
      continue;
    }

    const { res } = await postJSON(
      `${serverURL}/api/pages`,
      { title: page.title, slug: page.slug, strings: page.strings },
      token
    );
    if (!res.ok) throw new Error(`Failed creating page ${page.slug}`);
    console.log(`Created page seed: ${page.slug}`);
  }
}

async function main() {
  ensureEnvLoaded();

  const serverURL = process.env.SEED_SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@chloe.local';
  const password = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe123!';

  const health = await fetch(`${serverURL}/api/users/me`).catch(() => null);
  if (!health) throw new Error(`Cannot reach ${serverURL}. Start dev server first (npm run dev).`);

  const firstRegister = await postJSON(`${serverURL}/api/users/first-register`, { email, password });
  if (firstRegister.res.ok) {
    console.log(`Created first admin user: ${email}`);
  } else {
    console.log('First user likely already exists, continuing...');
  }

  const login = await postJSON(`${serverURL}/api/users/login`, { email, password });
  if (!login.res.ok || !login.body?.token) {
    throw new Error('Failed login. Set SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD correctly and retry.');
  }

  await upsertPages(serverURL, login.body.token);
  console.log('Seed complete.');
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});

