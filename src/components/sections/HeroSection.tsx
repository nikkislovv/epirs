import { content } from '../../content'
import { useParallax } from '../../lib/useParallax'

interface HeroSectionProps {
  id?: string
}

export default function HeroSection({ id }: HeroSectionProps) {
  const busParallaxRef = useParallax<HTMLDivElement>(content.hero.busParallax)

  function scrollToContacts() {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id={id} className="min-h-screen bg-primary pt-20 flex flex-col overflow-hidden">
      <div className="w-full px-14 pt-14 pb-0 flex flex-col flex-1">
        {/* Верхняя строка: H1 слева, subtitle+description+CTA справа */}
        <div className="grid grid-cols-[1fr_2fr] gap-16 mb-12 items-start">
          <h1 className="font-['Montserrat'] font-semibold text-[20px] text-black leading-snug">
            {content.hero.title}
          </h1>
          <div>
            <p className="font-['Inter'] font-medium text-[15px] text-black mb-3">
              {content.hero.subtitle}
            </p>
            <p className="font-['Inter'] font-normal text-[14px] text-black mb-8 leading-relaxed">
              {content.hero.description}
            </p>
            <button
              onClick={scrollToContacts}
              className="bg-accent text-black font-['Inter'] font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              {content.hero.cta}
            </button>
          </div>
        </div>

        {/* Автобус — под текстом, по центру, крупный */}
        <div className="relative flex-1 overflow-hidden">
          <div
            ref={busParallaxRef}
            className="absolute inset-x-0 flex justify-center items-end"
            style={{ bottom: content.hero.busBottom, height: content.hero.busHeight }}
          >
            <img
              src={content.hero.busImage}
              alt="Автобус ЭПИРС"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
