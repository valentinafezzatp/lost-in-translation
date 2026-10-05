// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio real antes de publicar
export default defineConfig({
  site: 'https://www.ejemplo.com.ar',
  integrations: [sitemap()],
});
