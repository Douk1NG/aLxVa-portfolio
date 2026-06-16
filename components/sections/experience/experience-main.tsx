import {
  Building2,
  Clock,
  MapPin,
  Calendar,
} from 'lucide-react'
import { useExperience } from '@/hooks/useExperience'
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'
import { ExpandableCardGrid } from '@/components/shared/expandable-card/ExpandableCardGrid'
import { ExpandableCard } from '@/components/shared/expandable-card/ExpandableCard'
import { SectionItemCompact } from '@/components/shared/section-item/SectionItemCompact'
import { SectionItemExpanded } from '@/components/shared/section-item/SectionItemExpanded'

export default function ExperienceMain() {
  const experiences = useExperience()
  const { t } = useLanguageSwitcher()

  const descriptionLabel = t('experience.description_label')
  const tagsLabel = t('experience.skills_label')

  return (
    <ExpandableCardGrid>
      {experiences.map((experience, index) => (
        <ExpandableCard
          key={index}
          compact={
            <SectionItemCompact title={t(experience.title)}>
              <div className="flex gap-3">
                <div className="flex items-center gap-1.5">
                  <Building2 className="size-3 text-primary/70" />
                  <span className="truncate">
                    {experience.company}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="size-3" />
                  <span>
                    {t(experience.duration.short)}
                  </span>
                </div>
              </div>
            </SectionItemCompact>
          }
          expanded={
            <SectionItemExpanded
              title={t(experience.title)}
              subtitle={experience.company}
              metaItems={[
                {
                  icon: MapPin,
                  text: t(experience.location),
                },
                {
                  icon: Calendar,
                  text: t(experience.duration.long),
                },
              ]}
              description={t(experience.description)}
              tags={experience.skills}
              descriptionLabel={descriptionLabel}
              tagsLabel={tagsLabel}
            />
          }
        />
      ))}
    </ExpandableCardGrid>
  )
}
