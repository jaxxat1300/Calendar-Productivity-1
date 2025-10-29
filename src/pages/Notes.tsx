import { NotesSection } from '../components/NotesSection'
import { sampleNotes } from '../sample/data'

export function NotesPage(){
  return (
    <div className="space-y-6">
      <NotesSection notes={sampleNotes} />
    </div>
  )
}


