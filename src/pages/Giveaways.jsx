import { useState } from 'react'
import { giveaways as seed } from '../data/mock.js'
import { Modal } from '../ui.jsx'
import { useApp } from '../context.jsx'
import { Plus } from 'lucide-react'

export default function Giveaways() {
  const { toast } = useApp()
  const [list, setList] = useState(seed)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ prize: '', channel: '#розыгрыши', winners: 1, ends: '25 авг 21:00' })

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Розыгрыши</div>
          <h1 className="font-display text-2xl text-white">Ивенты и призы</h1>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Plus size={16} /> Создать</button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {list.map((g) => (
          <div key={g.id} className="glass rounded-2xl p-5">
            <div className="flex items-start justify-between">
              <div className="font-display text-lg text-white">{g.prize}</div>
              <span className={`chip ${g.status === 'live' ? 'bg-emerald-400/15 text-emerald-200' : 'bg-white/10 text-mist-300'}`}>{g.status}</span>
            </div>
            <div className="mt-2 space-y-1 text-sm text-mist-300">
              <div>{g.channel} · до {g.ends}</div>
              <div>{g.entries} участников · {g.winners} победитель</div>
              <div className="text-xs text-mist-500">хост: {g.host}</div>
            </div>
            {g.status === 'live' && (
              <button
                className="btn btn-ghost mt-4 w-full"
                onClick={() => { setList((xs) => xs.map((x) => x.id === g.id ? { ...x, status: 'ended' } : x)); toast('Победитель выбран') }}
              >
                Завершить и выбрать
              </button>
            )}
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Новый розыгрыш">
        <div className="space-y-3">
          <input className="input" placeholder="Приз" value={form.prize} onChange={(e) => setForm({ ...form, prize: e.target.value })} />
          <input className="input" placeholder="Канал" value={form.channel} onChange={(e) => setForm({ ...form, channel: e.target.value })} />
          <input className="input" type="number" min="1" value={form.winners} onChange={(e) => setForm({ ...form, winners: Number(e.target.value) })} />
          <input className="input" value={form.ends} onChange={(e) => setForm({ ...form, ends: e.target.value })} />
          <button
            className="btn btn-primary w-full"
            disabled={!form.prize}
            onClick={() => {
              setList([{ id: `g${Date.now()}`, ...form, entries: 0, status: 'live', host: 'Вы' }, ...list])
              setOpen(false)
              toast('Розыгрыш запущен')
            }}
          >
            Запустить
          </button>
        </div>
      </Modal>
    </div>
  )
}
