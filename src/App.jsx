import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context.jsx'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Servers from './pages/Servers.jsx'
import Layout from './layout.jsx'
import Overview from './pages/Overview.jsx'
import Analytics from './pages/Analytics.jsx'
import Members from './pages/Members.jsx'
import Moderation from './pages/Moderation.jsx'
import Channels from './pages/Channels.jsx'
import Roles from './pages/Roles.jsx'
import Automod from './pages/Automod.jsx'
import Commands from './pages/Commands.jsx'
import Welcome from './pages/Welcome.jsx'
import Logs from './pages/Logs.jsx'
import Tickets from './pages/Tickets.jsx'
import Giveaways from './pages/Giveaways.jsx'
import Embeds from './pages/Embeds.jsx'
import Levels from './pages/Levels.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  const loc = useLocation()
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app/servers" element={<Servers />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="members" element={<Members />} />
          <Route path="moderation" element={<Moderation />} />
          <Route path="channels" element={<Channels />} />
          <Route path="roles" element={<Roles />} />
          <Route path="automod" element={<Automod />} />
          <Route path="commands" element={<Commands />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="logs" element={<Logs />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="giveaways" element={<Giveaways />} />
          <Route path="embeds" element={<Embeds />} />
          <Route path="levels" element={<Levels />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to={loc.pathname.startsWith('/app') ? '/app/overview' : '/'} replace />} />
      </Routes>
    </AppProvider>
  )
}
