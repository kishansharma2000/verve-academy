import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://verveacademy.com',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind(),
  ],
});
