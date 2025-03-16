import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct routing
  build: {
    outDir: "dist", // Ensures correct output folder
  },
  server: {
    port: 3000,
  },
})
