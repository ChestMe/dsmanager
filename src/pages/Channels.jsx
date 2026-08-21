import { Hash, Volume2, MessagesSquare, Folder } from 'lucide-react'
import { channels } from '../data/mock.js'
import { useApp } from '../context.jsx'
import { useState } from 'react'

const icons = { text: Hash, voice: Volume2, forum: MessagesSquare, category: Folder }

export default function Channels() {
  const { toast } = useApp()
  const [slow, setSlow] = useState(() => Object.fromEntries(channels.filter((c) => c.type === 'text').map((c) => [c.id, c.slow])))

  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-mist-400">Каналы</div>
        <h1 className="font-display text-2xl text-white">Структура сервера</h1>
      </div>
      <div className="glass overflow-hidden rounded-2xl">
        {channels.map((c) => {
          const Icon = icons[c.type]
          if (c.type === 'category') {
            return (
              <div key={c.id} className="bg-white/[0.03] px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-mist-400">
                {c.name}
              </div>
            )
          }
          return (
            <div key={c.id} className="flex items-center gap-3 border-t border-white/5 px-4 py-2.5">
              <Icon size={16} className="text-mist-400" />
              <div className="min-w-0 flex-1">
                <div className="text-sm text-white">{c.name}</div>
                <div className="text-[11px] text-mist-500">
                  {c.type === 'voice' ? `${c.users} в канале · ${c.bitrate} kbps` : `${c.msgs?.toLocaleString('ru-RU')} сообщений`}
                </div>
              </div>
              {c.type === 'text' && (
                <label className="flex items-center gap-2 text-[11px] text-mist-400">
                  слоумод
                  <select
                    className="rounded-lg border border-white/10 bg-ink-850 px-2 py-1 text-xs text-white"
                    value={slow[c.id]}
                    onChange={(e) => { setSlow({ ...slow, [c.id]: Number(e.target.value) }); toast(`#${c.name}: ${e.target.value}с`) }}
                  >
                    {[0, 5, 10, 30, 60, 300].map((n) => <option key={n} value={n}>{n === 0 ? 'выкл' : `${n}с`}</option>)}
                  </select>
                </label>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
