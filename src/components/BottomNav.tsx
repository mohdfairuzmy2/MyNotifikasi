import { NavLink } from 'react-router-dom'
import { useTranslations } from '../hooks/useTranslations'
import { BellIcon, GridIcon, HomeIcon, ProfileIcon } from './icons/NavIcons'
import './BottomNav.css'

const navItems = [
  { to: '/', icon: HomeIcon, labelKey: 'home' as const, end: true },
  { to: '/notifications', icon: BellIcon, labelKey: 'notifications' as const, end: false },
  { to: '/services', icon: GridIcon, labelKey: 'services' as const, end: false },
  { to: '/profile', icon: ProfileIcon, labelKey: 'profile' as const, end: false },
]

export function BottomNav() {
  const t = useTranslations()

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) => `bottom-nav__item ${isActive ? 'active' : ''}`}
        >
          {({ isActive }) => (
            <>
              <item.icon active={isActive} />
              <span className="bottom-nav__label">{t.nav[item.labelKey]}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
