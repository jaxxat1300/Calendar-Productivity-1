import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BackgroundOrbs } from '../components/BackgroundOrbs'
import { HeroPreview } from '../components/HeroPreview'
import { MiniProgressChart } from '../components/MiniProgressChart'
import { useWellness } from '../state/WellnessStore'

export function Landing(){
  const wellness = useWellness()
  const weekly = wellness.getWeeklyPoints()
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-calm-50/80 to-transparent">
      <BackgroundOrbs />
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-200/60 text-sm mb-4">Gentle focus • Daily care</div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">A calmer way to plan your day</h1>
        <p className="mt-4 text-lg opacity-80">Flow blends your calendar with self-care. See meetings, capture notes, and fit in small wellness moments without the noise.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/dashboard" className="btn btn-primary text-base">Open App</Link>
          <a href="#features" className="btn btn-ghost text-base">Learn more</a>
        </div>
      </motion.div>
      <HeroPreview />
      <div className="max-w-4xl w-full mt-12">
        <div className="text-left mb-2">
          <div className="font-medium">Weekly self-care progress</div>
          <div className="text-sm opacity-70">Small wins across the week</div>
        </div>
        <MiniProgressChart points={weekly} />
      </div>
      <section id="features" className="max-w-5xl mt-16 grid md:grid-cols-3 gap-4">
        {features.map(f => (
          <div key={f.title} className="card p-5 text-left">
            <div className="text-2xl mb-2">{f.emoji}</div>
            <div className="font-medium">{f.title}</div>
            <p className="text-sm opacity-70 mt-1">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

const features = [
  { emoji: '📆', title: 'Unified Calendar', desc: 'Personal and work events in one calm view with meeting links.'},
  { emoji: '📝', title: 'Notes & Ideas', desc: 'Event notes, inspiration, and prioritized tasks with tags.'},
  { emoji: '🌿', title: 'Self-Care', desc: 'Short science-backed suggestions to fit the day you have.'},
]


