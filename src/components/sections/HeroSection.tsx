import { content } from '../../content'
import { useParallax } from '../../lib/useParallax'

interface HeroSectionProps {
  id?: string
}

export default function HeroSection({ id }: HeroSectionProps) {
  const busParallaxRef = useParallax<HTMLDivElement>(content.hero.busParallax, 0, true)

  function scrollToContacts() {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id={id} className="min-h-screen bg-primary pt-16 md:pt-20 flex flex-col overflow-hidden">
      <div className="w-full px-4 md:px-14 pt-8 md:pt-14 pb-0 flex flex-col flex-1">
        {/* Текст: стопка на мобильном, сетка на десктопе */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[0.8fr_1.8fr] md:gap-4 mb-8 md:mb-12 md:items-start">
          <h1 className="font-['Montserrat'] font-semibold text-[18px] md:text-[26px] text-black leading-snug md:tracking-[0.07em]">
            {content.hero.title}
          </h1>
          <div>
            <p className="font-['Inter'] font-bold text-[15px] md:text-[22px] text-black mb-3 md:tracking-[0.06em]">
              {content.hero.subtitle}
            </p>
            <p className="font-['Inter'] font-normal text-[14px] md:text-[17px] text-black mb-8 leading-relaxed md:tracking-[0.04em]">
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

        {/* Автобус — под текстом, по центру, крупный.
            Размер привязан к ширине (vw), а не к остаточной высоте (vh),
            чтобы композиция была одинаковой при любом масштабе и автобус не обрезался. */}
        <div className="relative md:min-h-0 flex-1 flex items-center justify-center md:items-end overflow-hidden md:overflow-visible -mx-4 md:mx-0">
          <div
            ref={busParallaxRef}
            className="relative flex justify-center items-end w-full"
          >
            <img
              src={content.hero.busImage}
              alt="Автобус ЭПИРС"
              width={1890}
              height={832}
              fetchPriority="high"
              decoding="async"
              className="w-[140%] max-w-none h-auto md:w-[60vw] md:max-w-[1200px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
