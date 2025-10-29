import React, { createContext, useContext, useMemo, useState } from 'react'

type WellnessState = {
  completionsByDate: Record<string, number>
  addCompletion: (date?: Date) => void
  getWeeklyPoints: (anchor?: Date) => number[]
}

const WellnessContext = createContext<WellnessState | null>(null)

function formatDate(d: Date){
  return d.toISOString().slice(0,10)
}

export function WellnessProvider({ children }:{ children: React.ReactNode }){
  const [map, setMap] = useState<Record<string, number>>({})

  const addCompletion = (date = new Date()) => {
    const key = formatDate(date)
    setMap(prev => ({ ...prev, [key]: (prev[key] ?? 0) + 1 }))
  }

  const getWeeklyPoints = (anchor = new Date()) => {
    // Monday-start week
    const a = new Date(anchor)
    const day = (a.getDay() + 6) % 7 // 0..6 where 0 is Monday
    const monday = new Date(a)
    monday.setDate(a.getDate() - day)
    const days: Date[] = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday)
      d.setDate(monday.getDate() + i)
      return d
    })
    const values = days.map(d => map[formatDate(d)] ?? 0)
    const max = Math.max(1, ...values)
    return values.map(v => Math.min(1, v / max))
  }

  const value = useMemo<WellnessState>(() => ({
    completionsByDate: map,
    addCompletion,
    getWeeklyPoints
  }), [map])

  return <WellnessContext.Provider value={value}>{children}</WellnessContext.Provider>
}

export function useWellness(){
  const ctx = useContext(WellnessContext)
  if(!ctx) throw new Error('useWellness must be used within WellnessProvider')
  return ctx
}


