// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 Ensures correct path resolution for Vercel
  build: {
    outDir: "dist", // 👈 Ensures the build output directory
  },
  server: {
    port: 3000, // Optional: You can change the port if needed
  },
})

