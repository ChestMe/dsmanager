export const currentUser = {
  id: 'u1',
  name: 'Алекс Новиков',
  tag: 'novikov',
  avatar: 'АН',
  color: '#7c6cff',
  plan: 'Ultimate',
}

export const servers = [
  {
    id: 'astral',
    name: 'ASTRAL',
    icon: '/server-astral.png',
    members: 18432,
    online: 2914,
    boosts: 14,
    level: 2,
    region: 'Europe',
    created: '12 мар 2022',
    owner: 'Алекс Новиков',
    description: 'Игровое сообщество, ивенты, турниры и кланы.',
  },
  {
    id: 'neon',
    name: 'NEON CITY',
    icon: '/server-neon.jpg',
    members: 7201,
    online: 843,
    boosts: 7,
    level: 1,
    region: 'Europe',
    created: '4 авг 2023',
    owner: 'Мира Ким',
    description: 'Музыка, арт и ночные войсы.',
  },
  {
    id: 'void',
    name: 'VOID LAB',
    icon: '/server-void.jpg',
    members: 3120,
    online: 411,
    boosts: 3,
    level: 1,
    region: 'US East',
    created: '19 янв 2024',
    owner: 'Алекс Новиков',
    description: 'Закрытая лаборатория модов и разработчиков.',
  },
]

const palette = ['#7c6cff', '#2ee6ff', '#ff5ec8', '#34d399', '#fbbf24', '#fb7185', '#60a5fa', '#c084fc']

export const roles = [
  { id: 'r1', name: 'Owner', color: '#f43f5e', members: 1, hoist: true, mention: false, pos: 10, perms: ['ADMINISTRATOR'] },
  { id: 'r2', name: 'Admin', color: '#fb7185', members: 6, hoist: true, mention: true, pos: 9, perms: ['BAN', 'KICK', 'MANAGE_CHANNELS', 'MANAGE_ROLES'] },
  { id: 'r3', name: 'Moderator', color: '#38bdf8', members: 18, hoist: true, mention: true, pos: 8, perms: ['KICK', 'TIMEOUT', 'MANAGE_MESSAGES'] },
  { id: 'r4', name: 'NEXUS', color: '#7c6cff', members: 1, hoist: true, mention: false, pos: 7, perms: ['BOT'] },
  { id: 'r5', name: 'Booster', color: '#f472b6', members: 42, hoist: true, mention: false, pos: 6, perms: [] },
  { id: 'r6', name: 'VIP', color: '#fbbf24', members: 128, hoist: true, mention: false, pos: 5, perms: ['EMBED'] },
  { id: 'r7', name: 'Gamer', color: '#34d399', members: 2401, hoist: false, mention: true, pos: 4, perms: [] },
  { id: 'r8', name: 'Artist', color: '#c084fc', members: 317, hoist: false, mention: true, pos: 3, perms: [] },
  { id: 'r9', name: 'Muted', color: '#64748b', members: 9, hoist: false, mention: false, pos: 2, perms: [] },
  { id: 'r10', name: 'Member', color: '#94a3b8', members: 15510, hoist: false, mention: false, pos: 1, perms: [] },
]

