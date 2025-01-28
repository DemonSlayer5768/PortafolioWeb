// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "portafolio-il8u8ofy0-jonathans-projects-a35c48d3.vercel.app",
  integrations: [
    react(), // Integra React
    tailwind(), // Integra Tailwind CSS
    vercel(), // Integra Vercel para el despliegue
  ],
});
