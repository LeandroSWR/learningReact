import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/learningReact/investment-calculator", // Set the base URL
  plugins: [react()],
  build: {
    outDir: "../docs/projects/investment-calculator" // Change build output directory
  }
});

