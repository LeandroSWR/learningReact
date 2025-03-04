import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/learningReact/starting-project/", // Set the base URL
  plugins: [react()],
  build: {
    outDir: "../docs/starting-project" // Change build output directory
  }
});
