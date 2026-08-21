import { useState } from 'react'
import { roles as seed } from '../data/mock.js'
import { Toggle } from '../ui.jsx'
import { useApp } from '../context.jsx'

const allPerms = ['ADMINISTRATOR', 'BAN', 'KICK', 'TIMEOUT', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_MESSAGES', 'EMBED', 'BOT']

export default function Roles() {
  const { toast } = useApp()
  const [roles, setRoles] = useState(seed)
  const [sel, setSel] = useState(seed[2].id)
  const role = roles.find((r) => r.id === sel)

  const togglePerm = (p) => {
    setRoles((rs) => rs.map((r) => r.id !== sel ? r : {
      ...r,
      perms: r.perms.includes(p) ? r.perms.filter((x) => x !== p) : [...r.perms, p],
    }))
    toast('Права обновлены')
  }

  const patch = (key, val) => setRoles((rs) => rs.map((r) => r.id === sel ? { ...r, [key]: val } : r))

  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs uppercase tracking-widest text-mist-400">Роли</div>
        <h1 className="font-display text-2xl text-white">Иерархия и права</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="glass rounded-2xl p-2">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setSel(r.id)}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm ${sel === r.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
            >
              <span className="h-3 w-3 rounded-full" style={{ background: r.color }} />
              <span className="flex-1 text-left text-white">{r.name}</span>
              <span className="text-[11px] text-mist-400">{r.members}</span>
            </button>
          ))}
        </div>
        {role && (
          <div className="glass space-y-5 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={role.color}
                onChange={(e) => patch('color', e.target.value)}
                className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent"
              />
              <input className="input" value={role.name} onChange={(e) => patch('name', e.target.value)} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Показывать отдельно</span>
              <Toggle on={role.hoist} onClick={() => patch('hoist', !role.hoist)} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Упоминаемая</span>
              <Toggle on={role.mention} onClick={() => patch('mention', !role.mention)} />
            </div>
            <div>
              <div className="mb-2 text-xs uppercase tracking-widest text-mist-400">Права</div>
              <div className="grid gap-2 sm:grid-cols-2">
                {allPerms.map((p) => (
                  <button
                    key={p}
                    onClick={() => togglePerm(p)}
                    className={`rounded-xl border px-3 py-2 text-left text-xs ${role.perms.includes(p) ? 'border-violet-400/40 bg-violet-500/15 text-white' : 'border-white/10 text-mist-400'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
