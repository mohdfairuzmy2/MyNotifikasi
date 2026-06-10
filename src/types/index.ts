export type Language = 'ms' | 'en'

export type NotificationFilter = 'all' | 'important' | 'services' | 'promotions'

export type NotificationTag = 'penting' | 'makluman' | 'promosi'

export type NotificationCategory =
  | 'important'
  | 'appointment'
  | 'llm'
  | 'program'
  | 'promotion'

export type DeliveryChannel = 'app' | 'sms' | 'email' | 'push' | 'whatsapp'

export interface Notification {
  id: string
  agencyId: string
  agencyName: { ms: string; en: string }
  /** @deprecated Use agencyId with AgencyAvatar / agencyLogos instead */
  agencyIcon?: string
  title: { ms: string; en: string }
  body: { ms: string; en: string }
  tag: NotificationTag
  category: NotificationCategory
  timestamp: string
  isRead: boolean
  channels: DeliveryChannel[]
  actionLabel?: { ms: string; en: string }
  actionUrl?: string
  location?: { ms: string; en: string }
  llmSummary?: { ms: string; en: string }
  llmSuggestions?: { ms: string; en: string }[]
}

export interface ChannelPreference {
  channel: DeliveryChannel
  enabled: boolean
}

export interface UserProfile {
  name: string
  myDigitalId: string
  location: { ms: string; en: string }
  email: string
  phone: string
}

export interface AgencyStats {
  totalSent: number
  delivered: number
  opened: number
  clicked: number
  complianceRate: number
}
