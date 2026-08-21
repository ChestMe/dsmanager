import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../ui.jsx'

export default function Login() {
  const nav = useNavigate()
  const [busy, setBusy] = useState(false)

  const go = () => {
    setBusy(true)
    setTimeout(() => nav('/app/servers'), 1400)
  }

  return (
    <div className="mesh grid min-h-screen place-items-center px-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#313338] shadow-glow">
        <div className="bg-[#5865F2] px-6 py-4">
          <Logo />
        </div>
        <div className="p-6">
          <h1 className="font-display text-xl text-white">Авторизация Discord</h1>
          <p className="mt-2 text-sm text-white/70">
            Приложение <span className="text-white">NEXUS</span> хочет получить доступ к вашему аккаунту
            <span className="text-white"> novikov</span>.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            {['Просматривать сервера, где вы админ', 'Управлять ролями и каналами', 'Читать аналитику сообщений', 'Действовать от имени бота NEXUS'].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-emerald-400">✓</span> {t}
              </li>
            ))}
          </ul>
          <button
            onClick={go}
            disabled={busy}
            className="mt-6 w-full rounded-xl bg-[#5865F2] py-3 text-sm font-semibold text-white hover:bg-[#4752c4] disabled:opacity-70"
          >
            {busy ? 'Подключаем бота…' : 'Авторизовать'}
          </button>
          <button onClick={() => nav('/')} className="mt-2 w-full py-2 text-sm text-white/50 hover:text-white">
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}
