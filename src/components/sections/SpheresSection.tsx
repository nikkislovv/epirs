import { content } from '../../content'
import { useParallax } from '../../lib/useParallax'
import { useScrollAnimation } from '../../lib/useScrollAnimation'
import SectionHeading from '../ui/SectionHeading'

interface SphereSubsectionProps {
  sphere: (typeof content.spheres)[number]
}

function SphereSubsection({ sphere }: SphereSubsectionProps) {
  const bgParallaxRef = useParallax<HTMLImageElement>(0.12)
  const pngParallaxRef = useParallax<HTMLImageElement>(0.2)
  const animRef = useScrollAnimation<HTMLElement>()

  const photoSide = (
    <div className="relative w-1/2 overflow-hidden">
      <img
        ref={bgParallaxRef}
        src={sphere.bgImage}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover ${sphere.bgOpacity}`}
      />
      <div className="relative z-10 flex flex-col justify-center h-full px-14 py-20">
        <SectionHeading>{sphere.title}</SectionHeading>
        <p className="font-['Inter'] font-normal text-[13px] text-black leading-relaxed whitespace-pre-line">
          {sphere.text}
        </p>
      </div>
    </div>
  )

  const pngSide = (
    <div className="w-1/2 bg-primary flex items-center justify-center overflow-hidden">
      <img
        ref={pngParallaxRef}
        src={sphere.mainImage}
        alt={sphere.title}
        className="max-h-[85vh] w-auto object-contain"
      />
    </div>
  )

  return (
    <section
      ref={animRef}
      data-animate
      className="min-h-screen flex"
    >
      {sphere.imageRight ? (
        <>
          {photoSide}
          {pngSide}
        </>
      ) : (
        <>
          {pngSide}
          {photoSide}
        </>
      )}
    </section>
  )
}

interface SpheresSectionProps {
  id?: string
}

export default function SpheresSection({ id }: SpheresSectionProps) {
  return (
    <section id={id}>
      {content.spheres.map((sphere) => (
        <SphereSubsection key={sphere.id} sphere={sphere} />
      ))}
    </section>
  )
}