export const members = [
  { id: 'm1', name: 'Алекс Новиков', tag: 'novikov', status: 'online', role: 'Owner', roleColor: '#f43f5e', joined: '12 мар 2022', msgs: 18420, voice: '412 ч', warns: 0, level: 84, xp: 91240, bot: false },
  { id: 'm2', name: 'Мира Ким', tag: 'mira', status: 'online', role: 'Admin', roleColor: '#fb7185', joined: '14 мар 2022', msgs: 12901, voice: '288 ч', warns: 0, level: 71, xp: 70412, bot: false },
  { id: 'm3', name: 'NEXUS', tag: 'nexus', status: 'online', role: 'NEXUS', roleColor: '#7c6cff', joined: '12 мар 2022', msgs: 0, voice: '—', warns: 0, level: 0, xp: 0, bot: true },
  { id: 'm4', name: 'Дэн Волков', tag: 'volk', status: 'idle', role: 'Moderator', roleColor: '#38bdf8', joined: '2 апр 2022', msgs: 8033, voice: '190 ч', warns: 0, level: 58, xp: 48110, bot: false },
  { id: 'm5', name: 'София Лит', tag: 'sofialit', status: 'online', role: 'VIP', roleColor: '#fbbf24', joined: '11 июн 2022', msgs: 6402, voice: '96 ч', warns: 0, level: 44, xp: 30112, bot: false },
  { id: 'm6', name: 'Кирилл ZX', tag: 'zx', status: 'dnd', role: 'Gamer', roleColor: '#34d399', joined: '28 июл 2022', msgs: 15220, voice: '540 ч', warns: 1, level: 66, xp: 61200, bot: false },
  { id: 'm7', name: 'Ева Морс', tag: 'mors', status: 'offline', role: 'Artist', roleColor: '#c084fc', joined: '3 сен 2022', msgs: 2104, voice: '22 ч', warns: 0, level: 21, xp: 8900, bot: false },
  { id: 'm8', name: 'Тимур Night', tag: 'night', status: 'online', role: 'Booster', roleColor: '#f472b6', joined: '19 окт 2022', msgs: 4330, voice: '150 ч', warns: 0, level: 39, xp: 24100, bot: false },
  { id: 'm9', name: 'Лера Pixel', tag: 'pixel', status: 'idle', role: 'Member', roleColor: '#94a3b8', joined: '5 янв 2023', msgs: 980, voice: '11 ч', warns: 0, level: 12, xp: 3100, bot: false },
  { id: 'm10', name: 'Макс Orbit', tag: 'orbit', status: 'online', role: 'Gamer', roleColor: '#34d399', joined: '22 фев 2023', msgs: 7112, voice: '201 ч', warns: 2, level: 47, xp: 33210, bot: false },
  { id: 'm11', name: 'Ника Frost', tag: 'frost', status: 'dnd', role: 'Moderator', roleColor: '#38bdf8', joined: '8 мар 2023', msgs: 5400, voice: '77 ч', warns: 0, level: 35, xp: 19880, bot: false },
  { id: 'm12', name: 'Олег Spark', tag: 'spark', status: 'offline', role: 'Member', roleColor: '#94a3b8', joined: '17 май 2023', msgs: 412, voice: '4 ч', warns: 3, level: 6, xp: 980, bot: false },
  { id: 'm13', name: 'Аня Wave', tag: 'wave', status: 'online', role: 'VIP', roleColor: '#fbbf24', joined: '1 июл 2023', msgs: 3888, voice: '64 ч', warns: 0, level: 29, xp: 15120, bot: false },
  { id: 'm14', name: 'Рома Null', tag: 'null', status: 'idle', role: 'Gamer', roleColor: '#34d399', joined: '14 авг 2023', msgs: 9201, voice: '310 ч', warns: 0, level: 52, xp: 40110, bot: false },
  { id: 'm15', name: 'Катя Bloom', tag: 'bloom', status: 'online', role: 'Artist', roleColor: '#c084fc', joined: '9 окт 2023', msgs: 1750, voice: '18 ч', warns: 0, level: 18, xp: 6400, bot: false },
  { id: 'm16', name: 'Илья Drift', tag: 'drift', status: 'offline', role: 'Member', roleColor: '#94a3b8', joined: '2 дек 2023', msgs: 220, voice: '1 ч', warns: 1, level: 4, xp: 410, bot: false },
  { id: 'm17', name: 'Яна Echo', tag: 'echo', status: 'online', role: 'Booster', roleColor: '#f472b6', joined: '21 янв 2024', msgs: 2601, voice: '88 ч', warns: 0, level: 24, xp: 11240, bot: false },
  { id: 'm18', name: 'Павел Arc', tag: 'arc', status: 'dnd', role: 'Gamer', roleColor: '#34d399', joined: '11 мар 2024', msgs: 5012, voice: '140 ч', warns: 0, level: 33, xp: 18770, bot: false },
]

