import react from "@astrojs/react";
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://asdtennismontecchio.it",
  integrations: [react(), sitemap()]
});