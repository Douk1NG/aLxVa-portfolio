import { SectionHeading } from "@/components/shared/section-heading"
import { ProjectCard } from "@/components/sections/projects/project-card"
import { projectsData } from "@/data/projects-data"

export function ProjectsSection() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Featured Projects" description="Some of my recent work and side projects" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}
