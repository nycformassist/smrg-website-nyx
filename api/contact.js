// api/contact.js — Consultation form handler (Vercel Serverless Function)
// Sends lead notifications via Resend to the configured receiver.

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const RECEIVER = 'healthcarebyvalentine@gmail.com';
const FROM = 'onboarding@resend.dev';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, business, email, website, businessType, improvement, message, selectedPackage } = req.body || {};

  // Basic validation
  if (!name || !business || !email || !businessType || !improvement) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simple email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: RECEIVER,
      subject: `New Website Consultation Request: ${business}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Website:</strong> ${escapeHtml(website || 'Not provided')}</p>
        <p><strong>Business Type:</strong> ${escapeHtml(businessType)}</p>
        <p><strong>Wants to improve:</strong> ${escapeHtml(improvement)}</p>
        ${selectedPackage ? `<p><strong>Selected Package:</strong> ${escapeHtml(selectedPackage)}</p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${escapeHtml(message)}</p>` : ''}
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted via website.smrgconsulting.com</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] Resend error:', err.message);
    return res.status(500).json({ error: 'Failed to send. Please try again.' });
  }
}

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
