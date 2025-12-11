import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` to your repository name so assets resolve on GitHub Pages
export default defineConfig({
  base: '/haesalfarm_test/',
  plugins: [react()]
})