export const channels = [
  { id: 'c1', type: 'category', name: 'ИНФО' },
  { id: 'c2', type: 'text', name: 'правила', msgs: 12, slow: 0, nsfw: false, cat: 'ИНФО' },
  { id: 'c3', type: 'text', name: 'анонсы', msgs: 184, slow: 0, nsfw: false, cat: 'ИНФО' },
  { id: 'c4', type: 'text', name: 'роли', msgs: 3, slow: 0, nsfw: false, cat: 'ИНФО' },
  { id: 'c5', type: 'category', name: 'ОБЩЕНИЕ' },
  { id: 'c6', type: 'text', name: 'общий', msgs: 241903, slow: 5, nsfw: false, cat: 'ОБЩЕНИЕ' },
  { id: 'c7', type: 'text', name: 'мемы', msgs: 88211, slow: 0, nsfw: false, cat: 'ОБЩЕНИЕ' },
  { id: 'c8', type: 'text', name: 'арт', msgs: 12044, slow: 0, nsfw: false, cat: 'ОБЩЕНИЕ' },
  { id: 'c9', type: 'forum', name: 'кланы', msgs: 890, slow: 0, nsfw: false, cat: 'ОБЩЕНИЕ' },
  { id: 'c10', type: 'category', name: 'ГОЛОС' },
  { id: 'c11', type: 'voice', name: 'Лобби', users: 24, bitrate: 96, cat: 'ГОЛОС' },
  { id: 'c12', type: 'voice', name: 'Дуо', users: 2, bitrate: 64, cat: 'ГОЛОС' },
  { id: 'c13', type: 'voice', name: 'Рейд 1', users: 8, bitrate: 96, cat: 'ГОЛОС' },
  { id: 'c14', type: 'voice', name: 'Музыка', users: 31, bitrate: 96, cat: 'ГОЛОС' },
  { id: 'c15', type: 'category', name: 'NEXUS' },
  { id: 'c16', type: 'text', name: 'логи', msgs: 40211, slow: 0, nsfw: false, cat: 'NEXUS' },
  { id: 'c17', type: 'text', name: 'тикеты', msgs: 1902, slow: 0, nsfw: false, cat: 'NEXUS' },
  { id: 'c18', type: 'text', name: 'уровни', msgs: 5601, slow: 0, nsfw: false, cat: 'NEXUS' },
]

export const cases = [
  { id: 1842, type: 'ban', user: 'toxic_fox', mod: 'Дэн Волков', reason: 'Токсичность / угрозы', date: '21 авг 2026, 14:22', duration: 'Permanent' },
  { id: 1841, type: 'timeout', user: 'Олег Spark', mod: 'Ника Frost', reason: 'Флуд в #общий', date: '21 авг 2026, 11:04', duration: '1 час' },
  { id: 1840, type: 'warn', user: 'Макс Orbit', mod: 'Дэн Волков', reason: 'Спойлеры без тега', date: '20 авг 2026, 22:18', duration: '—' },
  { id: 1839, type: 'kick', user: 'guest_99', mod: 'Мира Ким', reason: 'Реклама сторонних серверов', date: '20 авг 2026, 19:41', duration: '—' },
  { id: 1838, type: 'warn', user: 'Кирилл ZX', mod: 'Ника Frost', reason: 'Оффтоп в #анонсы', date: '20 авг 2026, 16:02', duration: '—' },
  { id: 1837, type: 'timeout', user: 'spammer_x', mod: 'NEXUS', reason: 'Автомод: массовые упоминания', date: '19 авг 2026, 23:55', duration: '24 часа' },
  { id: 1836, type: 'ban', user: 'raid_bot_3', mod: 'NEXUS', reason: 'Антирейд', date: '19 авг 2026, 23:54', duration: 'Permanent' },
  { id: 1835, type: 'unban', user: 'old_friend', mod: 'Алекс Новиков', reason: 'Апелляция принята', date: '18 авг 2026, 12:10', duration: '—' },
]

