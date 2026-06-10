import { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { useTranslations } from '../hooks/useTranslations'
import { filterNotifications } from '../utils/filterNotifications'
import type { NotificationFilter } from '../types'
import { FilterTabs } from '../components/FilterTabs'
import { NotificationCard } from '../components/NotificationCard'
import './NotificationsPage.css'

export function NotificationsPage() {
  const { notifications, markAllAsRead } = useApp()
  const t = useTranslations()
  const [filter, setFilter] = useState<NotificationFilter>('all')

  const filtered = useMemo(
    () => filterNotifications(notifications, filter),
    [notifications, filter],
  )

  const unreadCount = notifications.filter((n) => !n.isRead).length

  return (
    <div className="notifications-page">
      <div className="notifications-page__header">
        <h2>{t.nav.notifications}</h2>
        {unreadCount > 0 && (
          <button className="btn-text" onClick={markAllAsRead}>
            {t.home.markAllRead}
          </button>
        )}
      </div>

      <FilterTabs active={filter} onChange={setFilter} />

      <div className="notification-list">
        {filtered.length === 0 ? (
          <p className="empty-state">{t.home.noNotifications}</p>
        ) : (
          filtered.map((n) => <NotificationCard key={n.id} notification={n} />)
        )}
      </div>
    </div>
  )
}
