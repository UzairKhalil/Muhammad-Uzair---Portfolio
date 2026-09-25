// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your production domain before deploying.
// It is used for canonical URLs, Open Graph tags and the sitemap.
const SITE_URL = 'https://muhammad-uzair.dev';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
