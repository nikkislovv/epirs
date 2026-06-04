import { useState } from 'react'
import { content } from '../../content'
import SectionHeading from '../ui/SectionHeading'
import DarkBlock from '../ui/DarkBlock'

function TechCard({ tech }: { tech: (typeof content.technologies)[number] }) {
  return (
    <div className="border-[7px] border-stroke rounded-[15px] p-4 flex flex-col items-center gap-4 bg-primary overflow-hidden">
      <img src={tech.svg} alt={tech.title} className="w-full h-auto object-contain" />
      <p className="font-['Inter'] font-bold text-[12px] text-black text-center">{tech.title}</p>
    </div>
  )
}

interface TechnologiesSectionProps {
  id?: string
}

export default function TechnologiesSection({ id }: TechnologiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id={id} className="bg-primary py-16">
      {/* Заголовок с отступами */}
      <div className="px-4 md:px-14">
        <SectionHeading>Наши технологии</SectionHeading>
      </div>

      {/* Mobile: слайдер с плавным переходом */}
      <div className="md:hidden overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {content.technologies.map((tech) => (
            <div key={tech.title} className="w-full shrink-0 px-4">
              <div className="border-[7px] border-stroke rounded-[15px] overflow-hidden">
                <img src={tech.svg} alt={tech.title} className="w-full h-auto object-contain" />
              </div>
              <p className="font-['Inter'] font-bold text-[15px] text-black text-center mt-3">
                {tech.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {content.technologies.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
                i === activeIndex ? 'bg-accent' : 'bg-gray-300'
              }`}
              aria-label={`Технология ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: DarkBlock с сеткой */}
      <div className="hidden md:block px-14">
        <DarkBlock>
          <div className="grid grid-cols-3 gap-6">
            {content.technologies.map((tech) => (
              <TechCard key={tech.title} tech={tech} />
            ))}
          </div>
        </DarkBlock>
      </div>
    </section>
  )
}
