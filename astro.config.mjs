// // @ts-check
import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  output: "static",
  adapter: vercelStatic(),
});
