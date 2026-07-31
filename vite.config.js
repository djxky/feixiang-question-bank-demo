import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        detail: resolve(import.meta.dirname, "detail.html"),
        school: resolve(import.meta.dirname, "school.html"),
      },
    },
  },
});
