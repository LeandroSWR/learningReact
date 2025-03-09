import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/learningReact/projects/countdown", // Set the base URL
  plugins: [react()],
  build: {
    outDir: "../docs/projects/countdown" // Change build output directory
  }
})
