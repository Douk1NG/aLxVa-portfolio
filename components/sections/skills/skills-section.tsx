import { HexagonalSkills } from "@/components/sections/skills/hexagonal-skills"
import { SectionHeading } from "@/components/shared/section-heading"
import { skillsData } from "@/data/skills-data"
import { useLanguageContext } from "@/hooks/useLanguage"

export function SkillsSection() {
  const { t } = useLanguageContext();

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={t('skills.title')}
          description={t('skills.description')}
        />

        <div className="mt-16">
          <HexagonalSkills skills={skillsData} />
        </div>
      </div>
    </>
  )
}
