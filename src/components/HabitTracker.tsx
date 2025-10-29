import { Card, CardBody, CardHeader } from './Card'

export function HabitTracker({ streak }: { streak: number }){
  const days = Array.from({ length: 7 }, (_, i) => i)
  return (
    <Card>
      <CardHeader title="Streak" subtitle="Daily self-care check-ins" />
      <CardBody>
        <div className="flex items-center gap-2">
          {days.map((d, i) => (
            <div key={i} className={`h-9 w-9 rounded-xl flex items-center justify-center ${i < streak % 7 ? 'bg-leaf-100' : 'bg-base-200/50'}`}>
              {i < streak % 7 ? '🌿' : '·'}
            </div>
          ))}
        </div>
        <div className="text-sm opacity-70 mt-3">{streak} day streak — keep going!</div>
      </CardBody>
    </Card>
  )
}


