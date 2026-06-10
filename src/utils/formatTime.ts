import type { Language } from '../types'
import { translations } from '../i18n/translations'

export function formatNotificationTime(timestamp: string, language: Language): string {
  const date = new Date(timestamp)
  const now = new Date('2024-05-10T12:00:00')
  const t = translations[language].time

  const isSameDay =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  const isYesterday =
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate()

  if (isSameDay) {
    return date.toLocaleTimeString('en-MY', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  if (isYesterday) return t.yesterday

  return date.toLocaleDateString(language === 'ms' ? 'ms-MY' : 'en-MY', {
    day: 'numeric',
    month: 'short',
  })
}
