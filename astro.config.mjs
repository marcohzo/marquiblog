import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://marquiblog.vercel.app/",
  integrations: [preact(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});