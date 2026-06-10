import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { ToastProvider } from './components/Toast'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { NotificationsPage } from './pages/NotificationsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotificationDetailPage } from './pages/NotificationDetailPage'
import { AssistantPage } from './pages/AssistantPage'
import { SettingsPage } from './pages/SettingsPage'
import { AgencyDashboardPage } from './pages/AgencyDashboardPage'

function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/assistant" element={<AssistantPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/agency" element={<AgencyDashboardPage />} />
              <Route path="/notification/:id" element={<NotificationDetailPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AppProvider>
  )
}

export default App
