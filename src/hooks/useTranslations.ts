import { translations } from '../i18n/translations'
import { useApp } from '../context/AppContext'

export function useTranslations() {
  const { language } = useApp()
  return translations[language]
}
