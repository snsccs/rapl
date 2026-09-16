import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // www is the host that actually serves: raplleadership.com 301-redirects to
  // www.raplleadership.com. Canonicals built from a non-www `site` therefore
  // pointed at a URL that redirects away, which is what made crawlers report the
  // page as canonicalised to somewhere else. This also fixes the sitemap URLs.
  site: 'https://www.raplleadership.com',
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
