import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static", // También puedes usar "server"
  adapter: vercel(),
});
