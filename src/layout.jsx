import { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Shield,
  Hash,
  Crown,
  Bot,
  Terminal,
  Hand,
  ScrollText,
  Ticket,
  Gift,
  Puzzle,
  Trophy,
  Settings,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  Menu,
  X,
  Command,
} from 'lucide-react'
import { Logo, Avatar } from './ui.jsx'
import { currentUser, notifications, servers } from './data/mock.js'
import { useApp } from './context.jsx'

const nav = [
  { to: 'overview', label: 'Обзор', icon: LayoutDashboard },
  { to: 'analytics', label: 'Аналитика', icon: BarChart3 },
  { to: 'members', label: 'Участники', icon: Users },
  { to: 'moderation', label: 'Модерация', icon: Shield },
  { to: 'channels', label: 'Каналы', icon: Hash },
  { to: 'roles', label: 'Роли', icon: Crown },
  { to: 'automod', label: 'Автомод', icon: Bot },
  { to: 'commands', label: 'Команды', icon: Terminal },
  { to: 'welcome', label: 'Приветствия', icon: Hand },
  { to: 'logs', label: 'Логи', icon: ScrollText },
  { to: 'tickets', label: 'Тикеты', icon: Ticket },
  { to: 'giveaways', label: 'Розыгрыши', icon: Gift },
  { to: 'embeds', label: 'Эмбеды', icon: Puzzle },
  { to: 'levels', label: 'Уровни', icon: Trophy },
  { to: 'settings', label: 'Настройки', icon: Settings },
]

export default function Layout() {
  const { server, setServerId, toast } = useApp()
  const [open, setOpen] = useState(false)
  const [bell, setBell] = useState(false)
  const [picker, setPicker] = useState(false)
  const [cmd, setCmd] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  const filtered = nav.filter((n) => n.label.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCmd(true)
      }
      if (e.key === 'Escape') setCmd(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="flex min-h-screen bg-ink-900 text-mist-100">
      <aside className={`fixed inset-y-0 left-0 z-40 w-[260px] border-r border-white/5 bg-ink-850/95 backdrop-blur-xl transition md:static md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between px-4">
          <Logo />
          <button className="md:hidden" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <button
          onClick={() => setPicker((v) => !v)}
          className="mx-3 mb-3 flex w-[calc(100%-24px)] items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 text-left hover:bg-white/10"
        >
          <img src={server.icon} alt="" className="h-9 w-9 rounded-lg object-cover" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold text-white">{server.name}</div>
            <div className="text-[11px] text-mist-400">{server.members.toLocaleString('ru-RU')} участников</div>
          </div>
          <ChevronDown size={14} className="text-mist-400" />
        </button>
        {picker && (
          <div className="mx-3 mb-3 overflow-hidden rounded-xl border border-white/10 bg-ink-800">
            {servers.map((s) => (
              <button
                key={s.id}
                onClick={() => { setServerId(s.id); setPicker(false); toast(`Сервер ${s.name}`) }}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-white/5"
              >
                <img src={s.icon} alt="" className="h-6 w-6 rounded object-cover" />
                {s.name}
              </button>
            ))}
          </div>
        )}
        <nav className="h-[calc(100vh-170px)] space-y-0.5 overflow-y-auto px-2 pb-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={`/app/${n.to}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition ${
                  isActive ? 'bg-gradient-to-r from-violet-500/25 to-cyan-400/10 text-white' : 'text-mist-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <n.icon size={16} />
              {n.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-white/5 bg-ink-900/80 px-4 backdrop-blur-xl">
          <button className="rounded-lg p-2 hover:bg-white/5 md:hidden" onClick={() => setOpen(true)}>
            <Menu size={18} />
          </button>
          <button
            onClick={() => setCmd(true)}
            className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-mist-400 hover:border-white/20"
          >
            <Search size={14} />
            <span className="truncate">Поиск по панели…</span>
            <span className="ml-auto hidden items-center gap-1 rounded-md border border-white/10 px-1.5 py-0.5 text-[10px] text-mist-400 sm:flex">
              <Command size={10} />K
            </span>
          </button>
          <div className="relative">
            <button onClick={() => setBell((v) => !v)} className="relative rounded-xl p-2 hover:bg-white/5">
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-400" />
            </button>
            {bell && (
              <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-glow">
                <div className="border-b border-white/5 px-4 py-3 text-sm font-semibold text-white">Уведомления</div>
                {notifications.map((n) => (
                  <div key={n.id} className="border-b border-white/5 px-4 py-3 last:border-0">
                    <div className="text-sm text-white">{n.title}</div>
                    <div className="text-xs text-mist-400">{n.text}</div>
                    <div className="mt-1 text-[11px] text-mist-500">{n.time}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => navigate('/')} className="hidden items-center gap-2 rounded-xl px-2 py-1 hover:bg-white/5 sm:flex">
            <Avatar name={currentUser.name} color={currentUser.color} size={32} />
            <div className="text-left">
              <div className="text-xs font-semibold text-white">{currentUser.name}</div>
              <div className="text-[10px] text-mist-400">{currentUser.plan}</div>
            </div>
            <LogOut size={14} className="text-mist-400" />
          </button>
        </header>
        <main className="page-enter flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      {cmd && (
        <div className="fixed inset-0 z-50 grid place-items-start justify-center bg-black/60 p-4 pt-[12vh]" onClick={() => setCmd(false)}>
          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-glow" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 border-b border-white/10 px-4">
              <Search size={16} className="text-mist-400" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Перейти к разделу…"
                className="w-full bg-transparent py-3 text-sm outline-none"
              />
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {filtered.map((n) => (
                <button
                  key={n.to}
                  onClick={() => { navigate(`/app/${n.to}`); setCmd(false); setQ('') }}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-white/5"
                >
                  <n.icon size={14} /> {n.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
