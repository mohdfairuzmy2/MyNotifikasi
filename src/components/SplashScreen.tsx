import { useEffect, useState } from 'react'
import { useTranslations } from '../hooks/useTranslations'
import './SplashScreen.css'

const SPLASH_KEY = 'mynotifikasi-splash-seen'

export function SplashScreen() {
  const t = useTranslations()
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(SPLASH_KEY))

  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(SPLASH_KEY, '1')
      setVisible(false)
    }, 1400)
    return () => window.clearTimeout(timer)
  }, [visible])

  if (!visible) return null

  return (
    <div className="splash-screen" aria-hidden="true">
      <div className="splash-screen__icon">🔔</div>
      <h1 className="splash-screen__title">{t.app.name}</h1>
      <p className="splash-screen__tagline">{t.app.tagline}</p>
      <div className="splash-screen__loader" />
    </div>
  )
}
