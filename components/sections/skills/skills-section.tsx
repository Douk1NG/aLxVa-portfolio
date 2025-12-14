import BentoSkills from "@/components/sections/skills/bento-skills"
import { SectionHeading } from "@/components/shared/section-heading"
import { skillsData } from "@/data/skills-data"
import { useLanguageContext } from "@/hooks/useLanguage"

export function SkillsSection() {
  const { t } = useLanguageContext();

  return (
    <div className="flex flex-col space-y-8">
      <SectionHeading
        title={t('skills.title')}
      />
      <BentoSkills skills={skillsData} />
    </div>
  )
}
