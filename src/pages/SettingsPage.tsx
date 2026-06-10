import { useApp } from '../context/AppContext'
import { useToast } from '../components/Toast'
import { useTranslations } from '../hooks/useTranslations'
import type { Language } from '../types'
import './SettingsPage.css'

export function SettingsPage() {
  const {
    user,
    language,
    setLanguage,
    channelPreferences,
    toggleChannel,
    saveSettings,
    settingsSaved,
  } = useApp()
  const { showToast } = useToast()
  const t = useTranslations()

  const handleSave = () => {
    saveSettings()
    showToast(t.toast.settingsSaved)
  }

  return (
    <div className="settings-page">
      <header className="page-header">
        <h1>⚙️ {t.settings.title}</h1>
      </header>

      <section className="settings-section">
        <h2>{t.settings.profile}</h2>
        <div className="profile-card">
          <div className="profile-card__avatar">{user.name.charAt(0)}</div>
          <div className="profile-card__info">
            <p className="profile-card__name">{user.name}</p>
            <p className="profile-card__meta">MyDigital ID: {user.myDigitalId}</p>
            <p className="profile-card__meta">{user.email}</p>
            <p className="profile-card__meta">{user.phone}</p>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <h2>{t.settings.language}</h2>
        <div className="lang-toggle">
          {(['ms', 'en'] as Language[]).map((lang) => (
            <button
              key={lang}
              className={`lang-toggle__btn ${language === lang ? 'active' : ''}`}
              onClick={() => setLanguage(lang)}
            >
              {lang === 'ms' ? '🇲🇾 Bahasa Melayu' : '🇬🇧 English'}
            </button>
          ))}
        </div>
      </section>

      <section className="settings-section">
        <h2>{t.settings.channels}</h2>
        <div className="channel-toggles">
          {channelPreferences.map((pref) => (
            <label key={pref.channel} className="channel-toggle">
              <span>{t.settings.channelLabels[pref.channel]}</span>
              <input
                type="checkbox"
                checked={pref.enabled}
                onChange={() => toggleChannel(pref.channel)}
              />
              <span className="channel-toggle__slider" />
            </label>
          ))}
        </div>
      </section>

      <section className="settings-section">
        <h2>📍 {t.settings.location}</h2>
        <p className="settings-value">{user.location[language]}</p>
      </section>

      <section className="settings-section">
        <h2>🔗 {t.settings.integrations}</h2>
        <div className="integration-list">
          {t.settings.integrationList.map((name) => (
            <div key={name} className="integration-item">
              <span>{name}</span>
              <span className="integration-badge">
                {language === 'ms' ? 'Disambung' : 'Connected'}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="settings-section settings-section--pdpa">
        <h2>🔒 {t.settings.pdpa}</h2>
        <p>{t.settings.pdpaText}</p>
      </section>

      <button className="btn btn--primary btn--full" onClick={handleSave}>
        {settingsSaved ? t.settings.saved : t.settings.save}
      </button>
    </div>
  )
}
