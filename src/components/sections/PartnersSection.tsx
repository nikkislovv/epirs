import { useState, useEffect, useRef } from 'react'
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
  const [timerReset, setTimerReset] = useState(0)
  const pageRef = useRef(0)

  const pages = Array.from({ length: totalPages }, (_, pi) =>
    photos.slice(pi * ITEMS_PER_PAGE, (pi + 1) * ITEMS_PER_PAGE)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (pageRef.current + 1) % totalPages
      setPage(next)
      pageRef.current = next
    }, 7000)
    return () => clearInterval(timer)
  }, [totalPages, timerReset])

  const handleDotClick = (i: number) => {
    if (i === pageRef.current) return
    setPage(i)
    pageRef.current = i
    setTimerReset((k) => k + 1)
  }

  return (
    <DarkBlock>
      <div className="overflow-hidden mb-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((pagePhotos, pi) => (
            <div key={pi} className="w-full shrink-0 grid grid-cols-3 gap-20">
              {pagePhotos.map((src, i) => (
                <div key={i} className="border-[7px] border-stroke rounded-[15px] overflow-hidden">
                  <img
                    src={src}
                    alt="Продукция ЭПИРС"
                    className="w-full h-[36rem] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
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
