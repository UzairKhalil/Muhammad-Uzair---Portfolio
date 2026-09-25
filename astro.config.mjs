// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production URL — used for canonical URLs, Open Graph tags and the sitemap.
// Update this (and public/robots.txt) if you move to a custom domain.
const SITE_URL = 'https://muhammad-uzair-alpha.vercel.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
