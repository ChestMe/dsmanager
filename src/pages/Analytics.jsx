import { useState } from 'react'
import { AreaChart, Bars, Donut, StatCard } from '../ui.jsx'
import { hours, week, growth, topChannels } from '../data/mock.js'
import { Activity, UserPlus, Mic, MessageSquare } from 'lucide-react'

const ranges = ['24 часа', '7 дней', '30 дней']
const donut = topChannels.map((c, i) => ({
  ...c,
  color: ['#7c6cff', '#2ee6ff', '#ff5ec8', '#34d399', '#fbbf24', '#64748b'][i],
}))

export default function Analytics() {
  const [range, setRange] = useState('7 дней')
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Аналитика</div>
          <h1 className="font-display text-2xl text-white">Пульс сообщества</h1>
        </div>
        <div className="flex rounded-xl border border-white/10 bg-white/5 p-1">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded-lg px-3 py-1.5 text-xs ${range === r ? 'bg-white/10 text-white' : 'text-mist-400'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={UserPlus} label="Новые за период" value="312" delta="+18%" tone="violet" />
        <StatCard icon={Activity} label="Retention 7д" value="41%" delta="+2.1 п.п." tone="cyan" />
        <StatCard icon={MessageSquare} label="Сообщений" value="195 660" delta="+6%" tone="pink" />
        <StatCard icon={Mic} label="Часы войса" value="7 930" delta="+11%" tone="lime" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-2xl p-4">
          <h3 className="mb-2 text-sm font-semibold text-white">Рост базы</h3>
          <AreaChart data={growth} xKey="m" yKey="n" color="#2ee6ff" />
        </div>
        <div className="glass rounded-2xl p-4">
          <h3 className="mb-2 text-sm font-semibold text-white">Онлайн по часам</h3>
          <Bars data={hours.filter((_, i) => i % 2 === 0)} xKey="h" yKey="voice" color="#7c6cff" />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <h3 className="mb-4 text-sm font-semibold text-white">Где общаются</h3>
          <Donut items={donut} />
        </div>
        <div className="glass rounded-2xl p-5">
          <h3 className="mb-4 text-sm font-semibold text-white">Неделя</h3>
          <div className="overflow-hidden rounded-xl border border-white/5">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-xs text-mist-400">
                <tr>
                  <th className="px-3 py-2 text-left">День</th>
                  <th className="px-3 py-2 text-right">Участники</th>
                  <th className="px-3 py-2 text-right">Сообщения</th>
                  <th className="px-3 py-2 text-right">Войс</th>
                </tr>
              </thead>
              <tbody>
                {week.map((w) => (
                  <tr key={w.d} className="border-t border-white/5">
                    <td className="px-3 py-2 text-white">{w.d}</td>
                    <td className="px-3 py-2 text-right">{w.members.toLocaleString('ru-RU')}</td>
                    <td className="px-3 py-2 text-right">{w.msgs.toLocaleString('ru-RU')}</td>
                    <td className="px-3 py-2 text-right">{w.voice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
