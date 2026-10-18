import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://maiia-alexeeva.space",
  vite: {
    plugins: [tailwindcss()],
  },
});
