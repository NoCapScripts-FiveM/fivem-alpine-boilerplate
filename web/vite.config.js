import { defineConfig } from 'vite'
import AlpineVitePlugin from './alpine-vite-plugin.js'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, '.'), // 👈 Set 'main/' as root

  plugins: [
    AlpineVitePlugin()
  ],

  build: {
    outDir: path.resolve(__dirname, '../ui'), // 👈 Output to top-level 'dist'
    emptyOutDir: true, // Clean output dir before build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html') // Entry point
    }
  },

  server: {
    open: true,
  }
})