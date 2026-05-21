import { content } from '../../content'
import SectionWrapper from '../ui/SectionWrapper'

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-gray-50">
      <div className={`grid gap-12 items-center ${content.about.hasPhoto ? 'md:grid-cols-2' : ''}`}>
        {content.about.hasPhoto && (
          <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
            {/* Заменить на: <img src="/photo.jpg" alt="Фото" className="w-full h-full object-cover" /> */}
          </div>
        )}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">О себе</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{content.about.text}</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
