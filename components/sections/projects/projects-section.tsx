import { SectionHeading } from "@/components/shared/section-heading"
import { ProjectCard } from "@/components/sections/projects/project-card"
import { projectsData } from "@/data/projects-data"
import { useLanguageContext } from "@/hooks/useLanguage"

export function ProjectsSection() {
  const { t } = useLanguageContext();

  return (
    <>
      <div className="flex flex-col space-y-8">
        <SectionHeading
          title={t('projects.title')}
          subtitle={t('projects.description')}
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
