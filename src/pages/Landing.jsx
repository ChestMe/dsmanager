import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Activity,
  Shield,
  Ticket,
  BarChart3,
  Sparkles,
  Zap,
  Bot,
  Users,
  Gift,
  MessageSquare,
  Check,
  ChevronDown,
  Star,
  Play,
} from 'lucide-react'
import { Logo } from '../ui.jsx'

const features = [
  { icon: BarChart3, title: 'Живая аналитика', text: 'Онлайн, сообщения, войсы, Retention и теплокарты по часам. Видно, где живёт сообщество.' },
  { icon: Shield, title: 'Модерация и автомод', text: 'Варны, баны, антирейд, фильтр ссылок и NSFW. Кейсы как в профессиональной службе поддержки.' },
  { icon: Ticket, title: 'Тикеты', text: 'Очередь, приоритеты, назначение модераторов и закрытие с логом. Без хаоса в ЛС.' },
  { icon: Users, title: 'Участники и роли', text: 'Поиск, массовые действия, иерархия ролей и права — как в Discord, только удобнее.' },
  { icon: Gift, title: 'Розыгрыши и ивенты', text: 'Nitro, ключи, VIP. Честный рандом, требования и автопубликация победителей.' },
  { icon: MessageSquare, title: 'Эмбеды и команды', text: 'Конструктор сообщений бота, кастомные слэш-команды и автоответы за пару кликов.' },
]

const modules = [
  'Автомод', 'Логи', 'Приветствия', 'Уровни XP', 'Тикеты', 'Розыгрыши',
  'Роли-реакции', 'Временные войсы', 'Starboard', 'Музыка', 'Экономика', 'Антирейд',
]

const plans = [
  {
    name: 'Starter',
    price: '0',
    period: 'навсегда',
    desc: 'Для маленьких серверов, которые только стартуют.',
    items: ['1 сервер', 'Базовая модерация', 'Приветствия', 'До 5 кастомных команд', 'Логи 7 дней'],
  },
  {
    name: 'Pro',
    price: '499',
    period: '₽ / мес',
    desc: 'Аналитика и автоматизация для растущих сообществ.',
    items: ['5 серверов', 'Полный автомод', 'Аналитика 90 дней', 'Тикеты и розыгрыши', 'Уровни и эмбеды', 'Приоритет-очередь'],
    featured: true,
  },
  {
    name: 'Ultimate',
    price: '1 290',
    period: '₽ / мес',
    desc: 'Для сетей серверов и команд модерации.',
    items: ['Безлимит серверов', 'Антирейд + Vision NSFW', 'White-label бот', 'API и вебхуки', 'SLA 99.9%', 'Персональный саппорт'],
  },
]

const faqs = [
  { q: 'Это настоящий Discord-бот?', a: 'NEXUS подключается через OAuth Discord и приглашается на сервер одной кнопкой. Панель управляет живым ботом: модерация, логи, команды и аналитика синхронизируются в реальном времени.' },
  { q: 'Нужны права администратора?', a: 'Для полной работы — да. Можно выдать только нужные интенты: модерация, сообщения, войсы. Права настраиваются ролью NEXUS.' },
  { q: 'Данные участников в безопасности?', a: 'Храним минимум: ID, роли, агрегаты сообщений. Нет архива переписок. Можно включить автоудаление логов через 7/30/90 дней.' },
  { q: 'Можно self-host?', a: 'На тарифе Ultimate доступен white-label и on-prem образ. Остальные тарифы работают в облаке NEXUS.' },
]

const quotes = [
  { name: 'Мира Ким', role: 'Админ NEON CITY · 7к', text: 'Закрыли рейд за 9 секунд и даже не проснулись. Автомод NEXUS — это как ещё один старший модер, который не устаёт.' },
  { name: 'Кирилл ZX', role: 'Овнер ASTRAL · 18к', text: 'Аналитика показала, что 40% активности в войсе Музыка. Сделали ивенты под это — бусты выросли в два раза.' },
  { name: 'София Лит', role: 'Community lead', text: 'Тикеты наконец не теряются. Модеры видят очередь, я вижу SLA. Выглядит как продукт, а не как Excel в Discord.' },
]

