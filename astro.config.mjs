// // @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});

// @ts-check
// import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
// import tailwind from "@astrojs/tailwind";

// // https://astro.build/config
// export default defineConfig({
//   base: "/astro-react-tailwind-vercel",
//   integrations: [
//     react(), // Integra React
//     tailwind(), // Integra Tailwind CSS
//   ],
// });
