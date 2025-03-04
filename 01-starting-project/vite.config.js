import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/learningReact/projects/starting-project/", // Set the base URL
  plugins: [react()],
  build: {
    outDir: "../docs/projects/starting-project" // Change build output directory
  }
});
