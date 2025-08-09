import { defineConfig } from 'vite'
import AlpineVitePlugin from './alpine-vite-plugin.js'

export default defineConfig({
    root: path.resolve(__dirname, '.'),

    
    plugins: [
        AlpineVitePlugin()
    ],

    build: {
        outDir: path.resolve(__dirname, '../ui'), // 👈 Output to top-level 'ui'
        emptyOutDir: true, // Clean output dir before build
        rollupOptions: {
        input: path.resolve(__dirname, 'index.html') // Entry point
    }
  },

  server: {
    open: true,
  }
})