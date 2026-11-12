// Makes the QR code for the CV and a small printable sticker with it: `npm run qr`
// Output goes to qr/ (not deployed). maiia.work/cv redirects to the CV PDF (see vercel.json),
// so swapping the PDF never breaks printed codes.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';
import sharp from 'sharp';

const URL_TEXT = 'https://maiia.work/cv';
const LABEL = 'maiia.work/cv';
const OUT = new URL('../qr/', import.meta.url);
const out = (name) => fileURLToPath(new URL(name, OUT));

// Site palette (src/styles/global.css)
const ink = '#3b2a22';
const muted = '#7a6152';
const card = '#f8f4f0';
const accent = '#7a1f2e';

// Square modules with a 4-module quiet zone: the most reliable thing to scan
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
await writeFile(out('cv-qr.svg'), plain);
await sharp(Buffer.from(plain)).png().toFile(out('cv-qr.png'));

// 2. Sticker, drawn in millimetres: 45 × 58 mm, about the size of a badge back.
// The QR is ~28 mm of actual code, enough to scan from arm's length.
const W = 45;
const H = 58;
const qrSize = 37;
const font = `font-family="Inter, 'Segoe UI', Arial, sans-serif"`;

const sticker = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}mm" height="${H}mm" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${card}" />
  <text x="${W / 2}" y="8.6" text-anchor="middle" ${font} font-size="5.4" font-weight="600" fill="${ink}" letter-spacing="-0.15">hi, i’m maiia<tspan fill="${accent}">.</tspan></text>
  ${qrSvg(qrSize, (W - qrSize) / 2, 10.5)}
  <text x="${W / 2}" y="51.4" text-anchor="middle" ${font} font-size="4" font-weight="600" fill="${accent}">scan for my CV</text>
  <text x="${W / 2}" y="55.4" text-anchor="middle" ${font} font-size="2.7" fill="${muted}">${LABEL}</text>
</svg>`;
await writeFile(out('sticker.svg'), sticker);
// 600 dpi PNG with the DPI stored in the file, so "print at actual size" comes out 45 × 58 mm
// (librsvg's mm handling ignores the density we ask for, so render large and resize to the exact pixel size)
const px = (mm) => Math.round((mm / 25.4) * 600);
await sharp(Buffer.from(sticker), { density: 600 })
  .resize(px(W), px(H))
  .withMetadata({ density: 600 })
  .png()
  .toFile(out('sticker.png'));

console.log(`QR for ${URL_TEXT} (${n}×${n} modules) and a ${W}×${H} mm sticker written to qr/`);
