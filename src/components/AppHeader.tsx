import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useTranslations } from '../hooks/useTranslations'
import { HOME_NOTIFICATION_IDS } from '../constants/demo'
import { HeaderBellIcon, MenuIcon } from './icons/NavIcons'
import './AppHeader.css'

interface AppHeaderProps {
  onMenuOpen: () => void
  showBack?: boolean
  backLabel?: string
  onBack?: () => void
}

export function AppHeader({ onMenuOpen, showBack, backLabel, onBack }: AppHeaderProps) {
  const { notifications } = useApp()
  const t = useTranslations()
  const unreadCount = notifications.filter(
    (n) => !n.isRead && HOME_NOTIFICATION_IDS.includes(n.id),
  ).length

  return (
    <header className="app-header">
      {showBack ? (
        <button className="app-header__btn" onClick={onBack} aria-label={backLabel}>
          <span className="app-header__back">←</span>
        </button>
      ) : (
        <button className="app-header__btn" onClick={onMenuOpen} aria-label="Menu">
          <MenuIcon />
        </button>
      )}

      <h1 className="app-header__title">{t.app.name}</h1>

      <Link to="/notifications" className="app-header__btn app-header__bell" aria-label="Notifikasi">
        <HeaderBellIcon />
        {unreadCount > 0 && <span className="app-header__badge" />}
      </Link>
    </header>
  )
}
