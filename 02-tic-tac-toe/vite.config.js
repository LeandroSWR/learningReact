import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/learningReact/tic-tac-toe", // Set the base URL
  plugins: [react()],
  build: {
    outDir: "../docs/projects/tic-tac-toe" // Change build output directory
  }
});

