// Contact card (vCard 3.0) built at deploy time from profile in data/cv.ts.
// Opening it on a phone shows "Create new contact" with everything prefilled, photo included.
// vercel.json serves it as text/vcard so iOS Safari opens it as a contact rather than a download.
import type { APIRoute } from 'astro';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { profile } from '../data/cv';

// Text values must escape backslashes, commas, semicolons and newlines
const esc = (value: string) => value.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n');

// Lines longer than 75 bytes are folded: CRLF plus a leading space on the continuation
const fold = (line: string) => {
  const parts: string[] = [];
  for (let i = 0; i < line.length; i += i === 0 ? 75 : 74) {
    parts.push(line.slice(i, i === 0 ? 75 : i + 74));
  }
  return parts.join('\r\n ');
};

export const GET: APIRoute = async () => {
  const photoPath = fileURLToPath(new URL(`../../public${profile.photo}`, import.meta.url));
  // Small enough to keep the card light, big enough to look sharp in the contacts app
  const photo = await sharp(photoPath).resize(400, 400).jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  const [city, country] = profile.location.split(', ');

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(profile.lastName)};${esc(profile.firstName)};;;`,
    `FN:${esc(profile.name)}`,
    `TITLE:${esc(profile.title)}`,
    `EMAIL;TYPE=INTERNET,PREF:${profile.email}`,
    `ADR;TYPE=HOME:;;;${esc(city)};;;${esc(country)}`,
    // Labelled URLs work in both iOS and Android contacts, unlike X-SOCIALPROFILE
    `item1.URL:${profile.website}`,
    'item1.X-ABLabel:Website',
    `item2.URL:${profile.linkedin}`,
    'item2.X-ABLabel:LinkedIn',
    `item3.URL:${profile.whatsapp}`,
    'item3.X-ABLabel:WhatsApp',
    `item4.URL:${profile.github}`,
    'item4.X-ABLabel:GitHub',
    `NOTE:${esc(`Met at Web Summit ${new Date().getFullYear()}. ${profile.title} in ${profile.location}.`)}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${photo.toString('base64')}`,
    'END:VCARD',
  ];

  return new Response(lines.map(fold).join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
