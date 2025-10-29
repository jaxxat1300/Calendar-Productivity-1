import { useMemo, useState } from 'react'
import { Card, CardBody, CardHeader } from './Card'

export type Note = {
  id: string
  title: string
  content: string
  tags: string[]
  section: 'Inspiration' | 'Tasks & Priorities' | 'Event'
}

export function NotesSection({ notes, onCreate }: { notes: Note[]; onCreate?: (n: Note) => void }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => notes.filter(n => (n.title + ' ' + n.content + ' ' + n.tags.join(' ')).toLowerCase().includes(query.toLowerCase())),
    [notes, query]
  )

  const grouped = useMemo(() => {
    return {
      Inspiration: filtered.filter(n => n.section === 'Inspiration'),
      'Tasks & Priorities': filtered.filter(n => n.section === 'Tasks & Priorities'),
    }
  }, [filtered])

  return (
    <Card>
      <CardHeader title="Notes" subtitle="Capture ideas, tasks, and references" right={
        <div className="flex gap-2">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search notes…" className="px-3 py-2 rounded-xl bg-base-200/50 focus:outline-none" />
          <button className="btn btn-primary" onClick={() => onCreate?.({ id: Date.now()+'' , title: 'New note', content: '', tags: [], section: 'Inspiration' })}>New</button>
        </div>
      } />
      <CardBody>
        <div className="grid md:grid-cols-2 gap-4">
          <NotesColumn title="Inspiration" notes={grouped['Inspiration']} />
          <NotesColumn title="Tasks & Priorities" notes={grouped['Tasks & Priorities']} />
        </div>
      </CardBody>
    </Card>
  )
}

function NotesColumn({ title, notes }: { title: string; notes: Note[] }){
  return (
    <div className="card p-3">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">{title}</h4>
        <span className="chip">{notes.length}</span>
      </div>
      <div className="flex flex-col gap-3">
        {notes.map(n => (
          <div key={n.id} className="p-3 rounded-xl bg-base-100/50 border border-base-200/60">
            <div className="font-medium">{n.title}</div>
            <p className="text-sm opacity-80 mt-1 line-clamp-3">{n.content}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {n.tags.map(t => <span key={t} className="chip">#{t}</span>)}
            </div>
          </div>
        ))}
        {notes.length === 0 && <div className="text-sm opacity-60">No notes here yet.</div>}
      </div>
    </div>
  )
}


