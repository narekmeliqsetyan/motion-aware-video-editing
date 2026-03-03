// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://narekmeliqsetyan.github.io',
  base: '/motion-aware-video-editing',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
