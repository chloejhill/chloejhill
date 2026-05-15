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
- Upsert starter `pages` docs (`home`, `about`, `contact`, `thinking`, `practice`, `articles`, `projects`)

Payload uses:
- `DATABASE_URI` from `.env.local`
- `PAYLOAD_SECRET` from `.env.local`

## Vercel deployment

Set these in your Vercel project environment variables:
- `DATABASE_URI` = your hosted Postgres connection string (or rely on `POSTGRES_URL` from Neon)
- `PAYLOAD_SECRET` = strong random secret
- `DATABASE_SSL` = `true` if login/API still fail after deploy
- `NEXT_PUBLIC_SERVER_URL` = `https://your-domain.vercel.app` (no trailing slash)

The production build runs `tsx scripts/ensurePayloadSchema.ts` before `next build`. That creates Payload tables on an empty Neon database (required once; skipped on later deploys).

After the first successful deploy, run seeds:

```bash
SEED_SERVER_URL=https://your-domain.vercel.app \
SEED_ADMIN_EMAIL=... \
SEED_ADMIN_PASSWORD=... \
npm run seed
```

