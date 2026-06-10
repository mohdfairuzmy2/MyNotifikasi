import { Link } from 'react-router-dom'
import type { Notification } from '../types'
import { useApp } from '../context/AppContext'
import { formatNotificationTime } from '../utils/formatTime'
import { AgencyAvatar } from './AgencyAvatar'
import { TagBadge } from './TagBadge'
import './NotificationCard.css'

interface NotificationCardProps {
  notification: Notification
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const { language } = useApp()

  return (
    <Link
      to={`/notification/${notification.id}`}
      className={`notification-card ${notification.isRead ? 'read' : 'unread'}`}
    >
      <AgencyAvatar agencyId={notification.agencyId} />

      <div className="notification-card__content">
        <p className="notification-card__agency">{notification.agencyName[language]}</p>
        <p className="notification-card__body">{notification.body[language]}</p>
      </div>

      <div className="notification-card__meta">
        <span className="notification-card__time">
          {formatNotificationTime(notification.timestamp, language)}
        </span>
        <TagBadge tag={notification.tag} />
      </div>
    </Link>
  )
}
