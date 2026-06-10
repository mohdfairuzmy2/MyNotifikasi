import type { Notification, NotificationFilter } from '../types'

export function filterNotifications(
  notifications: Notification[],
  filter: NotificationFilter,
): Notification[] {
  switch (filter) {
    case 'important':
      return notifications.filter(
        (n) => n.category === 'important' || n.tag === 'penting',
      )
    case 'services':
      return notifications.filter(
        (n) => n.category === 'appointment' || n.category === 'llm',
      )
    case 'promotions':
      return notifications.filter(
        (n) => n.category === 'promotion' || n.tag === 'promosi',
      )
    default:
      return notifications
  }
}
