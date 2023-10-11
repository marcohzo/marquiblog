import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://marquiblog.vercel.app/",
  integrations: [preact(), tailwind()],
});
