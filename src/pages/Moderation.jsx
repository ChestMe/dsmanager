import { useState } from 'react'
import { cases as seed } from '../data/mock.js'
import { Modal } from '../ui.jsx'
import { useApp } from '../context.jsx'
import { Plus } from 'lucide-react'

const types = ['все', 'ban', 'kick', 'timeout', 'warn', 'unban']
const tone = {
  ban: 'bg-rose-500/15 text-rose-200',
  kick: 'bg-orange-400/15 text-orange-200',
  timeout: 'bg-sky-400/15 text-sky-200',
  warn: 'bg-amber-400/15 text-amber-200',
  unban: 'bg-emerald-400/15 text-emerald-200',
}

export default function Moderation() {
  const { toast } = useApp()
  const [f, setF] = useState('все')
  const [list, setList] = useState(seed)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ user: '', type: 'warn', reason: '', duration: '1 час' })

  const shown = f === 'все' ? list : list.filter((c) => c.type === f)

  const add = () => {
    const id = Math.max(...list.map((c) => c.id)) + 1
    setList([{ id, ...form, mod: 'Вы', date: 'сейчас' }, ...list])
    setOpen(false)
    toast(`Кейс #${id} создан`)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Модерация</div>
          <h1 className="font-display text-2xl text-white">Журнал кейсов</h1>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Plus size={16} /> Новый кейс</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button key={t} onClick={() => setF(t)} className={`chip ${f === t ? 'bg-violet-500/20 text-white' : 'bg-white/5 text-mist-300'}`}>{t}</button>
        ))}
      </div>
      <div className="glass overflow-hidden rounded-2xl">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-xs text-mist-400">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Тип</th>
              <th className="px-4 py-3 text-left">Участник</th>
              <th className="hidden px-4 py-3 text-left md:table-cell">Модер</th>
              <th className="px-4 py-3 text-left">Причина</th>
              <th className="hidden px-4 py-3 text-left lg:table-cell">Срок</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((c) => (
              <tr key={c.id} className="border-t border-white/5">
                <td className="px-4 py-2.5 font-mono text-xs text-mist-400">#{c.id}</td>
                <td className="px-4 py-2.5"><span className={`chip ${tone[c.type]}`}>{c.type}</span></td>
                <td className="px-4 py-2.5 text-white">{c.user}</td>
                <td className="hidden px-4 py-2.5 text-mist-300 md:table-cell">{c.mod}</td>
                <td className="px-4 py-2.5 text-mist-300">{c.reason}</td>
                <td className="hidden px-4 py-2.5 text-mist-400 lg:table-cell">{c.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Новый кейс">
        <div className="space-y-3">
          <input className="input" placeholder="Пользователь" value={form.user} onChange={(e) => setForm({ ...form, user: e.target.value })} />
          <select className="input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            {types.filter((t) => t !== 'все').map((t) => <option key={t}>{t}</option>)}
          </select>
          <input className="input" placeholder="Причина" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} />
          <input className="input" placeholder="Срок" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
          <button className="btn btn-primary w-full" onClick={add} disabled={!form.user || !form.reason}>Создать</button>
        </div>
      </Modal>
    </div>
  )
}
