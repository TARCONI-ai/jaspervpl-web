import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jaspervpl.com',
  devToolbar: { enabled: false },
  // English at /, Spanish at /es/, Dutch at /nl/
  i18n: {
    locales: ['en', 'es', 'nl'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
