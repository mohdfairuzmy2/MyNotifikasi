import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useToast } from '../components/Toast'
import { useTranslations } from '../hooks/useTranslations'
import { filterNotifications } from '../utils/filterNotifications'
import type { NotificationFilter } from '../types'
import { FilterTabs } from '../components/FilterTabs'
import { NotificationCard } from '../components/NotificationCard'
import './NotificationsPage.css'

const validFilters: NotificationFilter[] = ['all', 'important', 'services', 'promotions']

export function NotificationsPage() {
  const { notifications, markAllAsRead } = useApp()
  const { showToast } = useToast()
  const t = useTranslations()
  const [searchParams] = useSearchParams()
  const paramFilter = searchParams.get('filter') as NotificationFilter | null
  const initialFilter = paramFilter && validFilters.includes(paramFilter) ? paramFilter : 'all'
  const [filter, setFilter] = useState<NotificationFilter>(initialFilter)

  useEffect(() => {
    if (paramFilter && validFilters.includes(paramFilter)) {
      setFilter(paramFilter)
    }
  }, [paramFilter])

  const filtered = useMemo(
    () => filterNotifications(notifications, filter),
    [notifications, filter],
  )

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const handleMarkAll = () => {
    markAllAsRead()
    showToast(t.toast.markAllRead)
  }

  return (
    <div className="notifications-page">
      <div className="notifications-page__header">
        <h2>{t.nav.notifications}</h2>
        {unreadCount > 0 && (
          <button className="btn-text" onClick={handleMarkAll}>
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
