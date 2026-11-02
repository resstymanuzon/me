// @ts-check
import { defineConfig } from 'astro/config';

// Project site on GitHub Pages (repo `me`), served from /me/. Internal links go through
// `url()` in src/lib/url.ts so they pick up this base path.
export default defineConfig({
  site: 'https://resstymanuzon.github.io',
  base: '/me',
});
