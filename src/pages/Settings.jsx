import { useState } from 'react'
import { modules as seed } from '../data/mock.js'
import { Toggle } from '../ui.jsx'
import { useApp } from '../context.jsx'

export default function Settings() {
  const { toast, server } = useApp()
  const [mods, setMods] = useState(seed)
  const [prefix, setPrefix] = useState('!')
  const [lang, setLang] = useState('Русский')
  const [tz, setTz] = useState('Europe/Moscow')
  const [locale, setLocale] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-widest text-mist-400">Настройки</div>
        <h1 className="font-display text-2xl text-white">Бот и модули</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass space-y-4 rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <img src={server.icon} alt="" className="h-12 w-12 rounded-xl object-cover" />
            <div>
              <div className="font-semibold text-white">{server.name}</div>
              <div className="text-xs text-mist-400">владелец {server.owner} · {server.created}</div>
            </div>
          </div>
          <div>
            <div className="text-xs text-mist-400">Префикс</div>
            <input className="input mt-1" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
          </div>
          <div>
            <div className="text-xs text-mist-400">Язык панели</div>
            <select className="input mt-1" value={lang} onChange={(e) => setLang(e.target.value)}>
              <option>Русский</option>
              <option>English</option>
            </select>
          </div>
          <div>
            <div className="text-xs text-mist-400">Часовой пояс</div>
            <select className="input mt-1" value={tz} onChange={(e) => setTz(e.target.value)}>
              <option>Europe/Moscow</option>
              <option>Europe/Kyiv</option>
              <option>UTC</option>
            </select>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Локализация команд</span>
            <Toggle on={locale} onClick={() => setLocale(!locale)} />
          </div>
          <button className="btn btn-primary w-full" onClick={() => toast('Настройки сохранены')}>Сохранить</button>
        </div>
        <div className="glass rounded-2xl p-5">
          <h3 className="mb-3 text-sm font-semibold text-white">Модули</h3>
          <div className="space-y-2">
            {mods.map((m) => (
              <div key={m.key} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-sm">
                <span>{m.name}</span>
                <Toggle
                  on={m.on}
                  onClick={() => {
                    setMods((xs) => xs.map((x) => x.key === m.key ? { ...x, on: !x.on } : x))
                    toast(`${m.name} ${m.on ? 'выключен' : 'включён'}`)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
