import { Activity, Users, MessageSquare, Mic, ShieldAlert, Ticket, Gift, ArrowUpRight } from 'lucide-react'
import { StatCard, AreaChart, Bars } from '../ui.jsx'
import { hours, week, logs, tickets, giveaways, cases } from '../data/mock.js'
import { useApp } from '../context.jsx'

export default function Overview() {
  const { server } = useApp()
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Обзор</div>
          <h1 className="font-display text-2xl text-white">{server.name}</h1>
          <p className="text-sm text-mist-400">{server.description}</p>
        </div>
        <div className="chip bg-emerald-400/10 text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> бот онлайн · 18 мс
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} label="Участники" value={server.members.toLocaleString('ru-RU')} delta="+124 за 7 дней" tone="violet" />
        <StatCard icon={Activity} label="Онлайн" value={server.online.toLocaleString('ru-RU')} delta="16% от базы" tone="cyan" />
        <StatCard icon={MessageSquare} label="Сообщения / 24ч" value="12 480" delta="+8.4%" tone="pink" />
        <StatCard icon={Mic} label="Войс сейчас" value="65" delta="4 канала" tone="lime" />
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="glass rounded-2xl p-4 xl:col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Активность за сутки</h3>
            <span className="text-xs text-mist-400">сообщения</span>
          </div>
          <AreaChart data={hours} xKey="h" yKey="msgs" color="#7c6cff" height={220} />
        </div>
        <div className="glass rounded-2xl p-4">
          <h3 className="mb-2 text-sm font-semibold text-white">Сообщения по дням</h3>
          <Bars data={week} xKey="d" yKey="msgs" color="#2ee6ff" height={220} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="glass rounded-2xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Последние кейсы</h3>
            <ShieldAlert size={16} className="text-rose-300" />
          </div>
          <div className="space-y-2">
            {cases.slice(0, 5).map((c) => (
              <div key={c.id} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-xs">
                <div>
                  <span className="font-semibold text-white">#{c.id}</span>
                  <span className="ml-2 text-mist-300">{c.user}</span>
                  <div className="text-mist-400">{c.reason}</div>
                </div>
                <span className={`chip ${c.type === 'ban' ? 'bg-rose-500/15 text-rose-200' : c.type === 'warn' ? 'bg-amber-400/15 text-amber-200' : 'bg-sky-400/15 text-sky-200'}`}>
                  {c.type}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Лента</h3>
            <ArrowUpRight size={16} className="text-mist-400" />
          </div>
          <div className="space-y-3">
            {logs.slice(0, 6).map((l, i) => (
              <div key={i} className="flex gap-3 text-xs">
                <div className="w-16 shrink-0 text-mist-500">{l.t.split(' ')[1]}</div>
                <div className="text-mist-200">{l.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white"><Ticket size={16} /> Открытые тикеты</div>
            {tickets.filter((t) => t.status !== 'closed').map((t) => (
              <div key={t.id} className="mt-2 rounded-xl bg-white/5 px-3 py-2 text-xs">
                <div className="text-white">#{t.id} · {t.topic}</div>
                <div className="text-mist-400">{t.user} · {t.prio}</div>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white"><Gift size={16} /> Живые розыгрыши</div>
            {giveaways.filter((g) => g.status === 'live').map((g) => (
              <div key={g.id} className="mt-2 rounded-xl bg-white/5 px-3 py-2 text-xs">
                <div className="text-white">{g.prize}</div>
                <div className="text-mist-400">{g.entries} участников · до {g.ends}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
