import type { translations } from '../i18n/translations'

type T = (typeof translations)['ms']

export function getGreeting(t: T): string {
  const hour = new Date().getHours()
  if (hour < 12) return t.home.greetingMorning
  if (hour < 18) return t.home.greetingAfternoon
  return t.home.greetingEvening
}
