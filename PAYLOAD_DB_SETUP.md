# Payload DB Setup (Local + Vercel)

## Local development (no Docker)

1. Ensure local PostgreSQL is installed and running on `localhost:5432`.
2. Create local role + DB (already done in this setup):
   - role: `chloe`
   - database: `chloe_site`
3. Copy env template:
   - `cp .env.example .env.local`
4. Start app:
   - `npm run dev`
5. Verify DB credentials quickly:
   - `DATABASE_URI=postgres://chloe:chloe_local_password@localhost:5432/chloe_site npm run db:check`
6. Open Payload admin:
   - `http://localhost:3000/admin`

## Seed initial user + default text

With the app running (`npm run dev`), run:
- `npm run seed`

This will:
- Create first admin user if missing (`SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` or defaults)
- Upsert starter `pages` docs (`home`, `about`, `contact`, `thinking`, `practice`, `work-with-me`, `projects`) plus **Articles** as a separate collection

Payload uses:
- `DATABASE_URI` from `.env.local`
- `PAYLOAD_SECRET` from `.env.local`

## Vercel deployment

Set these in your Vercel project environment variables:
- `DATABASE_URI` = your hosted Postgres connection string (or rely on `POSTGRES_URL` from Neon)
- `PAYLOAD_SECRET` = strong random secret
- `DATABASE_SSL` = `true` if login/API still fail after deploy
- `NEXT_PUBLIC_SERVER_URL` = `https://your-domain.vercel.app` (no trailing slash)

The production build runs `ensurePayloadSchema` before `next build`. It **only** creates Payload tables when the `users` table is missing (empty database). It does **not** run Drizzle `push` on every deploy — interactive rename prompts (for example `articles_hero_title` → `thinking_inquiry_title`) would fail on Vercel with exit code **13** and very long builds.

If `/api/pages` errors after you remove fields from the `pages` collection, sync the database **once** from your machine (production `DATABASE_URI` + `PAYLOAD_SECRET`):

1. If the build log showed a rename hint for `articles_hero_title` → `thinking_inquiry_title`, run:
   - `DATABASE_URI='...' DATABASE_SSL=true npm run db:fix-pages-rename`
2. Then apply any remaining schema:
   - `DATABASE_URI='...' PAYLOAD_SECRET='...' DATABASE_SSL=true npm run push:schema`
3. Redeploy (build should stay ~1–2 minutes) and run `npm run seed` against production if needed.

After the first successful deploy, run seeds:

```bash
SEED_SERVER_URL=https://your-domain.vercel.app \
SEED_ADMIN_EMAIL=... \
SEED_ADMIN_PASSWORD=... \
npm run seed
```

