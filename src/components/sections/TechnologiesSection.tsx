import { content } from '../../content'
import { useParallax } from '../../lib/useParallax'
import SectionHeading from '../ui/SectionHeading'
import DarkBlock from '../ui/DarkBlock'

function TechCard({ tech }: { tech: (typeof content.technologies)[number] }) {
  const parallaxRef = useParallax<HTMLImageElement>(0.15)

  return (
    <div className="border-[7px] border-stroke rounded-[15px] p-4 flex flex-col items-center gap-4 bg-primary overflow-hidden">
      <img
        ref={parallaxRef}
        src={tech.svg}
        alt={tech.title}
        className="w-full h-auto object-contain"
      />
      <p className="font-['Inter'] font-bold text-[12px] text-black text-center">{tech.title}</p>
    </div>
  )
}

interface TechnologiesSectionProps {
  id?: string
}

export default function TechnologiesSection({ id }: TechnologiesSectionProps) {
  return (
    <section id={id} className="bg-primary px-14 py-16">
      <div className="w-full">
        <SectionHeading>Наши технологии</SectionHeading>
        <DarkBlock>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.technologies.map((tech) => (
              <TechCard key={tech.title} tech={tech} />
            ))}
          </div>
        </DarkBlock>
      </div>
    </section>
  )
}
