import { useMemo, useState } from 'react'
import { format, startOfWeek, addDays, isSameDay } from 'date-fns'
import { Card, CardBody, CardHeader } from './Card'

export type CalendarEvent = {
  id: string
  title: string
  start: Date
  end: Date
  category: 'work' | 'personal' | 'wellness'
  link?: string
}

const categoryColor: Record<CalendarEvent['category'], string> = {
  work: 'bg-calm-200 text-base-800',
  personal: 'bg-leaf-100 text-base-800',
  wellness: 'bg-calm-100 text-base-800'
}

export function CalendarView({ events }: { events: CalendarEvent[] }) {
  const [anchor, setAnchor] = useState(new Date())
  const days = useMemo(() => {
    const start = startOfWeek(anchor, { weekStartsOn: 1 })
    return Array.from({ length: 7 }, (_, i) => addDays(start, i))
  }, [anchor])

  return (
    <Card>
      <CardHeader
        title={format(anchor, 'MMMM dd, yyyy')}
        subtitle="This week"
        right={
          <div className="flex gap-2">
            <button className="btn btn-ghost" onClick={() => setAnchor(addDays(anchor, -7))}>Prev</button>
            <button className="btn btn-ghost" onClick={() => setAnchor(new Date())}>Today</button>
            <button className="btn btn-ghost" onClick={() => setAnchor(addDays(anchor, 7))}>Next</button>
          </div>
        }
      />
      <CardBody>
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-3">
          {days.map(d => (
            <div key={d.toISOString()} className="card p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-xs text-base-300">{format(d, 'EEE')}</div>
                  <div className="text-lg font-semibold">{format(d, 'd')}</div>
                </div>
                {isSameDay(d, new Date()) && <span className="chip">Today</span>}
              </div>
              <div className="flex flex-col gap-2">
                {events.filter(e => isSameDay(e.start, d)).map(e => (
                  <div key={e.id} className={`rounded-xl px-3 py-2 ${categoryColor[e.category]} flex flex-col gap-1`}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{e.title}</span>
                      {e.link && (
                        <a className="text-xs underline opacity-80" href={e.link} target="_blank" rel="noreferrer">Join</a>
                      )}
                    </div>
                    <span className="text-xs opacity-70">{format(e.start, 'HH:mm')} – {format(e.end, 'HH:mm')}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}


