import { useState } from 'react'
import { useTranslations } from '../hooks/useTranslations'
import type { NotificationCategory } from '../types'
import './AgencyDashboardPage.css'

const stats = {
  totalSent: 128450,
  delivered: 125320,
  opened: 89420,
  clicked: 45210,
  complianceRate: 87.5,
}

const campaigns = [
  { name: 'Amaran Cuaca - Zon Tengah', sent: 45000, opened: 38200, date: '10 Mei 2024' },
  { name: 'Peringatan Temujanji KKM', sent: 12300, opened: 9800, date: '9 Mei 2024' },
  { name: 'Program Jualan Rahmah', sent: 89000, opened: 52000, date: '1 Mei 2024' },
]

const agencies = [
  'Jabatan Imigresen Malaysia',
  'Kementerian Kesihatan Malaysia',
  'LHDN',
  'PERKESO',
  'Jabatan Penerangan Malaysia',
]

const categories: NotificationCategory[] = [
  'important',
  'appointment',
  'llm',
  'program',
  'promotion',
]

export function AgencyDashboardPage() {
  const t = useTranslations()
  const [showPreview, setShowPreview] = useState(false)
  const [form, setForm] = useState({
    agency: agencies[0],
    category: 'program' as NotificationCategory,
    titleMs: '',
    titleEn: '',
    bodyMs: '',
    bodyEn: '',
    schedule: '',
  })

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="agency-page">
      <header className="page-header">
        <h1>📊 {t.agency.title}</h1>
        <p>{t.agency.subtitle}</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-card__value">{stats.totalSent.toLocaleString()}</span>
          <span className="stat-card__label">{t.agency.stats.sent}</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">{stats.delivered.toLocaleString()}</span>
          <span className="stat-card__label">{t.agency.stats.delivered}</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">{stats.opened.toLocaleString()}</span>
          <span className="stat-card__label">{t.agency.stats.opened}</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">{stats.clicked.toLocaleString()}</span>
          <span className="stat-card__label">{t.agency.stats.clicked}</span>
        </div>
        <div className="stat-card stat-card--highlight">
          <span className="stat-card__value">{stats.complianceRate}%</span>
          <span className="stat-card__label">{t.agency.stats.compliance}</span>
        </div>
      </div>

      <section className="agency-section">
        <h2>✏️ {t.agency.compose}</h2>
        <div className="compose-form">
          <label>
            {t.agency.form.agency}
            <select value={form.agency} onChange={(e) => update('agency', e.target.value)}>
              {agencies.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>

          <label>
            {t.agency.form.category}
            <select
              value={form.category}
              onChange={(e) => update('category', e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {t.categories[c]}
                </option>
              ))}
            </select>
          </label>

          <div className="form-row">
            <label>
              {t.agency.form.titleMs}
              <input
                value={form.titleMs}
                onChange={(e) => update('titleMs', e.target.value)}
                placeholder="Tajuk notifikasi..."
              />
            </label>
            <label>
              {t.agency.form.titleEn}
              <input
                value={form.titleEn}
                onChange={(e) => update('titleEn', e.target.value)}
                placeholder="Notification title..."
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              {t.agency.form.bodyMs}
              <textarea
                value={form.bodyMs}
                onChange={(e) => update('bodyMs', e.target.value)}
                rows={3}
                placeholder="Mesej notifikasi..."
              />
            </label>
            <label>
              {t.agency.form.bodyEn}
              <textarea
                value={form.bodyEn}
                onChange={(e) => update('bodyEn', e.target.value)}
                rows={3}
                placeholder="Notification message..."
              />
            </label>
          </div>

          <label>
            {t.agency.form.schedule}
            <input
              type="datetime-local"
              value={form.schedule}
              onChange={(e) => update('schedule', e.target.value)}
            />
          </label>

          <div className="compose-actions">
            <button className="btn btn--secondary" onClick={() => setShowPreview(!showPreview)}>
              {t.agency.form.preview}
            </button>
            <button className="btn btn--primary">{t.agency.form.send}</button>
          </div>

          {showPreview && (form.titleMs || form.bodyMs) && (
            <div className="preview-card">
              <p className="preview-card__agency">{form.agency}</p>
              <h3>{form.titleMs || '(Tajuk)'}</h3>
              <p>{form.bodyMs || '(Mesej)'}</p>
            </div>
          )}
        </div>
      </section>

      <section className="agency-section">
        <h2>📋 {t.agency.recentCampaigns}</h2>
        <div className="campaign-list">
          {campaigns.map((c) => (
            <div key={c.name} className="campaign-item">
              <div>
                <p className="campaign-item__name">{c.name}</p>
                <p className="campaign-item__date">{c.date}</p>
              </div>
              <div className="campaign-item__stats">
                <span>{c.sent.toLocaleString()} {t.agency.sent}</span>
                <span>{Math.round((c.opened / c.sent) * 100)}% dibuka</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
