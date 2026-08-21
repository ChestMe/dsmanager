import { useState } from 'react'
import { logs } from '../data/mock.js'

const cats = ['все', 'mod', 'member', 'msg', 'voice', 'role', 'channel', 'bot', 'ticket', 'level', 'giveaway']
const color = {
  mod: 'bg-rose-400', member: 'bg-emerald-400', msg: 'bg-amber-400', voice: 'bg-sky-400',
  role: 'bg-violet-400', channel: 'bg-pink-400', bot: 'bg-cyan-300', ticket: 'bg-fuchsia-400',
  level: 'bg-lime-300', giveaway: 'bg-orange-300',
}

export default function Logs() {
  const [f, setF] = useState('все')
  const shown = f === 'все' ? logs : logs.filter((l) => l.cat === f)
  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-mist-400">Логи</div>
        <h1 className="font-display text-2xl text-white">Аудит в реальном времени</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setF(c)} className={`chip ${f === c ? 'bg-violet-500/20 text-white' : 'bg-white/5 text-mist-300'}`}>{c}</button>
        ))}
      </div>
      <div className="glass rounded-2xl p-4">
        <ol className="space-y-3">
          {shown.map((l, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${color[l.cat]}`} />
              <span className="w-28 shrink-0 font-mono text-xs text-mist-500">{l.t}</span>
              <span className="text-mist-200">{l.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
