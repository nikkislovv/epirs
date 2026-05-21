import { content } from '../../content'

const clientName = content.meta.title.split('—')[0].trim()
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <span>© {year} {clientName}</span>
        <div className="flex flex-wrap justify-center gap-4">
          {content.contacts.email && (
            <a href={`mailto:${content.contacts.email}`} className="hover:text-primary transition-colors">
              {content.contacts.email}
            </a>
          )}
          {content.contacts.phone && (
            <a href={`tel:${content.contacts.phone}`} className="hover:text-primary transition-colors">
              {content.contacts.phone}
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
      </div>
    </footer>
  )
}
