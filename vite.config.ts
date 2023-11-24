import { resolve } from 'path'; 
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/node-magician",
  build:{
    outDir: "docs",
  },
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  }
})