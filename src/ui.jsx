import { X } from 'lucide-react'

export function Logo({ size = 28, withWord = true }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden>
        <defs>
          <linearGradient id="nx" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2ee6ff" />
            <stop offset="1" stopColor="#7c6cff" />
          </linearGradient>
        </defs>
        <polygon points="32,6 56,19 56,45 32,58 8,45 8,19" stroke="url(#nx)" strokeWidth="3" fill="rgba(124,108,255,0.08)" />
        <circle cx="32" cy="32" r="8" fill="url(#nx)" />
      </svg>
      {withWord && (
        <span className="font-display tracking-[0.18em] text-sm font-semibold text-white">
          NEXUS
        </span>
      )}
    </div>
  )
}

export function Avatar({ name, color = '#7c6cff', size = 36, bot }) {
  const ini = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div
      className="relative shrink-0 grid place-items-center rounded-full font-semibold text-white"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}, ${color}99)`,
        fontSize: size * 0.34,
        boxShadow: `0 0 0 2px #0b0d16, 0 0 0 3px ${color}55`,
      }}
    >
      {ini}
      {bot && (
        <span className="absolute -bottom-0.5 -right-0.5 rounded bg-[#5865F2] px-1 text-[8px] font-bold leading-4">
          BOT
        </span>
      )}
    </div>
  )
}

export function StatusDot({ status }) {
  const map = { online: '#23a55a', idle: '#f0b232', dnd: '#f23f43', offline: '#80848e' }
  return (
    <span
      className="inline-block h-2.5 w-2.5 rounded-full ring-2 ring-ink-800"
      style={{ background: map[status] || map.offline }}
    />
  )
}

export function StatCard({ label, value, delta, icon: Icon, tone = 'violet' }) {
  const tones = {
    violet: 'from-violet-500/20 to-transparent text-violet-300',
    cyan: 'from-cyan-400/20 to-transparent text-cyan-300',
    pink: 'from-pink-500/20 to-transparent text-pink-300',
    lime: 'from-lime-400/15 to-transparent text-lime-300',
  }
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-4">
      <div className={`pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${tones[tone]} blur-2xl`} />
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-mist-400">{label}</div>
          <div className="mt-1.5 font-display text-2xl font-semibold text-white">{value}</div>
          {delta && (
            <div className={`mt-1 text-xs ${String(delta).startsWith('-') ? 'text-rose-300' : 'text-emerald-300'}`}>
              {delta}
            </div>
          )}
        </div>
        {Icon && (
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-mist-100">
            <Icon size={18} />
          </div>
        )}
      </div>
    </div>
  )
}

export function Modal({ open, onClose, title, children, wide }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full ${wide ? 'max-w-2xl' : 'max-w-md'} page-enter glass rounded-2xl p-5 shadow-glow`}>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-base text-white">{title}</h3>
          <button onClick={onClose} className="rounded-lg p-1.5 text-mist-400 hover:bg-white/10 hover:text-white">
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export function Toggle({ on, onClick }) {
  return <button type="button" aria-pressed={on} onClick={onClick} className={`toggle ${on ? 'on' : 'off'}`} />
}

export function AreaChart({ data, xKey, yKey, color = '#7c6cff', height = 180 }) {
  const w = 640
  const h = height
  const pad = 28
  const xs = data.map((d) => d[yKey])
  const min = Math.min(...xs) * 0.92
  const max = Math.max(...xs) * 1.05
  const pts = data.map((d, i) => {
    const x = pad + (i * (w - pad * 2)) / (data.length - 1)
    const y = h - pad - ((d[yKey] - min) / (max - min)) * (h - pad * 2)
    return [x, y]
  })
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')
  const fill = `${line} L${pts.at(-1)[0]},${h - pad} L${pts[0][0]},${h - pad} Z`
  const id = `g-${yKey}-${color.replace('#', '')}`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 0.5, 1].map((t) => (
        <line
          key={t}
          x1={pad}
          x2={w - pad}
          y1={pad + t * (h - pad * 2)}
          y2={pad + t * (h - pad * 2)}
          stroke="rgba(255,255,255,0.05)"
        />
      ))}
      <path d={fill} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2.4" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill={color} />
      ))}
      {data.map((d, i) => (
        <text key={i} x={pts[i][0]} y={h - 8} textAnchor="middle" fill="#71789a" fontSize="11">
          {d[xKey]}
        </text>
      ))}
    </svg>
  )
}

export function Bars({ data, xKey, yKey, color = '#2ee6ff', height = 180 }) {
  const max = Math.max(...data.map((d) => d[yKey]))
  return (
    <div className="flex h-full items-end gap-1.5 px-1" style={{ height }}>
      {data.map((d) => (
        <div key={d[xKey]} className="group flex h-full flex-1 flex-col justify-end">
          <div
            className="relative w-full rounded-t-md"
            style={{
              height: `${(d[yKey] / max) * 82}%`,
              background: `linear-gradient(180deg, ${color}, ${color}55)`,
            }}
            title={`${d[xKey]}: ${d[yKey]}`}
          />
          <div className="mt-1 truncate text-center text-[10px] text-mist-400">{d[xKey]}</div>
        </div>
      ))}
    </div>
  )
}

export function Donut({ items, size = 160 }) {
  const total = items.reduce((s, i) => s + i.value, 0)
  let acc = 0
  const r = 54
  const c = 2 * Math.PI * r
  return (
    <div className="flex items-center gap-5">
      <svg width={size} height={size} viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
        {items.map((it) => {
          const len = (it.value / total) * c
          const dash = `${len} ${c - len}`
          const rot = (acc / total) * 360 - 90
          acc += it.value
          return (
            <circle
              key={it.name}
              cx="70"
              cy="70"
              r={r}
              fill="none"
              stroke={it.color}
              strokeWidth="14"
              strokeDasharray={dash}
              strokeLinecap="round"
              transform={`rotate(${rot} 70 70)`}
            />
          )
        })}
        <text x="70" y="66" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Unbounded">
          {total}%
        </text>
        <text x="70" y="84" textAnchor="middle" fill="#71789a" fontSize="10">
          активность
        </text>
      </svg>
      <div className="space-y-1.5">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-2 text-xs text-mist-200">
            <span className="h-2 w-2 rounded-full" style={{ background: it.color }} />
            <span className="w-20 truncate">{it.name}</span>
            <span className="text-mist-400">{it.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Empty({ text }) {
  return <div className="py-10 text-center text-sm text-mist-400">{text}</div>
}
