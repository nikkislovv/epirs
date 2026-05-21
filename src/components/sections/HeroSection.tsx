import { content } from '../../content'
import Button from '../ui/Button'

export default function HeroSection() {
  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-[85vh] flex items-center px-4">
      <div className="max-w-6xl mx-auto w-full py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {content.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          {content.hero.subtitle}
        </p>
        <Button onClick={scrollToContact}>
          {content.hero.cta}
        </Button>
      </div>
    </section>
  )
}
