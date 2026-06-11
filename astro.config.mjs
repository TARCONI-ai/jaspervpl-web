import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.jaspervpl.com',
  base: '/jaspervpl-web',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
