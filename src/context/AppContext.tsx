import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { mockNotifications } from '../data/notifications'
import type {
  ChannelPreference,
  Language,
  Notification,
  UserProfile,
} from '../types'

interface AppContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  notifications: Notification[]
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  user: UserProfile
  channelPreferences: ChannelPreference[]
  toggleChannel: (channel: ChannelPreference['channel']) => void
  settingsSaved: boolean
  saveSettings: () => void
}

const defaultChannels: ChannelPreference[] = [
  { channel: 'app', enabled: true },
  { channel: 'push', enabled: true },
  { channel: 'sms', enabled: true },
  { channel: 'email', enabled: true },
  { channel: 'whatsapp', enabled: false },
]

const STORAGE_KEY = 'mynotifikasi-demo'

interface StoredState {
  language?: Language
  notifications?: Notification[]
  channelPreferences?: ChannelPreference[]
}

function loadStoredState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as StoredState) : {}
  } catch {
    return {}
  }
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const stored = loadStoredState()
  const [language, setLanguageState] = useState<Language>(stored.language ?? 'ms')
  const [notifications, setNotifications] = useState<Notification[]>(
    stored.notifications ?? mockNotifications,
  )
  const [channelPreferences, setChannelPreferences] = useState<ChannelPreference[]>(
    stored.channelPreferences ?? defaultChannels,
  )
  const [settingsSaved, setSettingsSaved] = useState(false)

  useEffect(() => {
    const payload: StoredState = { language, notifications, channelPreferences }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [language, notifications, channelPreferences])

  const user: UserProfile = {
    name: 'Aisyah',
    myDigitalId: 'MDID-2019-88421',
    location: { ms: 'Putrajaya, Wilayah Persekutuan', en: 'Putrajaya, Federal Territory' },
    email: 'aisyah.rahman@email.com',
    phone: '+60 12-345 6789',
  }

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    setSettingsSaved(false)
  }, [])

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
    )
  }, [])

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
  }, [])

  const toggleChannel = useCallback((channel: ChannelPreference['channel']) => {
    setChannelPreferences((prev) =>
      prev.map((c) => (c.channel === channel ? { ...c, enabled: !c.enabled } : c)),
    )
    setSettingsSaved(false)
  }, [])

  const saveSettings = useCallback(() => {
    setSettingsSaved(true)
    setTimeout(() => setSettingsSaved(false), 2500)
  }, [])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      notifications,
      markAsRead,
      markAllAsRead,
      user,
      channelPreferences,
      toggleChannel,
      settingsSaved,
      saveSettings,
    }),
    [
      language,
      notifications,
      markAsRead,
      markAllAsRead,
      channelPreferences,
      toggleChannel,
      settingsSaved,
      saveSettings,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
