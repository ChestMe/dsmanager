import { useState } from 'react'
import { commands, customCommands as seed } from '../data/mock.js'
import { Modal, Toggle } from '../ui.jsx'
import { useApp } from '../context.jsx'
import { Plus } from 'lucide-react'

export default function Commands() {
  const { toast } = useApp()
  const [slash, setSlash] = useState(commands)
  const [custom, setCustom] = useState(seed)
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ trigger: '', reply: '', type: 'текст' })

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-mist-400">Команды</div>
          <h1 className="font-display text-2xl text-white">Слэш и автоответы</h1>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}><Plus size={16} /> Автоответ</button>
      </div>

      <div className="glass overflow-hidden rounded-2xl">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-xs text-mist-400">
            <tr>
              <th className="px-4 py-3 text-left">Команда</th>
              <th className="hidden px-4 py-3 text-left md:table-cell">Модуль</th>
              <th className="px-4 py-3 text-right">Использований</th>
              <th className="px-4 py-3 text-right">Вкл</th>
            </tr>
          </thead>
          <tbody>
            {slash.map((c) => (
              <tr key={c.name} className="border-t border-white/5">
                <td className="px-4 py-2.5">
                  <div className="font-mono text-white">{c.name}</div>
                  <div className="text-xs text-mist-400">{c.desc}</div>
                </td>
                <td className="hidden px-4 py-2.5 text-mist-300 md:table-cell">{c.module}</td>
                <td className="px-4 py-2.5 text-right">{c.uses.toLocaleString('ru-RU')}</td>
                <td className="px-4 py-2.5">
                  <div className="flex justify-end">
                    <Toggle on={c.enabled} onClick={() => setSlash((xs) => xs.map((x) => x.name === c.name ? { ...x, enabled: !x.enabled } : x))} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-white">Кастомные автоответы</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {custom.map((c) => (
            <div key={c.trigger} className="glass rounded-2xl p-4">
              <div className="font-mono text-cyan-300">{c.trigger}</div>
              <div className="mt-2 text-sm text-mist-200">{c.reply}</div>
              <div className="mt-3 chip bg-white/5 text-mist-300">{c.type}</div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Новый автоответ">
        <div className="space-y-3">
          <input className="input" placeholder="Триггер, например !ip" value={form.trigger} onChange={(e) => setForm({ ...form, trigger: e.target.value })} />
          <textarea className="input min-h-24" placeholder="Ответ" value={form.reply} onChange={(e) => setForm({ ...form, reply: e.target.value })} />
          <select className="input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option>текст</option>
            <option>эмбед</option>
          </select>
          <button
            className="btn btn-primary w-full"
            onClick={() => { setCustom([form, ...custom]); setOpen(false); toast('Автоответ добавлен') }}
            disabled={!form.trigger || !form.reply}
          >
            Сохранить
          </button>
        </div>
      </Modal>
    </div>
  )
}
