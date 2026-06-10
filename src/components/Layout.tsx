import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useTranslations } from '../hooks/useTranslations'
import { AppHeader } from './AppHeader'
import { BottomNav } from './BottomNav'
import { SideMenu } from './SideMenu'
import './Layout.css'

export function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const t = useTranslations()
  const [menuOpen, setMenuOpen] = useState(false)

  const isDetail = location.pathname.startsWith('/notification/')
  const hideNav = isDetail

  return (
    <div className="app-shell">
      <div className="phone-frame">
        <AppHeader
          onMenuOpen={() => setMenuOpen(true)}
          showBack={isDetail}
          backLabel={t.detail.back}
          onBack={() => navigate(-1)}
        />
        <div className="app-content">
          <Outlet />
        </div>
        {!hideNav && <BottomNav />}
      </div>
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}
