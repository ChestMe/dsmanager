import { members } from '../data/mock.js'
import { Avatar } from '../ui.jsx'
import { Toggle } from '../ui.jsx'
import { useState } from 'react'
import { useApp } from '../context.jsx'

export default function Levels() {
  const { toast } = useApp()
  const [on, setOn] = useState(true)
  const [stack, setStack] = useState(true)
  const board = [...members].filter((m) => !m.bot).sort((a, b) => b.xp - a.xp)

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Уровни</div>
          <h1 className="font-display text-2xl text-white">XP и таблица лидеров</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          модуль
          <Toggle on={on} onClick={() => { setOn(!on); toast(`Уровни ${!on ? 'вкл' : 'выкл'}`) }} />
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="glass overflow-hidden rounded-2xl">
          {board.map((m, i) => (
            <div key={m.id} className="flex items-center gap-3 border-b border-white/5 px-4 py-3 last:border-0">
              <div className="w-6 text-center font-display text-sm text-mist-400">{i + 1}</div>
              <Avatar name={m.name} color={m.roleColor} size={36} />
              <div className="min-w-0 flex-1">
                <div className="text-sm text-white">{m.name}</div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" style={{ width: `${(m.xp % 1000) / 10}%` }} />
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-sm text-white">ур. {m.level}</div>
                <div className="text-[11px] text-mist-400">{m.xp.toLocaleString('ru-RU')} XP</div>
              </div>
            </div>
          ))}
        </div>
        <div className="glass space-y-4 rounded-2xl p-5 text-sm">
          <div className="flex items-center justify-between">
            <span>Стак ролей уровня</span>
            <Toggle on={stack} onClick={() => setStack(!stack)} />
          </div>
          <div>
            <div className="text-xs text-mist-400">XP за сообщение</div>
            <input className="input mt-1" defaultValue="15–25" />
          </div>
          <div>
            <div className="text-xs text-mist-400">Кулдаун</div>
            <input className="input mt-1" defaultValue="45 сек" />
          </div>
          <div>
            <div className="text-xs text-mist-400">Канал аптеков</div>
            <select className="input mt-1"><option>#уровни</option><option>#общий</option></select>
          </div>
          <button className="btn btn-primary w-full" onClick={() => toast('Настройки XP сохранены')}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}
