import { useMemo, useState } from 'react'
import { Search, MoreHorizontal, Ban, VolumeX, AlertTriangle } from 'lucide-react'
import { Avatar, StatusDot, Modal } from '../ui.jsx'
import { members as seed } from '../data/mock.js'
import { useApp } from '../context.jsx'

const filters = ['все', 'online', 'idle', 'dnd', 'offline', 'боты']

export default function Members() {
  const { toast } = useApp()
  const [q, setQ] = useState('')
  const [f, setF] = useState('все')
  const [list, setList] = useState(seed)
  const [sel, setSel] = useState(null)
  const [action, setAction] = useState(null)

  const shown = useMemo(() => list.filter((m) => {
    const match = (m.name + m.tag + m.role).toLowerCase().includes(q.toLowerCase())
    if (!match) return false
    if (f === 'боты') return m.bot
    if (f !== 'все') return m.status === f
    return true
  }), [list, q, f])

  const run = () => {
    if (action === 'ban') {
      setList((xs) => xs.filter((x) => x.id !== sel.id))
      toast(`${sel.name} забанен`)
    } else if (action === 'timeout') toast(`${sel.name} в таймауте на 1 час`)
    else toast(`Варн выдан: ${sel.name}`)
    setAction(null)
    setSel(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Участники</div>
          <h1 className="font-display text-2xl text-white">{shown.length} в выборке</h1>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Search size={14} className="text-mist-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Имя, тег, роль" className="w-52 bg-transparent text-sm outline-none" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.map((x) => (
          <button key={x} onClick={() => setF(x)} className={`chip ${f === x ? 'bg-violet-500/20 text-white' : 'bg-white/5 text-mist-300'}`}>{x}</button>
        ))}
      </div>
      <div className="glass overflow-hidden rounded-2xl">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-xs text-mist-400">
            <tr>
              <th className="px-4 py-3 text-left">Участник</th>
              <th className="px-4 py-3 text-left">Роль</th>
              <th className="hidden px-4 py-3 text-left md:table-cell">Вступил</th>
              <th className="hidden px-4 py-3 text-right lg:table-cell">Сообщения</th>
              <th className="hidden px-4 py-3 text-right lg:table-cell">Варны</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {shown.map((m) => (
              <tr key={m.id} className="border-t border-white/5 hover:bg-white/[0.03]">
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar name={m.name} color={m.roleColor} size={34} bot={m.bot} />
                      <span className="absolute -bottom-0.5 -right-0.5"><StatusDot status={m.status} /></span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{m.name}</div>
                      <div className="text-xs text-mist-400">@{m.tag}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2.5"><span className="text-xs font-semibold" style={{ color: m.roleColor }}>{m.role}</span></td>
                <td className="hidden px-4 py-2.5 text-mist-300 md:table-cell">{m.joined}</td>
                <td className="hidden px-4 py-2.5 text-right text-mist-300 lg:table-cell">{m.msgs.toLocaleString('ru-RU')}</td>
                <td className="hidden px-4 py-2.5 text-right lg:table-cell">{m.warns ? <span className="text-amber-300">{m.warns}</span> : <span className="text-mist-500">0</span>}</td>
                <td className="px-4 py-2.5 text-right">
                  {!m.bot && (
                    <button onClick={() => setSel(m)} className="rounded-lg p-1.5 hover:bg-white/10"><MoreHorizontal size={16} /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={!!sel && !action} onClose={() => setSel(null)} title={sel?.name}>
        {sel && (
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Avatar name={sel.name} color={sel.roleColor} size={48} />
              <div>
                <div className="text-white">@{sel.tag}</div>
                <div className="text-xs text-mist-400">ур. {sel.level} · {sel.voice} войса</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button onClick={() => setAction('warn')} className="btn btn-ghost text-amber-200"><AlertTriangle size={14} /> Варн</button>
              <button onClick={() => setAction('timeout')} className="btn btn-ghost"><VolumeX size={14} /> Мут</button>
              <button onClick={() => setAction('ban')} className="btn btn-danger"><Ban size={14} /> Бан</button>
            </div>
          </div>
        )}
      </Modal>
      <Modal open={!!action} onClose={() => setAction(null)} title="Подтверждение">
        <p className="text-sm text-mist-300">Действие «{action}» для {sel?.name}. В демо это применится локально.</p>
        <div className="mt-4 flex justify-end gap-2">
          <button className="btn btn-ghost" onClick={() => setAction(null)}>Отмена</button>
          <button className="btn btn-primary" onClick={run}>Выполнить</button>
        </div>
      </Modal>
    </div>
  )
}
