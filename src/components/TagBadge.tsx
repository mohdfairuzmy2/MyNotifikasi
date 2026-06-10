import type { NotificationTag } from '../types'
import { useTranslations } from '../hooks/useTranslations'
import './TagBadge.css'

interface TagBadgeProps {
  tag: NotificationTag
}

export function TagBadge({ tag }: TagBadgeProps) {
  const t = useTranslations()
  return <span className={`tag-badge tag-badge--${tag}`}>{t.tags[tag]}</span>
}
