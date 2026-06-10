import { useEffect, useState } from 'react'

export function isStandaloneMode(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    // iOS Safari
    ('standalone' in navigator && (navigator as Navigator & { standalone?: boolean }).standalone === true)
  )
}

export function useStandalone() {
  const [standalone, setStandalone] = useState(isStandaloneMode)

  useEffect(() => {
    const mq = window.matchMedia('(display-mode: standalone)')
    const update = () => setStandalone(isStandaloneMode())
    mq.addEventListener('change', update)
    document.body.classList.toggle('standalone', isStandaloneMode())
    return () => mq.removeEventListener('change', update)
  }, [])

  return standalone
}
