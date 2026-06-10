import { Link } from 'react-router-dom'
import { useTranslations } from '../hooks/useTranslations'
import './SideMenu.css'

interface SideMenuProps {
  open: boolean
  onClose: () => void
}

const menuLinks = [
  { to: '/assistant', icon: '🤖', labelKey: 'assistant' as const },
  { to: '/agency', icon: '📊', labelKey: 'agency' as const },
  { to: '/settings', icon: '⚙️', labelKey: 'settings' as const },
]

export function SideMenu({ open, onClose }: SideMenuProps) {
  const t = useTranslations()

  return (
    <>
      <div className={`side-menu__overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`side-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="side-menu__header">
          <h2>{t.app.name}</h2>
          <button onClick={onClose} aria-label="Tutup">✕</button>
        </div>
        <nav>
          {menuLinks.map((link) => (
            <Link key={link.to} to={link.to} className="side-menu__link" onClick={onClose}>
              <span>{link.icon}</span>
              {t.nav[link.labelKey]}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
