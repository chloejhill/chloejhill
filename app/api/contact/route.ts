import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const CONTACT_TO = 'chloe@chloejhill.com';
const EMAIL_FROM = 'onboarding@resend.dev';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email is not configured.' },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !('firstName' in body) ||
    !('lastName' in body) ||
    !('email' in body) ||
    !('message' in body)
  ) {
    return NextResponse.json({ error: 'Missing fields.' }, { status: 400 });
  }

  const { firstName, lastName, email, message } = body as Record<
    string,
    unknown
  >;

  const first = typeof firstName === 'string' ? firstName.trim() : '';
  const last = typeof lastName === 'string' ? lastName.trim() : '';
  const fromEmail = typeof email === 'string' ? email.trim() : '';
  const msg = typeof message === 'string' ? message.trim() : '';

  if (!first || !last || !fromEmail || !msg) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const name = `${first} ${last}`.trim();

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(fromEmail);
  const safeMessageHtml = escapeHtml(msg).replace(/\r\n/g, '\n').replace(/\n/g, '<br />');

  const textBody = [
    `Name: ${name}`,
    `Email: ${fromEmail}`,
    '',
    'Message:',
    msg
  ].join('\n');

  const mailtoHref = `mailto:${encodeURIComponent(fromEmail)}`;

  const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family: system-ui, sans-serif; font-size: 16px; line-height: 1.5; color: #111;">
  <p><strong>Name:</strong> ${safeName}</p>
  <p><strong>Email:</strong> <a href="${mailtoHref}">${safeEmail}</a></p>
  <p><strong>Message:</strong></p>
  <p style="margin: 0;">${safeMessageHtml}</p>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: CONTACT_TO,
    replyTo: fromEmail,
    subject: `Contact form: ${name}`,
    text: textBody,
    html: htmlBody
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || 'Failed to send message.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
