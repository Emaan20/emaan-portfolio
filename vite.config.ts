import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
            return "react";
          }
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/gsap") || id.includes("node_modules/lenis")) {
            return "animation";
          }
          if (id.includes("node_modules/three") || id.includes("node_modules/@react-three/fiber")) {
            return "three";
          }
        },
      },
    },
  },
});
