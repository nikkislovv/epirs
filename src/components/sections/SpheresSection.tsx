import { content } from '../../content'
import { useParallax } from '../../lib/useParallax'
import SectionHeading from '../ui/SectionHeading'

interface SphereSubsectionProps {
  sphere: (typeof content.spheres)[number]
}

function SphereSubsection({ sphere }: SphereSubsectionProps) {
  const parallaxRef = useParallax<HTMLImageElement>(0.2)

  const imageCol = (
    <div className="relative flex justify-center items-center min-h-[340px]">
      <img
        src={sphere.bgImage}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover rounded-[28px] ${sphere.bgOpacity}`}
      />
      <img
        ref={parallaxRef}
        src={sphere.mainImage}
        alt={sphere.title}
        className="relative z-10 max-h-[320px] w-auto object-contain drop-shadow-lg"
      />
    </div>
  )

  const textCol = (
    <div>
      <SectionHeading>{sphere.title}</SectionHeading>
      <p className="font-['Inter'] font-normal text-[12px] text-black leading-relaxed whitespace-pre-line">
        {sphere.text}
      </p>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
      {sphere.imageRight ? (
        <>
          {textCol}
          {imageCol}
        </>
      ) : (
        <>
          {imageCol}
          {textCol}
        </>
      )}
    </div>
  )
}

interface SpheresSectionProps {
  id?: string
}

export default function SpheresSection({ id }: SpheresSectionProps) {
  return (
    <section id={id} className="bg-primary px-6">
      <div className="max-w-7xl mx-auto divide-y divide-black/10">
        {content.spheres.map((sphere) => (
          <SphereSubsection key={sphere.id} sphere={sphere} />
        ))}
      </div>
    </section>
  )
}
