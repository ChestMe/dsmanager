import { createContext, useContext, useMemo, useState } from 'react'
import { servers } from './data/mock.js'

const AppCtx = createContext(null)
export const useApp = () => useContext(AppCtx)

export function AppProvider({ children }) {
  const [serverId, setServerId] = useState('astral')
  const [toasts, setToasts] = useState([])
  const server = servers.find((s) => s.id === serverId) || servers[0]

  const toast = (text) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, text }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600)
  }

  const value = useMemo(() => ({ server, serverId, setServerId, toast }), [server, serverId])

  return (
    <AppCtx.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[90] space-y-2">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto rounded-xl border border-white/10 bg-ink-700 px-4 py-2 text-sm text-white shadow-glow">
            {t.text}
          </div>
        ))}
      </div>
    </AppCtx.Provider>
  )
}
