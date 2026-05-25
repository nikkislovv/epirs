import { useState } from 'react'
import { content } from '../../content'
import SectionHeading from '../ui/SectionHeading'

type Status = 'idle' | 'sending' | 'sent' | 'error'

interface ContactsSectionProps {
  id?: string
}

export default function ContactsSection({ id }: ContactsSectionProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', contact: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: content.web3formsKey,
          name: form.name,
          contact: form.contact,
          message: form.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id={id} className="bg-primary px-14 py-16">
      <div className="w-full">
        <SectionHeading>Контакты</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Ваше имя"
              value={form.name}
              onChange={handleChange}
              className="border border-black/20 rounded-lg px-4 py-3 text-sm font-['Inter'] bg-white focus:outline-none focus:border-accent transition-colors"
            />
            <input
              name="contact"
              type="text"
              required
              placeholder="Телефон или Email"
              value={form.contact}
              onChange={handleChange}
              className="border border-black/20 rounded-lg px-4 py-3 text-sm font-['Inter'] bg-white focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              placeholder="Сообщение"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="border border-black/20 rounded-lg px-4 py-3 text-sm font-['Inter'] bg-white focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-accent text-black font-['Inter'] font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60 self-start"
            >
              {status === 'sending' ? 'Отправка…' : 'Отправить'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-green-700 font-['Inter']">Спасибо! Мы свяжемся с вами.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 font-['Inter']">Произошла ошибка. Попробуйте снова.</p>
            )}
          </form>

          <div className="flex flex-col gap-4 text-sm font-['Inter']">
            <a href={`tel:${content.contacts.phone}`} className="hover:text-heading transition-colors">
              {content.contacts.phone}
            </a>
            <a href={`mailto:${content.contacts.email}`} className="hover:text-heading transition-colors">
              {content.contacts.email}
            </a>
            <a
              href={content.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-heading transition-colors"
            >
              Telegram: {content.contacts.telegram}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
