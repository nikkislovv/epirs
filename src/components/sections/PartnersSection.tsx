import { useState, useEffect } from 'react'
import { content } from '../../content'
import SectionHeading from '../ui/SectionHeading'
import DarkBlock from '../ui/DarkBlock'

function LogoMarquee() {
  const logos = content.partners.logos
  const doubled = [...logos, ...logos]

  return (
    <div className="overflow-hidden mb-12">
      <div className="flex animate-marquee gap-12 w-max">
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Партнёр ЭПИРС"
            className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}

function ProductGallery() {
  const photos = content.partners.gallery
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [photos.length])

  return (
    <DarkBlock>
      <div className="border-[7px] border-stroke rounded-[15px] overflow-hidden mb-4">
        <img
          src={photos[current]}
          alt={`Продукция ЭПИРС ${current + 1}`}
          className="w-full h-64 object-cover transition-opacity duration-500"
        />
      </div>
      <div className="flex justify-center gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
              i === current ? 'bg-accent' : 'bg-gray-300'
            }`}
            aria-label={`Фото ${i + 1}`}
          />
        ))}
      </div>
    </DarkBlock>
  )
}

interface PartnersSectionProps {
  id?: string
}

export default function PartnersSection({ id }: PartnersSectionProps) {
  return (
    <section id={id} className="bg-primary px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>Партнёры</SectionHeading>
        <LogoMarquee />
        <ProductGallery />
      </div>
    </section>
  )
}
