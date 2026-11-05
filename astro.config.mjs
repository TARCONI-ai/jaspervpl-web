import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jaspervpl.com',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  // English at /, Spanish at /es/, Dutch at /nl/
  i18n: {
    locales: ['en', 'es', 'nl'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
