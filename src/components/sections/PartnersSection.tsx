import { useState, useEffect } from 'react'
import { content } from '../../content'
import SectionHeading from '../ui/SectionHeading'
import DarkBlock from '../ui/DarkBlock'

const STADLER_SRC = '/customer-docs/layouts/parthners_logo/image (19).png'

function LogoMarquee() {
  const logos = content.partners.logos
  const doubled = [...logos, ...logos]

  return (
    <div className="overflow-hidden mb-12">
      <div className="flex animate-marquee gap-16 w-max items-center">
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Партнёр ЭПИРС"
            className={`object-contain grayscale hover:grayscale-0 transition duration-300 flex-shrink-0 ${
              src === STADLER_SRC ? 'h-10' : 'h-16'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const ITEMS_PER_PAGE = 3

function ProductGallery() {
  const photos = content.partners.gallery
  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages)
    }, 3000)
    return () => clearInterval(timer)
  }, [totalPages])

  const visible = photos.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)

  return (
    <DarkBlock>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {visible.map((src, i) => (
          <div key={i} className="border-[7px] border-stroke rounded-[15px] overflow-hidden">
            <img
              src={src}
              alt={`Продукция ЭПИРС`}
              className="w-full h-[36rem] object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
              i === page ? 'bg-accent' : 'bg-gray-300'
            }`}
            aria-label={`Страница ${i + 1}`}
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
    <section id={id} className="bg-primary px-14 py-16">
      <div className="w-full">
        <SectionHeading>Партнёры</SectionHeading>
        <LogoMarquee />
        <ProductGallery />
      </div>
    </section>
  )
}
