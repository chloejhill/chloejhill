import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function brevoConfig() {
  const apiKey = process.env.BREVO_NEWSLETTER_API_KEY;
  const listIdRaw = process.env.BREVO_NEWSLETTER_LIST_ID;

  if (!apiKey || !listIdRaw) {
    return null;
  }

  const listId = Number.parseInt(listIdRaw, 10);
  if (!Number.isFinite(listId) || listId <= 0) {
    return null;
  }

  return { apiKey, listId };
}

export async function POST(request: Request) {
  const config = brevoConfig();
  if (!config) {
    return NextResponse.json(
      { error: 'Newsletter is not configured.' },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null || !('email' in body)) {
    return NextResponse.json({ error: 'Missing email.' }, { status: 400 });
  }

  const emailRaw = (body as Record<string, unknown>).email;
  const email = typeof emailRaw === 'string' ? emailRaw.trim() : '';

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': config.apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      email,
      listIds: [config.listId],
      updateEnabled: true
    })
  });

  if (res.ok) {
    return NextResponse.json({ ok: true });
  }

  let message = 'Failed to subscribe. Please try again.';
  try {
    const data = (await res.json()) as { message?: string };
    if (typeof data.message === 'string' && data.message.trim()) {
      message = data.message;
    }
  } catch {
    // ignore parse errors
  }

  const status = res.status === 401 || res.status === 403 ? 500 : 502;
  return NextResponse.json({ error: message }, { status });
}
