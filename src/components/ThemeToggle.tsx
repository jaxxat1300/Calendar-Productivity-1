import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : prefersDark
    setDark(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button className="btn btn-ghost" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="hidden md:inline">{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}


