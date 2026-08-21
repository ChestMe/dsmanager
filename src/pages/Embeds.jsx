import { useState } from 'react'
import { useApp } from '../context.jsx'

export default function Embeds() {
  const { toast } = useApp()
  const [color, setColor] = useState('#7c6cff')
  const [title, setTitle] = useState('Ивент выходного дня')
  const [desc, setDesc] = useState('Сегодня в 20:00 — кастомный турнир. Регистрация в #кланы. Приз: VIP на месяц.')
  const [footer, setFooter] = useState('ASTRAL · не пропусти')
  const [author, setAuthor] = useState('NEXUS')
  const [channel, setChannel] = useState('#анонсы')
  const [fields, setFields] = useState([
    { n: 'Когда', v: '21 авг, 20:00 МСК' },
    { n: 'Формат', v: '5×5, BO1' },
  ])

  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-mist-400">Эмбеды</div>
        <h1 className="font-display text-2xl text-white">Конструктор сообщений</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass space-y-3 rounded-2xl p-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-mist-400">Канал</label>
              <select className="input mt-1" value={channel} onChange={(e) => setChannel(e.target.value)}>
                {['#анонсы', '#общий', '#ивенты'].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-mist-400">Цвет</label>
              <input type="color" className="mt-1 h-11 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
          </div>
          <input className="input" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea className="input min-h-28" value={desc} onChange={(e) => setDesc(e.target.value)} />
          {fields.map((f, i) => (
            <div key={i} className="grid grid-cols-2 gap-2">
              <input className="input" value={f.n} onChange={(e) => setFields(fields.map((x, j) => j === i ? { ...x, n: e.target.value } : x))} />
              <input className="input" value={f.v} onChange={(e) => setFields(fields.map((x, j) => j === i ? { ...x, v: e.target.value } : x))} />
            </div>
          ))}
          <button className="btn btn-ghost w-full" onClick={() => setFields([...fields, { n: 'Поле', v: 'Значение' }])}>+ поле</button>
          <input className="input" value={footer} onChange={(e) => setFooter(e.target.value)} />
          <button className="btn btn-primary w-full" onClick={() => toast(`Эмбед отправлен в ${channel}`)}>Отправить от имени бота</button>
        </div>
        <div>
          <div className="mb-2 text-xs text-mist-400">Превью Discord</div>
          <div className="rounded-xl bg-[#313338] p-4">
            <div className="mb-2 flex items-center gap-2 text-sm">
              <img src="/mascot.jpg" alt="" className="h-8 w-8 rounded-full object-cover" />
              <span className="font-semibold text-white">NEXUS</span>
              <span className="rounded bg-[#5865F2] px-1 text-[10px] font-bold">BOT</span>
              <span className="text-[11px] text-white/40">сегодня в 14:22</span>
            </div>
            <div className="overflow-hidden rounded-md" style={{ borderLeft: `4px solid ${color}`, background: '#2b2d31' }}>
              <div className="p-3">
                <div className="text-xs text-white/60">{author}</div>
                <div className="mt-1 font-semibold text-white">{title}</div>
                <div className="mt-1 text-sm text-white/80">{desc}</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {fields.map((f, i) => (
                    <div key={i}>
                      <div className="text-xs font-semibold text-white">{f.n}</div>
                      <div className="text-xs text-white/70">{f.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-[11px] text-white/40">{footer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
