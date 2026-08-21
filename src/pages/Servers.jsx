import { useNavigate } from 'react-router-dom'
import { ArrowRight, Plus, Shield } from 'lucide-react'
import { Logo } from '../ui.jsx'
import { servers, currentUser } from '../data/mock.js'
import { useApp } from '../context.jsx'

export default function Servers() {
  const nav = useNavigate()
  const { setServerId } = useApp()

  return (
    <div className="mesh min-h-screen">
      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="text-sm text-mist-400">как {currentUser.name}</div>
        </div>
        <h1 className="mt-12 font-display text-3xl text-white">Выберите сервер</h1>
        <p className="mt-2 text-sm text-mist-300">NEXUS уже стоит на этих гильдиях. Нажмите, чтобы открыть панель.</p>
        <div className="mt-8 grid gap-4">
          {servers.map((s) => (
            <button
              key={s.id}
              onClick={() => { setServerId(s.id); nav('/app/overview') }}
              className="glass group flex items-center gap-4 rounded-2xl p-4 text-left transition hover:-translate-y-0.5 hover:border-violet-400/30"
            >
              <img src={s.icon} alt="" className="h-16 w-16 rounded-xl object-cover" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="font-display text-lg text-white">{s.name}</div>
                  <span className="chip bg-fuchsia-500/15 text-fuchsia-200">Boost {s.level}</span>
                </div>
                <div className="mt-1 text-sm text-mist-400">{s.description}</div>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-mist-400">
                  <span>{s.members.toLocaleString('ru-RU')} участников</span>
                  <span className="text-emerald-300">{s.online.toLocaleString('ru-RU')} онлайн</span>
                  <span>{s.region}</span>
                </div>
              </div>
              <ArrowRight className="text-mist-500 group-hover:text-white" />
            </button>
          ))}
          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 p-4 text-sm text-mist-400">
            <div className="grid h-16 w-16 place-items-center rounded-xl bg-white/5">
              <Plus />
            </div>
            Пригласить NEXUS на новый сервер
            <span className="ml-auto chip bg-white/5"><Shield size={12} /> OAuth Discord</span>
          </div>
        </div>
      </div>
    </div>
  )
}
