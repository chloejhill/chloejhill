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
- `DATABASE_URI` = your hosted Postgres connection string
- `PAYLOAD_SECRET` = strong random secret
- `DATABASE_SSL` = `true` if required by your DB provider
- `NEXT_PUBLIC_SERVER_URL` = your production URL

No code changes are needed between local and Vercel; only env vars differ.

