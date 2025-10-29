import { useState } from 'react'
import { Card, CardBody, CardHeader } from './Card'
import { AlarmClock, CheckCircle2, Pause, RefreshCcw } from 'lucide-react'

export type Suggestion = {
  id: string
  title: string
  context: 'commute' | 'workout' | 'desk' | 'bedtime' | 'morning'
  durationMin: number
}

export function SelfCareSuggestions({ items }: { items: Suggestion[] }){
  const [completedIds, setCompletedIds] = useState<string[]>([])
  const [snoozedIds, setSnoozedIds] = useState<string[]>([])

  const complete = (id: string) => setCompletedIds(v => [...new Set([...v, id])])
  const snooze = (id: string) => setSnoozedIds(v => [...new Set([...v, id])])
  const reset = () => { setCompletedIds([]); setSnoozedIds([]) }

  const visible = items.filter(i => !snoozedIds.includes(i.id))

  return (
    <Card>
      <CardHeader title="Self-Care Planner" subtitle="Short wellness actions you can fit in" right={
        <button className="btn btn-ghost" onClick={reset}><RefreshCcw size={16}/> Reset</button>
      }/>
      <CardBody>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map(s => (
            <div key={s.id} className="card p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{s.title}</div>
                  <div className="text-sm opacity-70 capitalize">{s.context} • {s.durationMin} min</div>
                </div>
                <span className="chip"><AlarmClock size={14} className="inline mr-1" />{s.durationMin}</span>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-primary" onClick={() => complete(s.id)}><CheckCircle2 size={16}/> Done</button>
                <button className="btn btn-ghost" onClick={() => snooze(s.id)}><Pause size={16}/> Snooze</button>
              </div>
              {completedIds.includes(s.id) && <div className="text-sm text-leaf-500">Nice work—small steps add up.</div>}
            </div>
          ))}
          {visible.length === 0 && (
            <div className="p-6 text-sm opacity-70">All set for now. Consider a deep breath or a short stretch.</div>
          )}
        </div>
      </CardBody>
    </Card>
  )
}


