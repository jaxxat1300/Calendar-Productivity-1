import { motion } from 'framer-motion'
import { CalendarDays, NotebookPen, HeartPulse } from 'lucide-react'

export function HeroPreview(){
  return (
    <div className="relative mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
      >
        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><span className="text-calm-400"><CalendarDays size={18}/></span><span className="font-medium">Calendar</span></div>
          <div className="space-y-2 text-sm">
            <Row dot="#93c5fd" title="Standup" time="09:00" />
            <Row dot="#86efac" title="Walk outside" time="12:30" />
            <Row dot="#93c5fd" title="1:1" time="14:00" />
          </div>
        </GlassCard>
        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><span className="text-calm-400"><NotebookPen size={18}/></span><span className="font-medium">Notes</span></div>
          <div className="space-y-2 text-sm">
            <Tag>gift</Tag> <Tag>ideas</Tag>
            <div className="opacity-80 mt-2">Cookbook • local pottery • concert tickets</div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><span className="text-calm-400"><HeartPulse size={18}/></span><span className="font-medium">Self-care</span></div>
          <div className="space-y-2 text-sm">
            <Pill>3-min breath</Pill>
            <Pill>Neck stretch</Pill>
            <Pill>Short walk</Pill>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}

function GlassCard({ children }:{ children: React.ReactNode }){
  return (
    <div className="card p-5 bg-white/60 dark:bg-[var(--card)]/70 backdrop-blur">
      {children}
    </div>
  )
}

function Row({ dot, title, time }:{ dot: string; title: string; time: string }){
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: dot }} />
        <span>{title}</span>
      </div>
      <span className="opacity-60">{time}</span>
    </div>
  )
}

function Tag({ children }:{ children: React.ReactNode }){
  return <span className="chip">#{children}</span>
}

function Pill({ children }:{ children: React.ReactNode }){
  return <span className="px-3 py-1 rounded-full bg-calm-100 text-base-800 text-xs">{children}</span>
}


