import { motion } from 'framer-motion'

type Props = {
  points: number[] // 0..1 normalized values for 7 days
}

export function MiniProgressChart({ points }: Props){
  const width = 560
  const height = 140
  const padding = 16
  const innerW = width - padding * 2
  const innerH = height - padding * 2
  const step = innerW / (points.length - 1)

  const coords = points.map((v, i) => [padding + i * step, padding + innerH - v * innerH] as const)
  const path = coords.map((c, i) => (i === 0 ? `M ${c[0]},${c[1]}` : `L ${c[0]},${c[1]}`)).join(' ')

  const gradientId = 'grad-calm-leaf'

  return (
    <div className="card p-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#86efac" />
          </linearGradient>
        </defs>
        {/* grid lines */}
        {[0.25, 0.5, 0.75].map((t) => (
          <line key={t} x1={padding} x2={width - padding} y1={padding + innerH * t} y2={padding + innerH * t} stroke="currentColor" strokeOpacity="0.06" />
        ))}
        {/* area fill */}
        <motion.path
          d={path + ` L ${padding + innerW},${padding + innerH} L ${padding},${padding + innerH} Z`}
          fill={`url(#${gradientId})`}
          fillOpacity={0.15}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* line */}
        <motion.path
          d={path}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {/* points */}
        {coords.map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r={4}
            fill="#fff" stroke="#93c5fd" strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.05, type: 'spring', stiffness: 200, damping: 18 }}
          />
        ))}
      </svg>
      <div className="mt-2 flex items-center justify-between text-xs opacity-70">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </div>
  )
}


