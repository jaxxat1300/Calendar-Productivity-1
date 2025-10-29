import { CalendarView } from '../components/CalendarView'
import { NotesSection } from '../components/NotesSection'
import { HabitTracker } from '../components/HabitTracker'
import { sampleEvents, sampleNotes } from '../sample/data'

export function Dashboard(){
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <CalendarView events={sampleEvents} />
        <NotesSection notes={sampleNotes} />
      </div>
      <div className="space-y-6">
        <HabitTracker streak={9} />
        <div className="card p-5">
          <div className="font-medium">Today’s Intention</div>
          <p className="text-sm opacity-80 mt-2">Move at a sustainable pace. Breathe between meetings.</p>
        </div>
      </div>
    </div>
  )
}


