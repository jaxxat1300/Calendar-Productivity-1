import { Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Dashboard } from './pages/Dashboard'
import { CalendarPage } from './pages/Calendar'
import { NotesPage } from './pages/Notes'
import { SelfCarePage } from './pages/SelfCare'
import { SettingsPage } from './pages/Settings'
import { Shell } from './components/Shell'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Shell />}> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/self-care" element={<SelfCarePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}


