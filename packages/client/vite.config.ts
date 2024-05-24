import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    base: '/',
    build: {
        assetsDir: '.'
    },
    plugins: [
      react(),
        // Copy web-worker from @example/library manually since vite
        // as any other bundler can't track web-worker dependencies
        // over node_modules packages.
          viteStaticCopy({
            targets: [
              {
                  dest: './assets',
                  src: 'node_modules/@example/library/out/assets/*',
              }
            ]
          })
    ]
})
