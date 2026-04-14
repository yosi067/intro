import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app }) => {
  // Register service worker for offline support
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {
        // SW registration failed, no-op
      })
    })
  }
})
