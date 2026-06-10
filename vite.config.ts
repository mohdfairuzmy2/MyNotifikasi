import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const base = isGitHubPages ? '/MyNotifikasi/' : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'MyNotifikasi',
        short_name: 'MyNotifikasi',
        description: 'Sistem Notifikasi Bersepadu Kerajaan Malaysia',
        theme_color: '#4B2C8C',
        background_color: '#F5F3FF',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: base,
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    }),
  ],
})
