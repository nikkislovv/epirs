import { Link } from 'react-router-dom'
import { content } from '../../content'

const clientName = content.meta.title.split('—')[0].trim()

export default function Navbar() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-gray-900 hover:text-primary transition-colors">
          {clientName}
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">О себе</button>
          <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Услуги</button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {content.hero.cta}
          </button>
        </div>
        <button
          onClick={() => scrollTo('contact')}
          className="sm:hidden text-sm font-medium text-primary hover:opacity-80 transition-opacity"
        >
          {content.hero.cta}
        </button>
      </nav>
    </header>
  )
}
