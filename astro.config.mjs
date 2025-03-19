// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://tathatahy.github.io',
  base: '/eventhub-showcase',
  integrations: [tailwind()],
  // Asegurar que tenemos la configuración correcta para GitHub Pages
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
