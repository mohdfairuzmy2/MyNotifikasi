import { useMemo, useState } from 'react'
import { useApp } from '../context/AppContext'
import { useTranslations } from '../hooks/useTranslations'
import { getGreeting } from '../utils/greeting'
import { filterNotifications } from '../utils/filterNotifications'
import type { NotificationFilter } from '../types'
import { FilterTabs } from '../components/FilterTabs'
import { NotificationCard } from '../components/NotificationCard'
import './HomePage.css'

const HOME_IDS = ['1', '2', '3', '4', '5']

export function HomePage() {
  const { notifications, user } = useApp()
  const t = useTranslations()
  const [filter, setFilter] = useState<NotificationFilter>('all')

  const homeNotifications = useMemo(
    () => notifications.filter((n) => HOME_IDS.includes(n.id)),
    [notifications],
  )

  const filtered = useMemo(
    () => filterNotifications(homeNotifications, filter),
    [homeNotifications, filter],
  )

  const unreadCount = notifications.filter((n) => !n.isRead && HOME_IDS.includes(n.id)).length

  return (
    <div className="home-page">
      <section className="home-greeting">
        <h2 className="home-greeting__title">
          {getGreeting(t)}, {user.name}
        </h2>
        <p className="home-greeting__subtitle">
          {t.home.newNotifications.replace('{count}', String(unreadCount))}
        </p>
      </section>

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
