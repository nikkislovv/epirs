import { content } from '../../content'
import SectionWrapper from '../ui/SectionWrapper'

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Услуги</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-2xl hover:border-primary transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
