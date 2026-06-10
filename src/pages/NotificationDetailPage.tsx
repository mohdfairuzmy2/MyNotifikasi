import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useTranslations } from '../hooks/useTranslations'
import { formatNotificationTime } from '../utils/formatTime'
import { AgencyAvatar } from '../components/AgencyAvatar'
import { TagBadge } from '../components/TagBadge'
import { ChannelIcons } from '../components/ChannelIcons'
import './NotificationDetailPage.css'

export function NotificationDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { notifications, markAsRead, language } = useApp()
  const t = useTranslations()

  const notification = notifications.find((n) => n.id === id)

  useEffect(() => {
    if (notification && !notification.isRead) {
      markAsRead(notification.id)
    }
  }, [notification, markAsRead])

  if (!notification) {
    return (
      <div className="detail-page">
        <p>Notifikasi tidak dijumpai.</p>
        <Link to="/">Kembali</Link>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <div className="detail-card">
        <div className="detail-card__top">
          <AgencyAvatar agencyId={notification.agencyId} size="md" />
          <div>
            <p className="detail-card__agency">{notification.agencyName[language]}</p>
            <p className="detail-card__time">
              {formatNotificationTime(notification.timestamp, language)}
            </p>
          </div>
          <TagBadge tag={notification.tag} />
        </div>

        <h1 className="detail-card__title">{notification.title[language]}</h1>
        <p className="detail-card__body">{notification.body[language]}</p>

        {notification.location && (
          <div className="detail-section">
            <h3>📍 {t.detail.location}</h3>
            <p>{notification.location[language]}</p>
          </div>
        )}

        <div className="detail-section">
          <h3>{t.detail.deliveredVia}</h3>
          <ChannelIcons channels={notification.channels} size="md" />
        </div>

        {notification.llmSummary && (
          <div className="detail-section detail-section--llm">
            <h3>🤖 {t.detail.smartSummary}</h3>
            <p>{notification.llmSummary[language]}</p>
          </div>
        )}

        {notification.llmSuggestions && notification.llmSuggestions.length > 0 && (
          <div className="detail-section">
            <h3>💡 {t.detail.suggestions}</h3>
            <ul className="suggestion-list">
              {notification.llmSuggestions.map((s, i) => (
                <li key={i}>{s[language]}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-actions">
          {notification.category === 'llm' && (
            <Link to="/assistant" className="btn btn--secondary">
              {t.detail.takeAction}
            </Link>
          )}
          {notification.actionLabel && (
            <button className="btn btn--primary">{notification.actionLabel[language]}</button>
          )}
        </div>
      </div>
    </div>
  )
}
