import { useState } from 'react'
import { automodRules as seed } from '../data/mock.js'
import { Toggle } from '../ui.jsx'
import { useApp } from '../context.jsx'
import { Shield } from 'lucide-react'

export default function Automod() {
  const { toast } = useApp()
  const [rules, setRules] = useState(seed)
  const on = rules.filter((r) => r.on).length

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Автомод</div>
          <h1 className="font-display text-2xl text-white">Правила фильтрации</h1>
        </div>
        <div className="chip bg-violet-500/15 text-violet-200"><Shield size={12} /> {on} из {rules.length} активны</div>
      </div>
      <div className="grid gap-3">
        {rules.map((r) => (
          <div key={r.id} className="glass flex items-center gap-4 rounded-2xl p-4">
            <div className="flex-1">
              <div className="font-semibold text-white">{r.name}</div>
              <div className="text-sm text-mist-400">{r.desc}</div>
              <div className="mt-1 text-[11px] text-cyan-300">Действие: {r.action}</div>
            </div>
            <Toggle
              on={r.on}
              onClick={() => {
                setRules((xs) => xs.map((x) => x.id === r.id ? { ...x, on: !x.on } : x))
                toast(`${r.name}: ${r.on ? 'выкл' : 'вкл'}`)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
