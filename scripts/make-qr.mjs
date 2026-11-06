// Makes the event QR code and a phone lock screen with it: `node scripts/make-qr.mjs`
// Output goes to qr/ (not deployed). Change URL below to point the code somewhere else.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';
import sharp from 'sharp';

const URL_TEXT = 'https://maiia.work/hi';
const LABEL = 'maiia.work/hi';
const OUT = new URL('../qr/', import.meta.url);

// Site palette (src/styles/global.css)
const ink = '#3b2a22';
const card = '#f8f4f0';
const night = '#1d1512';
const pop = '#9cc7f0';
const brand = '#a02c3f';

// Square modules on a light card with a 4-module quiet zone: the most reliable thing to scan
const qr = QRCode.create(URL_TEXT, { errorCorrectionLevel: 'M' });
const n = qr.modules.size;
let path = '';
for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (qr.modules.get(y, x)) path += `M${x} ${y}h1v1h-1z`;
  }
}
const quiet = 4;
const qrSvg = (size, x = 0, y = 0) => `
  <svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="${-quiet} ${-quiet} ${n + quiet * 2} ${n + quiet * 2}" shape-rendering="crispEdges">
    <rect x="${-quiet}" y="${-quiet}" width="${n + quiet * 2}" height="${n + quiet * 2}" fill="${card}" />
    <path d="${path}" fill="${ink}" />
  </svg>`;

await mkdir(OUT, { recursive: true });

// 1. Plain QR: SVG for anything scalable, PNG for slides and chats
const plain = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200">${qrSvg(1200)}</svg>`;
await writeFile(new URL('maiia-qr.svg', OUT), plain);
await sharp(Buffer.from(plain)).png().toFile(fileURLToPath(new URL('maiia-qr.png', OUT)));

// 2. Lock screen, sized for a 6.7" iPhone (scales down fine on others and on Android).
// The top ~35% is left empty for the clock and the bottom for the flashlight/camera buttons.
const W = 1290;
const H = 2796;
const cardW = 860;
const cardX = (W - cardW) / 2;
const cardY = 1080;
const cardH = cardW + 60;
const qrSize = cardW - 80;
const font = `font-family="Inter, 'Segoe UI', system-ui, sans-serif"`;

const lock = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${night}" />
  <circle cx="${W * 0.85}" cy="${H * 0.18}" r="520" fill="${brand}" opacity="0.18" />

  <rect x="${cardX + 14}" y="${cardY + 14}" width="${cardW}" height="${cardH}" rx="56" fill="${pop}" />
  <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="56" fill="${card}" />
  ${qrSvg(qrSize, cardX + 40, cardY + 40)}
  <text x="${W / 2}" y="${cardY + cardW + 15}" text-anchor="middle" ${font} font-size="54" font-weight="600" fill="${ink}" letter-spacing="-1">${LABEL}</text>

  <text x="${W / 2}" y="${cardY + cardH + 190}" text-anchor="middle" ${font} font-size="76" font-weight="600" fill="${card}" letter-spacing="-2">hi, i’m maiia<tspan fill="${pop}">.</tspan></text>
  <text x="${W / 2}" y="${cardY + cardH + 270}" text-anchor="middle" ${font} font-size="44" fill="${card}" opacity="0.7">scan to save my contact</text>
</svg>`;
await sharp(Buffer.from(lock)).png().toFile(fileURLToPath(new URL('lockscreen.png', OUT)));

console.log(`QR for ${URL_TEXT} (${n}×${n} modules) written to qr/`);
