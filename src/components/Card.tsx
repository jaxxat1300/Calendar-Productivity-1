import { motion } from 'framer-motion'

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ title, subtitle, right }:{ title: string; subtitle?: string; right?: React.ReactNode }){
  return (
    <div className="p-4 border-b border-base-200/50 flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-base-300 mt-0.5">{subtitle}</p>}
      </div>
      {right}
    </div>
  )
}

export function CardBody({ children }: { children: React.ReactNode }){
  return <div className="p-4">{children}</div>
}


