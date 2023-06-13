import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bash-shop/',
  plugins: [react()],
  server: {
    port: 10051
  }
})
