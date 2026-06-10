import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useTranslations } from '../hooks/useTranslations'
import './ProfilePage.css'

const quickLinks = [
  { to: '/settings', icon: '⚙️', labelKey: 'settings' as const },
  { to: '/assistant', icon: '🤖', labelKey: 'assistant' as const },
  { to: '/agency', icon: '📊', labelKey: 'agency' as const },
]

export function ProfilePage() {
  const { user, language } = useApp()
  const t = useTranslations()

  return (
    <div className="profile-page">
      <div className="profile-hero">
        <div className="profile-hero__avatar">{user.name.charAt(0)}</div>
        <h2>{user.name}</h2>
        <p>MyDigital ID: {user.myDigitalId}</p>
        <p>{user.location[language]}</p>
      </div>

      <div className="profile-links">
        {quickLinks.map((link) => (
          <Link key={link.to} to={link.to} className="profile-link">
            <span>{link.icon}</span>
            <span>{t.nav[link.labelKey]}</span>
            <span className="profile-link__arrow">›</span>
          </Link>
        ))}
      </div>

      <div className="profile-info">
        <div className="profile-info__row">
          <span>E-mel</span>
          <span>{user.email}</span>
        </div>
        <div className="profile-info__row">
          <span>Telefon</span>
          <span>{user.phone}</span>
        </div>
      </div>
    </div>
  )
}
