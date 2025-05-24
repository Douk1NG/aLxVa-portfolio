import { HexagonalSkills } from "@/components/sections/skills/hexagonal-skills"
import { SectionHeading } from "@/components/shared/section-heading"
import { skillsData } from "@/data/skills-data"

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Skills & Technologies"
          description="Technologies I work with to bring ideas to life"
        />

        <div className="mt-16">
          <HexagonalSkills skills={skillsData} />
        </div>
      </div>
    </section>
  )
}
