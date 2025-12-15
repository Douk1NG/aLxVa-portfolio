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
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          {t('experience.description')}
        </p>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </>
  )
}
