import { content } from '../../content'
import { useParallax } from '../../lib/useParallax'

interface HeroSectionProps {
  id?: string
}

export default function HeroSection({ id }: HeroSectionProps) {
  const parallaxRef = useParallax<HTMLImageElement>(0.25)

  function scrollToContacts() {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id={id} className="min-h-screen bg-primary pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-['Montserrat'] font-bold text-[20px] text-black leading-snug mb-4">
            {content.hero.title}
          </h1>
          <p className="font-['Inter'] font-bold text-[12.5px] text-black mb-3">
            {content.hero.subtitle}
          </p>
          <p className="font-['Inter'] font-normal text-[12.5px] text-black mb-8 leading-relaxed">
            {content.hero.description}
          </p>
          <button
            onClick={scrollToContacts}
            className="bg-accent text-black font-['Inter'] font-bold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            {content.hero.cta}
          </button>
        </div>
        <div className="flex justify-center">
          <img
            ref={parallaxRef}
            src={content.hero.busImage}
            alt="Автобус ЭПИРС"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
