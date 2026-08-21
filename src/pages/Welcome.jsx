import { useState } from 'react'
import { useApp } from '../context.jsx'

export default function Welcome() {
  const { toast, server } = useApp()
  const [title, setTitle] = useState('Добро пожаловать в {server}')
  const [desc, setDesc] = useState('Привет, {user}! Тебе выпала роль Member. Прочитай #правила и возьми роли в #роли.')
  const [channel, setChannel] = useState('#общий')
  const [dm, setDm] = useState(true)
  const [img, setImg] = useState(true)

  const previewTitle = title.replace('{server}', server.name)
  const previewDesc = desc.replace('{user}', '@nova')

  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-mist-400">Приветствия</div>
        <h1 className="font-display text-2xl text-white">Вход и выход</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass space-y-3 rounded-2xl p-5">
          <label className="text-xs text-mist-400">Канал</label>
          <select className="input" value={channel} onChange={(e) => setChannel(e.target.value)}>
            {['#общий', '#приходы', '#логи'].map((c) => <option key={c}>{c}</option>)}
          </select>
          <label className="text-xs text-mist-400">Заголовок</label>
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label className="text-xs text-mist-400">Текст</label>
          <textarea className="input min-h-28" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <label className="flex items-center justify-between text-sm">
            Личное сообщение
            <input type="checkbox" checked={dm} onChange={(e) => setDm(e.target.checked)} />
          </label>
          <label className="flex items-center justify-between text-sm">
            Карточка с аватаром
            <input type="checkbox" checked={img} onChange={(e) => setImg(e.target.checked)} />
          </label>
          <button className="btn btn-primary w-full" onClick={() => toast('Приветствие сохранено')}>Сохранить</button>
        </div>
        <div>
          <div className="mb-2 text-xs text-mist-400">Превью в {channel}</div>
          <div className="discord-embed p-4">
            {img && <img src="/mascot.jpg" alt="" className="mb-3 h-28 w-full rounded-md object-cover" />}
            <div className="text-sm font-semibold text-white">{previewTitle}</div>
            <div className="mt-1 text-sm text-white/80">{previewDesc}</div>
            <div className="mt-3 text-[11px] text-white/40">Сегодня в 14:22 · NEXUS</div>
          </div>
          {dm && (
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-mist-300">
              DM: короткое приветствие с кнопкой «Правила» будет отправлено в личку.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
