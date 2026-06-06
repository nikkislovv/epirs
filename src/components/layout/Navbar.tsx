import { useState, useEffect } from 'react'
import { content } from '../../content'

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const ids = content.nav.map((item) => item.id)

    const onScroll = () => {
      const threshold = window.innerHeight * 0.4
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id
        }
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      const navH = window.innerWidth >= 768 ? 80 : 64
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm">
        <nav className="w-full px-4 md:px-14 h-16 md:h-20 flex items-center">
          <img
            src={content.logo}
            alt="ЭПИРС"
            className="h-10 md:h-14 object-contain flex-shrink-0"
          />

          {/* Desktop: обычное меню */}
          <div className="hidden md:flex items-center gap-8 text-base ml-12">
            {content.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={[
                  'relative pb-0.5 transition-colors duration-300',
                  'after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-black',
                  'after:transition-all after:duration-300',
                  activeId === item.id
                    ? 'text-black after:w-full'
                    : 'text-secondary hover:text-black after:w-0 hover:after:w-full',
                ].join(' ')}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile: кнопка три точки справа */}
          <button
            className="md:hidden ml-auto flex-shrink-0 p-2 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <svg width="30" height="30" viewBox="0 0 22 22" fill="currentColor" className="text-gray-400">
              <circle cx="5" cy="11" r="1.8" />
              <circle cx="11" cy="11" r="1.8" />
              <circle cx="17" cy="11" r="1.8" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile: оверлей меню — всегда в DOM, анимируется через transform */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bg-primary w-72 h-full p-8 flex flex-col gap-1 overflow-y-auto shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="self-end text-2xl leading-none mb-4 text-secondary hover:text-black transition-colors cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            ×
          </button>
          {content.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left font-['Inter'] font-medium text-base text-black py-3 border-b border-gray-200 hover:text-secondary transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contacts')}
            className="mt-6 bg-accent text-black font-['Inter'] font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            {content.hero.cta}
          </button>
        </div>
      </div>
    </>
  )
}
