import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build:{
    outDir: '/var/www/html/Portfolio',
    emptyOutDir: true,
  },
  server:{
    host: '0.0.0.0',
    port: '9002',
  },
  plugins: [react()],
})