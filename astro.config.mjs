// // @ts-check
import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  output: "server",
  adapter: vercelServerless(),
});
