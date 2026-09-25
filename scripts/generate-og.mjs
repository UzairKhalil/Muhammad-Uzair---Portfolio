/**
 * Generates public/og-image.png (1200×630) — the social sharing image.
 * Run after changing your name/role or profile photo:  npm run og
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const photo = fileURLToPath(new URL('src/assets/profile.png', root));
const out = fileURLToPath(new URL('public/og-image.png', root));

const W = 1200;
const H = 630;
const P = 480; // portrait size

const portrait = await sharp(photo)
  .resize(P, P, { fit: 'cover', position: 'north' })
  .composite([
    {
      input: Buffer.from(`<svg width="${P}" height="${P}"><rect width="${P}" height="${P}" rx="36" fill="#fff"/></svg>`),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const grid = Array.from({ length: 22 }, (_, i) => `<path d="M${i * 56} 0V${H}" />`).join('') +
  Array.from({ length: 12 }, (_, i) => `<path d="M0 ${i * 56}H${W}" />`).join('');

const bg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f6f4ef"/>
  <g stroke="#e2ded5" stroke-width="1">${grid}</g>
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#fade)"/>
  <defs>
    <linearGradient id="fade" x1="0" x2="1">
      <stop offset="0" stop-color="#f6f4ef" stop-opacity="1"/>
      <stop offset="0.55" stop-color="#f6f4ef" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#f6f4ef" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <text x="80" y="150" font-family="Consolas, Menlo, monospace" font-size="24" fill="#c8391f">MUHAMMAD UZAIR</text>
  <text x="80" y="245" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#14161a" letter-spacing="-2">Laravel / PHP</text>
  <text x="80" y="320" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#14161a" letter-spacing="-2">Developer</text>
  <text x="80" y="400" font-family="Georgia, serif" font-style="italic" font-size="34" fill="#c8391f">SaaS · eCommerce · API integrations</text>
  <text x="80" y="595" font-family="Consolas, Menlo, monospace" font-size="20" fill="#5d626a">Amazon SP-API · Shopify · WooCommerce · BigCommerce · eBay · Etsy</text>
</svg>`;

await sharp(Buffer.from(bg))
  .composite([{ input: portrait, left: W - P - 70, top: 70 }])
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log('Wrote', out);
