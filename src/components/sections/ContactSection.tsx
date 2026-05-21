import { useState } from 'react'
import { content } from '../../content'
import SectionWrapper from '../ui/SectionWrapper'
import Button from '../ui/Button'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactSection() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors'

  return (
    <SectionWrapper id="contact" className="bg-gray-50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Связаться</h2>
        <p className="text-gray-500 mb-8">Напишите — отвечу в течение дня.</p>

        {status === 'sent' ? (
          <p className="text-primary font-medium py-4">Спасибо! Скоро свяжусь с вами.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value={content.web3formsKey} />
            <input name="name" type="text" placeholder="Ваше имя" required className={inputClass} />
            <input name="contact" type="text" placeholder="Телефон или email" required className={inputClass} />
            <textarea name="message" placeholder="Сообщение" rows={4} className={`${inputClass} resize-none`} />
            <Button type="submit" disabled={status === 'sending'} className="w-full justify-center">
              {status === 'sending' ? 'Отправляем...' : 'Отправить'}
            </Button>
            {status === 'error' && (
              <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
            )}
          </form>
        )}

        {(content.contacts.phone || content.contacts.email || content.contacts.telegram) && (
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm text-gray-500">
            {content.contacts.phone && (
              <a href={`tel:${content.contacts.phone}`} className="hover:text-primary transition-colors">
                {content.contacts.phone}
              </a>
            )}
            {content.contacts.email && (
              <a href={`mailto:${content.contacts.email}`} className="hover:text-primary transition-colors">
                {content.contacts.email}
              </a>
            )}
            {content.contacts.telegram && (
              <a
                href={`https://t.me/${content.contacts.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {content.contacts.telegram}
              </a>
            )}
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
