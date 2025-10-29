import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { CalendarDays, LayoutGrid, NotebookPen, Heart, Settings, Leaf } from 'lucide-react'

export function Shell() {
  const location = useLocation()
  return (
    <div className="min-h-screen grid grid-rows-[auto,1fr]">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-base-100/60 border-b border-base-200/50">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-calm-100 flex items-center justify-center">
              <Leaf className="text-calm-400" size={18} />
            </div>
            <span className="font-semibold">Flow</span>
            <span className="text-sm text-base-300">Focus + Self-Care</span>
          </div>
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1">
              <TopLink to="/dashboard" label="Dashboard" icon={<LayoutGrid size={16} />} />
              <TopLink to="/calendar" label="Calendar" icon={<CalendarDays size={16} />} />
              <TopLink to="/notes" label="Notes" icon={<NotebookPen size={16} />} />
              <TopLink to="/self-care" label="Self-Care" icon={<Heart size={16} />} />
            </nav>
            <NavLink to="/settings" className="btn btn-ghost">
              <Settings size={18} />
            </NavLink>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl w-full px-4 py-6">
        <Outlet key={location.pathname} />
      </div>
    </div>
  )
}

function TopLink({ to, label, icon }: { to: string; label: string; icon: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `btn ${isActive ? 'btn-primary' : 'btn-ghost'}`}
    >
      <span className="opacity-70">{icon}</span>
      <span>{label}</span>
    </NavLink>
  )
}


