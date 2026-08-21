import { useState } from 'react'
import { tickets as seed } from '../data/mock.js'
import { useApp } from '../context.jsx'
import { Modal } from '../ui.jsx'

const tone = {
  open: 'bg-emerald-400/15 text-emerald-200',
  pending: 'bg-amber-400/15 text-amber-200',
  closed: 'bg-white/10 text-mist-300',
}

export default function Tickets() {
  const { toast } = useApp()
  const [list, setList] = useState(seed)
  const [sel, setSel] = useState(null)
  const [reply, setReply] = useState('')

  const setStatus = (id, status) => {
    setList((xs) => xs.map((t) => t.id === id ? { ...t, status } : t))
    toast(`Тикет #${id} → ${status}`)
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-mist-400">Тикеты</div>
        <h1 className="font-display text-2xl text-white">Очередь поддержки</h1>
      </div>
      <div className="grid gap-3">
        {list.map((t) => (
          <button key={t.id} onClick={() => setSel(t)} className="glass flex w-full items-center gap-4 rounded-2xl p-4 text-left">
            <div className="font-mono text-xs text-mist-400">#{t.id}</div>
            <div className="min-w-0 flex-1">
              <div className="truncate font-medium text-white">{t.topic}</div>
              <div className="text-xs text-mist-400">{t.user} · {t.created} · {t.msgs} сообщ.</div>
            </div>
            <span className={`chip ${t.prio === 'high' ? 'bg-rose-500/20 text-rose-200' : t.prio === 'medium' ? 'bg-amber-400/15 text-amber-200' : 'bg-white/5 text-mist-300'}`}>{t.prio}</span>
            <span className={`chip ${tone[t.status]}`}>{t.status}</span>
          </button>
        ))}
      </div>
      <Modal open={!!sel} onClose={() => setSel(null)} title={sel ? `#${sel.id} ${sel.topic}` : ''} wide>
        {sel && (
          <div className="space-y-3 text-sm">
            <div className="text-mist-300">{sel.user} · агент: {sel.agent}</div>
            <div className="rounded-xl bg-white/5 p-3">Привет, не выдалась роль Gamer после реакции. Уже 20 минут.</div>
            <textarea className="input min-h-24" placeholder="Ответ…" value={reply} onChange={(e) => setReply(e.target.value)} />
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary" onClick={() => { toast('Ответ отправлен'); setReply('') }}>Отправить</button>
              <button className="btn btn-ghost" onClick={() => setStatus(sel.id, 'pending')}>В ожидание</button>
              <button className="btn btn-ghost" onClick={() => { setStatus(sel.id, 'closed'); setSel(null) }}>Закрыть</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
