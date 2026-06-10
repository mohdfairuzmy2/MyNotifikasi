import { useEffect, useState } from 'react'
import { useStandalone } from '../hooks/useStandalone'
import { useTranslations } from '../hooks/useTranslations'
import './InstallBanner.css'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

const DISMISS_KEY = 'mynotifikasi-install-dismissed'

function isIos(): boolean {
  return /iphone|ipad|ipod/i.test(navigator.userAgent)
}

function isInBrowser(): boolean {
  return !isStandaloneCheck()
}

function isStandaloneCheck(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as Navigator & { standalone?: boolean }).standalone === true)
  )
}

export function InstallBanner() {
  const t = useTranslations()
  const standalone = useStandalone()
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(DISMISS_KEY) === '1')
  const [showIosHint, setShowIosHint] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (standalone || dismissed) return null

  const canInstall = !!deferredPrompt
  const showBanner = canInstall || (isIos() && isInBrowser())

  if (!showBanner) return null

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt()
      await deferredPrompt.userChoice
      setDeferredPrompt(null)
      setDismissed(true)
      localStorage.setItem(DISMISS_KEY, '1')
      return
    }
    if (isIos()) {
      setShowIosHint((v) => !v)
    }
  }

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem(DISMISS_KEY, '1')
  }

  return (
    <div className="install-banner">
      <div className="install-banner__content">
        <span className="install-banner__icon">📲</span>
        <div>
          <p className="install-banner__title">{t.install.title}</p>
          <p className="install-banner__text">
            {showIosHint ? t.install.iosSteps : t.install.subtitle}
          </p>
        </div>
      </div>
      <div className="install-banner__actions">
        <button className="install-banner__install" onClick={handleInstall}>
          {canInstall ? t.install.install : t.install.howTo}
        </button>
        <button className="install-banner__dismiss" onClick={handleDismiss} aria-label="Tutup">
          ✕
        </button>
      </div>
    </div>
  )
}
