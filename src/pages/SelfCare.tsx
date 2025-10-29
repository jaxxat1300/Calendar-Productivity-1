import { SelfCareSuggestions } from '../components/SelfCareSuggestions'
import { HabitTracker } from '../components/HabitTracker'
import { sampleSuggestions } from '../sample/data'

export function SelfCarePage(){
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <SelfCareSuggestions items={sampleSuggestions} />
      </div>
      <div>
        <HabitTracker streak={9} />
      </div>
    </div>
  )
}


