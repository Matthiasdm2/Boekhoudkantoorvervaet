import nodemailer from 'nodemailer';

// In-memory throttling (per server instance / runtime)
const lastRequests = new Map();
const WINDOW_MS = 60_000; // 1 minuut
const MAX_PER_WINDOW = 5;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ success: false, error: 'Ongeldig JSON body.' }, 400);
  }

  const { name = '', email = '', message = '', website, captcha } = body || {};
  // reCAPTCHA validatie
  if (!captcha) {
    return json({ success: false, error: 'Captcha ontbreekt.' }, 400);
  }
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn('[contact] Geen reCAPTCHA secret key geconfigureerd.');
    return json({ success: false, error: 'Server captcha configuratie ontbreekt.' }, 500);
  }
  try {
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(captcha)}`
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return json({ success: false, error: 'Captcha validatie mislukt.' }, 400);
    }
  } catch (e) {
    console.error('[contact] Captcha validatie error', e);
    return json({ success: false, error: 'Captcha validatie error.' }, 500);
  }

  // Honeypot (bots vaak vullen verborgen velden)
  if (website) return json({ success: true, skipped: true });

  // Validatie
  if (!name.trim() || !email.trim() || !message.trim()) {
    return json({ success: false, error: 'Alle velden zijn verplicht.' }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ success: false, error: 'E-mail adres ongeldig.' }, 400);
  }
  if (message.length > 5000) {
    return json({ success: false, error: 'Bericht te lang.' }, 400);
  }

  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const bucket = lastRequests.get(ip) || [];
  const recent = bucket.filter(ts => now - ts < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    return json({ success: false, error: 'Te veel verzoeken, probeer later opnieuw.' }, 429);
  }
  recent.push(now);
  lastRequests.set(ip, recent);

  // Mock modus (schakel uit via .env: MOCK_CONTACT=0)
  if (process.env.MOCK_CONTACT === '1') {
    await new Promise(r => setTimeout(r, 250));
    return json({ success: true, mock: true });
  }

  // SMTP config
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || 'contact@wvervaet.be';
  const fromDomain = process.env.MAIL_FROM || user || 'no-reply@voorbeeld.local';

  // Geen configuratie -> graceful degrade i.p.v. 500 (frontend toont success zodat gebruiker niet blokkeert)
  if (!host || !user || !pass) {
    console.warn('[contact] SMTP niet geconfigureerd. Bericht niet verzonden maar success teruggegeven.');
    return json({ success: true, delivered: false, reason: 'smtp_not_configured' });
  }

  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user, pass },
    });
  } catch (e) {
    console.error('[contact] Transport creatie fout', e);
    return json({ success: true, delivered: false, reason: 'transport_creation_failed' });
  }

  try {
    await transporter.sendMail({
      from: fromDomain,
      to,
      subject: `Contactformulier van ${name}`,
      text: message,
      replyTo: email,
    });
    return json({ success: true, delivered: true });
  } catch (error) {
    console.error('[contact] Mail verzenden mislukt', error);
    // Geen harde 500 om UX niet te breken
    return json({ success: true, delivered: false, reason: 'send_failed' });
  }
}
