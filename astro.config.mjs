// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://rorpheeyah.github.io',
  base: '/', // user site, not a project site
  output: 'static',
  integrations: [icon()],
  server: { port: 8080, host: true },
  vite: {
    resolve: {
      alias: { '@': path.resolve('./src') },
    },
  },
});
