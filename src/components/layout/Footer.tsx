import { content } from '../../content'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-black/10 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary">
        <span>© {year} ООО «ЭПИРС»</span>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={`tel:${content.contacts.phone}`} className="hover:text-black transition-colors">
            {content.contacts.phone}
          </a>
          <a href={`mailto:${content.contacts.email}`} className="hover:text-black transition-colors">
            {content.contacts.email}
          </a>
          <a
            href={content.contacts.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            {content.contacts.telegram}
          </a>
          <a
            href={content.contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            {content.contacts.instagram}
          </a>
        </div>
      </div>
    </footer>
  )
}
