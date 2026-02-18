import CompactSkills from "@/components/sections/skills/compact-skills"
import { SectionHeading } from "@/components/shared/section-heading"
import { skillsData } from "@/data/skills-data"
import { useLanguageContext } from "@/hooks/useLanguage"

export function SkillsSection() {
  const { t } = useLanguageContext();

  return (
    <div className="flex flex-col gap-4 p-4">
      <SectionHeading
        title={t('skills.title')}
      />
      <CompactSkills skills={skillsData} />
    </div>
  )
}
