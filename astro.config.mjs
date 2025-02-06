// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static", // Opcional, pero útil si es un sitio estático
  integrations: [react(), tailwind(), vercel()],
});
