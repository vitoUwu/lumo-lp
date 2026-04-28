// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--astro-font-inter",
      weights: ["400", "600", "700"],
    },
    {
      provider: fontProviders.google(),
      name: "Sora",
      cssVariable: "--astro-font-sora",
      weights: ["400", "600", "700"],
    }
  ]
});