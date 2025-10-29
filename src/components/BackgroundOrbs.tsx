import { motion } from 'framer-motion'

export function BackgroundOrbs(){
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(147,197,253,0.25),transparent),radial-gradient(800px_400px_at_90%_0%,rgba(220,252,231,0.25),transparent)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(147,197,253,0.35), transparent 60%)' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle at 70% 70%, rgba(220,252,231,0.35), transparent 60%)' }}
      />
    </div>
  )
}


