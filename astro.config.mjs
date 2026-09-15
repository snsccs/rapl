import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://raplleadership.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/admin'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
