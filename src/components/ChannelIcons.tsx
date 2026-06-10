import type { DeliveryChannel } from '../types'
import './ChannelIcons.css'

const channelEmoji: Record<DeliveryChannel, string> = {
  app: '📱',
  sms: '💬',
  email: '✉️',
  push: '🔔',
  whatsapp: '📲',
}

interface ChannelIconsProps {
  channels: DeliveryChannel[]
  size?: 'sm' | 'md'
}

export function ChannelIcons({ channels, size = 'sm' }: ChannelIconsProps) {
  return (
    <div className={`channel-icons channel-icons--${size}`}>
      {channels.map((ch) => (
        <span key={ch} className="channel-icons__item" title={ch}>
          {channelEmoji[ch]}
        </span>
      ))}
    </div>
  )
}
