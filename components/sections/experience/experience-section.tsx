import { SectionHeading } from "@/components/shared/section-heading"
import { ExperienceCard } from "@/components/sections/experience/experience-card"
import { experienceData } from "@/data/experience-data"
import { useLanguageContext } from "@/hooks/useLanguage"

export function ExperienceSection() {
  const { t } = useLanguageContext();

  return (
    <>
      <div className="flex flex-col space-y-8">
        <SectionHeading
          title={t('experience.title')}
        />

        <div className="mt-12 space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </>
  )
}
