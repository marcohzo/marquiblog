import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://marquiblog.vercel.app/",
  integrations: [preact(), tailwind()],
  output: "hybrid",
  adapter: vercel(),
});
