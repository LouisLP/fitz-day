import path from 'path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  base: '/fitz-day/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
