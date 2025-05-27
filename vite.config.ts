
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel typically expects 'dist' or 'build'
  },
  server: {
    port: 3000,
  },
})