export default function Landing() {
  const [openFaq, setOpenFaq] = useState(0)
  const sparks = useMemo(
    () => Array.from({ length: 18 }, (_, i) => ({
      id: i,
      l: `${(i * 17) % 100}%`,
      t: `${(i * 29) % 80}%`,
      d: `${(i % 6) + 3}s`,
    })),
    [],
  )

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900 text-mist-100 mesh">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
      {sparks.map((s) => (
        <span
          key={s.id}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-cyan-300/70"
          style={{ left: s.l, top: s.t, animation: `floaty ${s.d} ease-in-out infinite` }}
        />
      ))}

      <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-900/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-mist-300 md:flex">
            <a href="#features" className="hover:text-white">Возможности</a>
            <a href="#modules" className="hover:text-white">Модули</a>
            <a href="#pricing" className="hover:text-white">Тарифы</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn btn-ghost hidden sm:inline-flex">Войти</Link>
            <Link to="/login" className="btn btn-primary">
              Открыть панель <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <div className="chip mb-5 bg-white/5 text-cyan-200">
            <Sparkles size={12} /> Discord-бот нового поколения
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.15] text-white md:text-6xl">
            Сервер под контролем.
            <span className="block bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Без хаоса.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mist-300 md:text-lg">
            NEXUS — панель управления Discord: аналитика, модерация, тикеты, уровни и 40+ модулей.
            Один бот. Одна панель. Целое сообщество.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/login" className="btn btn-primary px-5 py-3">
              <Play size={16} /> Войти через Discord
            </Link>
            <a href="#features" className="btn btn-ghost px-5 py-3">Смотреть возможности</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-mist-400">
            <div><span className="font-display text-lg text-white">12 400+</span><div>серверов</div></div>
            <div className="h-8 w-px bg-white/10" />
            <div><span className="font-display text-lg text-white">4.2 млн</span><div>участников</div></div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-1"><Star size={14} className="text-amber-300" /><span className="font-display text-lg text-white">4.9</span><div className="ml-1">рейтинг</div></div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-violet-600/20 blur-3xl" />
          <img src="/mascot.jpg" alt="NEXUS" className="relative z-10 mx-auto w-[88%] max-w-lg floaty mix-blend-lighten drop-shadow-2xl" />
          <div className="absolute left-0 top-10 z-20 hidden w-44 rounded-2xl border border-white/10 bg-ink-800/80 p-3 text-xs shadow-glow backdrop-blur md:block">
            <div className="text-mist-400">Онлайн сейчас</div>
            <div className="mt-1 font-display text-xl text-white">2 914</div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
            </div>
          </div>
          <div className="absolute bottom-8 right-0 z-20 hidden w-52 rounded-2xl border border-white/10 bg-ink-800/80 p-3 text-xs shadow-glow-cyan backdrop-blur md:block">
            <div className="flex items-center gap-2 text-emerald-300"><Shield size={14} /> Антирейд</div>
            <div className="mt-1 text-mist-200">11 аккаунтов в карантине · 8 сек</div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden border-y border-white/5 bg-ink-850/60 py-4">
        <div className="marquee flex w-[200%] gap-10 text-sm text-mist-400">
          {[...modules, ...modules, ...modules, ...modules].map((m, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-white/80">{m}</span>
              <span className="text-violet-400">◆</span>
            </span>
          ))}
        </div>
      </div>

      <section id="features" className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <div className="chip bg-violet-500/10 text-violet-200">Панель</div>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Всё, чем обычно занимается целая команда модеров.</h2>
          <p className="mt-3 text-mist-300">Не набор разрозненных ботов. Единый контур: от входа участника до апелляции бана.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet-400/30">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/10 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-lg text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 md:grid-cols-2">
        <div className="relative">
          <img src="/hero-orb.jpg" alt="" className="mx-auto w-[85%] mix-blend-lighten drop-shadow-2xl" />
        </div>
        <div>
          <div className="chip bg-cyan-400/10 text-cyan-200"><Activity size={12} /> Realtime</div>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Сервер как приборная панель.</h2>
          <ul className="mt-6 space-y-4 text-sm text-mist-200">
            {[
              'Пики онлайна, сообщения по часам, топ каналов и войсов.',
              'Кейсы модерации с историей, апелляциями и сроками.',
              'Конструктор эмбедов с превью как в клиенте Discord.',
              'Модули включаются тумблером — без перезапуска бота.',
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check size={12} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid md:grid-cols-3">
            {[
              { img: '/module-mod.jpg', title: 'Щит', text: 'Автомод, антирейд, варны и баны в одном журнале.' },
              { img: '/module-chart.jpg', title: 'Пульс', text: 'Графики роста, активности и удержания участников.' },
              { img: '/module-ticket.jpg', title: 'Саппорт', text: 'Тикеты с приоритетами и назначением агентов.' },
            ].map((c) => (
              <div key={c.title} className="border-white/5 p-8 md:border-r last:border-0">
                <img src={c.img} alt="" className="h-40 w-full object-contain mix-blend-lighten" />
                <h3 className="mt-4 font-display text-xl text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-mist-300">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="font-display text-3xl text-white">Говорят те, кто уже не модерит вручную.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="glass rounded-2xl p-5">
              <div className="flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-mist-200">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <div className="font-semibold text-white">{q.name}</div>
                <div className="text-xs text-mist-400">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="text-center">
          <div className="chip mx-auto bg-white/5 text-mist-200"><Zap size={12} /> Тарифы</div>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">Прозрачно. Без скрытых слотов.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-6 ${p.featured ? 'relative bg-gradient-to-b from-violet-600/25 to-ink-800 ring-1 ring-violet-400/40 shadow-glow' : 'glass'}`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-gradient-to-r from-violet-400 to-cyan-300 text-ink-900">
                  Популярный
                </div>
              )}
              <div className="text-sm text-mist-300">{p.name}</div>
              <div className="mt-2 font-display text-4xl text-white">
                {p.price}
                <span className="ml-1 text-sm font-sans font-medium text-mist-400">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-mist-300">{p.desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-mist-200">
                    <Check size={14} className="text-cyan-300" /> {it}
                  </li>
                ))}
              </ul>
              <Link to="/login" className={`btn mt-7 w-full ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>
                Выбрать {p.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-5 pb-24">
        <h2 className="text-center font-display text-3xl text-white">Вопросы</h2>
        <div className="mt-8 space-y-2">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              className="glass w-full rounded-2xl p-4 text-left"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-white">{f.q}</span>
                <ChevronDown size={16} className={`text-mist-400 transition ${openFaq === i ? 'rotate-180' : ''}`} />
              </div>
              {openFaq === i && <p className="mt-3 text-sm leading-relaxed text-mist-300">{f.a}</p>}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-700/40 via-ink-800 to-cyan-700/20 p-10 text-center">
          <Bot className="mx-auto text-white" />
          <h2 className="mt-3 font-display text-3xl text-white">Пригласите NEXUS. Заберите контроль.</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-mist-300">Демо-панель уже наполнена живыми данными сервера ASTRAL. Никакой регистрации — просто войдите.</p>
          <Link to="/app/servers" className="btn btn-primary mx-auto mt-6 px-6 py-3">
            Открыть демо-панель <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-xs text-mist-400 md:flex-row">
          <Logo />
          <div>© 2026 NEXUS · панель управления Discord · демо-интерфейс</div>
          <div className="flex gap-4">
            <a href="#features">Возможности</a>
            <a href="#pricing">Тарифы</a>
            <Link to="/login">Панель</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
