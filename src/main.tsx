import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'

registerSW({
  immediate: true,
  onRegisteredSW() {
    console.info('MyNotifikasi PWA service worker registered')
  },
})

if (window.matchMedia('(display-mode: standalone)').matches) {
  document.body.classList.add('standalone')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
