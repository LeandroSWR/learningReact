import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/learningReact", // Set the base URL
  plugins: [react()],
  build: {
    outDir: "../docs" // Change build output directory
  }
});

