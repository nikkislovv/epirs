import { useState, useEffect } from 'react'
import { content } from '../../content'

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const sectionIds = content.nav.map((item) => item.id)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { threshold: 0.5 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <img
          src={content.logo}
          alt="ЭПИРС"
          className="h-10 object-contain"
        />
        <div className="hidden md:flex items-center gap-8 text-sm">
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
        <button
          onClick={() => scrollTo('contacts')}
          className="md:hidden text-sm font-medium text-black hover:opacity-70 transition-opacity"
        >
          {content.hero.cta}
        </button>
      </nav>
    </header>
  )
}
