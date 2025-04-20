// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: "./", // cambia la base de rutas a relativo
  build: {
    inlineStylesheets: 'always'
  },

  integrations: [tailwind()]
});