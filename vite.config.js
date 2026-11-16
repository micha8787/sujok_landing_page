import { defineConfig } from "vite";

export default defineConfig({
  // Relative base so GitHub Pages (/repo/) and other static hosts work
  base: "./",
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
});
