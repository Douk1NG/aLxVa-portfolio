import { SectionHeading } from "@/components/shared/section-heading"
import { ExperienceCard } from "@/components/sections/experience/experience-card"
import { experienceData } from "@/data/experience-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Work Experience" description="My professional journey and key achievements" />

        <div className="mt-12 space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}