export const logs = [
  { t: '21 авг 14:22', cat: 'mod', text: 'Дэн Волков забанил toxic_fox — Токсичность / угрозы' },
  { t: '21 авг 14:08', cat: 'member', text: 'NovaLite присоединилась к серверу' },
  { t: '21 авг 13:51', cat: 'msg', text: 'Удалено 24 сообщения в #мемы (фильтр ссылок)' },
  { t: '21 авг 13:40', cat: 'voice', text: 'Кирилл ZX зашёл в Рейд 1' },
  { t: '21 авг 13:12', cat: 'role', text: 'Мира Ким выдала роль VIP → Аня Wave' },
  { t: '21 авг 12:44', cat: 'channel', text: 'Создан канал #ивент-лето' },
  { t: '21 авг 12:01', cat: 'bot', text: 'Автобэкап ролей выполнен' },
  { t: '21 авг 11:04', cat: 'mod', text: 'Ника Frost выдала таймаут Олег Spark на 1 час' },
  { t: '21 авг 10:22', cat: 'ticket', text: 'Открыт тикет #4412 от Лера Pixel' },
  { t: '21 авг 09:18', cat: 'level', text: 'Рома Null достиг 52 уровня' },
  { t: '21 авг 08:55', cat: 'member', text: 'ghost_77 покинул сервер' },
  { t: '20 авг 23:11', cat: 'giveaway', text: 'Розыгрыш Nitro закончен · победитель Яна Echo' },
]

export const tickets = [
  { id: 4412, user: 'Лера Pixel', topic: 'Не выдалась роль Gamer', status: 'open', prio: 'medium', agent: '—', created: '21 авг 10:22', msgs: 3 },
  { id: 4411, user: 'Макс Orbit', topic: 'Апелляция варна', status: 'pending', prio: 'high', agent: 'Дэн Волков', created: '20 авг 22:40', msgs: 8 },
  { id: 4408, user: 'Катя Bloom', topic: 'Как попасть в арт-клан?', status: 'open', prio: 'low', agent: 'Мира Ким', created: '20 авг 18:02', msgs: 5 },
  { id: 4402, user: 'Илья Drift', topic: 'Проблема с верификацией', status: 'closed', prio: 'medium', agent: 'Ника Frost', created: '19 авг 14:11', msgs: 12 },
  { id: 4398, user: 'Павел Arc', topic: 'Предложение: клановые войны', status: 'closed', prio: 'low', agent: 'Алекс Новиков', created: '18 авг 21:33', msgs: 16 },
]

export const giveaways = [
  { id: 'g1', prize: 'Discord Nitro 1 месяц', channel: '#розыгрыши', ends: '23 авг 21:00', entries: 842, winners: 1, status: 'live', host: 'Мира Ким' },
  { id: 'g2', prize: 'Steam — 1000 ₽', channel: '#розыгрыши', ends: '28 авг 18:00', entries: 1204, winners: 2, status: 'live', host: 'Алекс Новиков' },
  { id: 'g3', prize: 'VIP на 30 дней', channel: '#ивенты', ends: '15 авг 20:00', entries: 510, winners: 5, status: 'ended', host: 'NEXUS' },
]

export const commands = [
  { name: '/rank', desc: 'Карточка уровня участника', uses: 18420, module: 'Уровни', enabled: true },
  { name: '/ban', desc: 'Бан с причиной и DM', uses: 312, module: 'Модерация', enabled: true },
  { name: '/warn', desc: 'Выдать предупреждение', uses: 901, module: 'Модерация', enabled: true },
  { name: '/ticket', desc: 'Открыть тикет поддержки', uses: 2204, module: 'Тикеты', enabled: true },
  { name: '/giveaway', desc: 'Запустить розыгрыш', uses: 88, module: 'Ивенты', enabled: true },
  { name: '/embed', desc: 'Отправить эмбед от имени бота', uses: 140, module: 'Утилиты', enabled: true },
  { name: '/steal', desc: 'Украсть эмодзи (шутка)', uses: 6401, module: 'Фан', enabled: true },
  { name: '/clan', desc: 'Инфо о клане', uses: 1102, module: 'Кастом', enabled: true },
]

export const customCommands = [
  { trigger: '!ip', reply: 'play.astral.gg  ·  1.20.4', type: 'текст' },
  { trigger: '!правила', reply: 'Читай #правила — нарушение = варн.', type: 'эмбед' },
  { trigger: '!boost', reply: 'За буст — роль Booster и доступ к #vip.', type: 'эмбед' },
]

