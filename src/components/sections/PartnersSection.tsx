import { useState, useEffect, useRef } from 'react'
import { content } from '../../content'
import SectionHeading from '../ui/SectionHeading'
import DarkBlock from '../ui/DarkBlock'
import { useSwipe } from '../../lib/useSwipe'

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

function ProductGallery({ itemsPerPage }: { itemsPerPage: number }) {
  const photos = content.partners.gallery
  const totalPages = Math.ceil(photos.length / itemsPerPage)
  const [page, setPage] = useState(0)
  const [timerReset, setTimerReset] = useState(0)
  const pageRef = useRef(0)

  const pages = Array.from({ length: totalPages }, (_, pi) =>
    photos.slice(pi * itemsPerPage, (pi + 1) * itemsPerPage)
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

  const swipe = useSwipe({
    onSwipeLeft: () => handleDotClick((pageRef.current + 1) % totalPages),
    onSwipeRight: () => handleDotClick((pageRef.current - 1 + totalPages) % totalPages),
  })

  return (
    <DarkBlock>
      <div className="overflow-hidden mb-6" {...swipe}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((pagePhotos, pi) => (
            <div
              key={pi}
              className={`w-full shrink-0 ${itemsPerPage > 1 ? 'grid grid-cols-3 gap-20' : ''}`}
            >
              {pagePhotos.map((photo, i) => (
                <div key={i} className="border-[7px] border-stroke rounded-[15px] overflow-hidden">
                  <img
                    src={photo.src}
                    alt="Изделие из стеклопластика производства ЭПИРС"
                    className="block"
                    style={
                      itemsPerPage === 1
                        ? { width: '100%', height: 'auto' }
                        : { width: photo.width, height: photo.height }
                    }
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
    <section id={id} className="bg-primary px-4 md:px-14 py-16">
      <div className="w-full">
        <SectionHeading>Партнёры</SectionHeading>
        <LogoMarquee />
        {/* Mobile: 1 фото на страницу */}
        <div className="md:hidden">
          <ProductGallery itemsPerPage={1} />
        </div>
        {/* Desktop: 3 фото на страницу */}
        <div className="hidden md:block">
          <ProductGallery itemsPerPage={3} />
        </div>
      </div>
    </section>
  )
}
