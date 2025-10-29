import type { CalendarEvent } from '../components/CalendarView'
import type { Note } from '../components/NotesSection'
import type { Suggestion } from '../components/SelfCareSuggestions'

const now = new Date()
function at(hours: number, minutes = 0) {
  const d = new Date(now)
  d.setHours(hours, minutes, 0, 0)
  return d
}

export const sampleEvents: CalendarEvent[] = [
  { id: '1', title: 'Standup', start: at(9, 0), end: at(9, 30), category: 'work', link: 'https://meet.google.com' },
  { id: '2', title: 'Focus Block', start: at(10, 0), end: at(12, 0), category: 'work' },
  { id: '3', title: 'Walk outside', start: at(12, 30), end: at(13, 0), category: 'wellness' },
  { id: '4', title: '1:1', start: at(14, 0), end: at(14, 30), category: 'work', link: 'https://zoom.us' },
  { id: '5', title: 'Dinner with Sam', start: at(18, 30), end: at(20, 0), category: 'personal' },
]

export const sampleNotes: Note[] = [
  { id: 'n1', title: 'Birthday gift ideas', content: 'Cookbook, local pottery, concert tickets', tags: ['gift', 'ideas'], section: 'Inspiration' },
  { id: 'n2', title: 'Try this recipe', content: 'Miso roasted salmon with sesame greens', tags: ['recipe'], section: 'Inspiration' },
  { id: 'n3', title: 'Bills this week', content: 'Electricity, phone, gym membership', tags: ['bills', 'week'], section: 'Tasks & Priorities' },
  { id: 'n4', title: 'Errands', content: 'Refill water filter, drop off package, new socks', tags: ['errands'], section: 'Tasks & Priorities' },
]

export const sampleSuggestions: Suggestion[] = [
  { id: 's1', title: '3-minute breathing', context: 'desk', durationMin: 3 },
  { id: 's2', title: 'Stretch shoulders and neck', context: 'desk', durationMin: 2 },
  { id: 's3', title: 'Walk a block between calls', context: 'desk', durationMin: 5 },
  { id: 's4', title: 'Mindful transit: notice 5 things', context: 'commute', durationMin: 4 },
  { id: 's5', title: 'Warm tea without screens', context: 'bedtime', durationMin: 6 },
]


