import { CalendarView } from '../components/CalendarView'
import { sampleEvents } from '../sample/data'

export function CalendarPage(){
  return (
    <div className="space-y-6">
      <CalendarView events={sampleEvents} />
    </div>
  )
}


