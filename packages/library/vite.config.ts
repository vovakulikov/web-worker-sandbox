import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  worker: { format: 'es' },
  build: {
    outDir: './out',
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'src/main.ts')
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name]',
        entryFileNames: '[name].js',
      },
    },
    copyPublicDir: false,
  },
  plugins: [
    react(),
    dts({ include: ['src'] })
  ],
  resolve: {
    alias: [
      { find: /^node:os$/, replacement: resolve(__dirname, 'src/shims/os.ts') },
    ]
  }
})
