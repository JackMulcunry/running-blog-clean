import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/running-blog-clean/',
  plugins: [react()],
})