export const automodRules = [
  { id: 'a1', name: 'Ссылки-приглашения', desc: 'Блокировать discord.gg с чужих серверов', on: true, action: 'Удалить + варн' },
  { id: 'a2', name: 'Массовые упоминания', desc: 'Больше 5 упоминаний в сообщении', on: true, action: 'Таймаут 10 мин' },
  { id: 'a3', name: 'Капс', desc: 'Сообщения из 70%+ заглавных, длиннее 12 символов', on: true, action: 'Удалить' },
  { id: 'a4', name: 'Спам', desc: '5 одинаковых сообщений за 8 секунд', on: true, action: 'Таймаут 1 час' },
  { id: 'a5', name: 'Zalgo / невидимый текст', desc: 'Фильтр искажённого юникода', on: false, action: 'Удалить' },
  { id: 'a6', name: 'NSFW-вложения', desc: 'Скан вложений через Vision', on: true, action: 'Удалить + лог' },
  { id: 'a7', name: 'Антирейд', desc: 'Больше 8 входов за 10 секунд', on: true, action: 'Карантин + лок' },
  { id: 'a8', name: 'Слова-фильтр', desc: 'Чёрный список из 142 слов', on: true, action: 'Удалить + варн' },
]

export const hours = Array.from({ length: 24 }, (_, i) => {
  const base = [40, 28, 18, 12, 10, 14, 32, 70, 120, 160, 190, 210, 230, 250, 270, 310, 380, 460, 520, 490, 410, 300, 180, 90]
  return { h: `${String(i).padStart(2, '0')}:00`, msgs: base[i], voice: Math.round(base[i] * 0.35), joins: Math.max(1, Math.round(base[i] / 40)) }
})

export const week = [
  { d: 'Пн', members: 18102, msgs: 24100, voice: 910 },
  { d: 'Вт', members: 18140, msgs: 19880, voice: 770 },
  { d: 'Ср', members: 18201, msgs: 22110, voice: 840 },
  { d: 'Чт', members: 18255, msgs: 25440, voice: 980 },
  { d: 'Пт', members: 18310, msgs: 30120, voice: 1240 },
  { d: 'Сб', members: 18390, msgs: 38800, voice: 1680 },
  { d: 'Вс', members: 18432, msgs: 35210, voice: 1510 },
]

export const growth = [
  { m: 'Фев', n: 14210 }, { m: 'Мар', n: 14880 }, { m: 'Апр', n: 15320 },
  { m: 'Май', n: 15940 }, { m: 'Июн', n: 16410 }, { m: 'Июл', n: 17102 },
  { m: 'Авг', n: 18432 },
]

export const topChannels = [
  { name: '#общий', value: 42 },
  { name: '#мемы', value: 21 },
  { name: 'Музыка', value: 14 },
  { name: '#арт', value: 9 },
  { name: '#кланы', value: 8 },
  { name: 'Другое', value: 6 },
]

export const notifications = [
  { id: 1, title: 'Антирейд сработал', text: 'Заблокировано 11 аккаунтов за 8 секунд', time: '2 мин назад', type: 'alert' },
  { id: 2, title: 'Новый тикет #4412', text: 'Лера Pixel · роли', time: '18 мин назад', type: 'ticket' },
  { id: 3, title: 'Розыгрыш Nitro', text: 'Осталось 2 дня 6 часов', time: '1 ч назад', type: 'info' },
]

export const modules = [
  { key: 'mod', name: 'Модерация', on: true },
  { key: 'automod', name: 'Автомод', on: true },
  { key: 'welcome', name: 'Приветствия', on: true },
  { key: 'levels', name: 'Уровни', on: true },
  { key: 'tickets', name: 'Тикеты', on: true },
  { key: 'logs', name: 'Логи', on: true },
  { key: 'giveaways', name: 'Розыгрыши', on: true },
  { key: 'music', name: 'Музыка', on: false },
  { key: 'economy', name: 'Экономика', on: false },
  { key: 'starboard', name: 'Starboard', on: true },
  { key: 'reaction', name: 'Роли-реакции', on: true },
  { key: 'tempvoice', name: 'Временные войсы', on: true },
]

export const pal = palette

export function initials(name) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
