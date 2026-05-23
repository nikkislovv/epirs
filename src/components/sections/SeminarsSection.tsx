import { content } from '../../content'
import SectionHeading from '../ui/SectionHeading'
import DarkBlock from '../ui/DarkBlock'
import YouTubeEmbed from '../ui/YouTubeEmbed'

interface SeminarsSectionProps {
  id?: string
}

export default function SeminarsSection({ id }: SeminarsSectionProps) {
  return (
    <section id={id} className="bg-primary px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>{content.seminars.title}</SectionHeading>
        <DarkBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.seminars.videoIds.map((videoId) => (
              <YouTubeEmbed key={videoId} videoId={videoId} />
            ))}
          </div>
        </DarkBlock>
      </div>
    </section>
  )
}
