import { SectionHeading } from "@/components/shared/section-heading"
import { ProjectCard } from "@/components/sections/projects/project-card"
import { projectsData } from "@/data/projects-data"
import { useLanguageContext } from "@/hooks/useLanguage"

export function ProjectsSection() {
  const { t } = useLanguageContext();

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title={t('projects.title')}
          description={t('projects.description')}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}
