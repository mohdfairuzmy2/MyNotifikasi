import { Link } from 'react-router-dom'
import { useTranslations } from '../hooks/useTranslations'
import './ServicesPage.css'

const services = [
  { icon: '🛂', key: 'immigration', to: '/notifications?filter=important' },
  { icon: '🏥', key: 'clinic', to: '/notifications?filter=services' },
  { icon: '🚗', key: 'jpj', to: '/notifications?filter=services' },
  { icon: '💰', key: 'tax', to: '/notifications?filter=all' },
  { icon: '🛡️', key: 'perkeso', to: '/notifications?filter=all' },
  { icon: '🎓', key: 'education', to: '/notifications?filter=all' },
  { icon: '🤖', key: 'assistant', to: '/assistant' },
  { icon: '📊', key: 'agency', to: '/agency' },
]

export function ServicesPage() {
  const t = useTranslations()

  return (
    <div className="services-page">
      <h2 className="services-page__title">{t.nav.services}</h2>
      <p className="services-page__subtitle">{t.services.subtitle}</p>

      <div className="services-grid">
        {services.map((svc) => (
          <Link key={svc.key} to={svc.to} className="service-card">
            <span className="service-card__icon">{svc.icon}</span>
            <span className="service-card__name">{t.services.items[svc.key]}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
