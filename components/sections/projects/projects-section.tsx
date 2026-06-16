import { FolderGit2 } from 'lucide-react'
import { SectionLayout } from '@/components/shared/SectionLayout'
import { SectionHeader } from '@/components/shared/SectionHeader'
import ProjectsMain from './projects-main'

export default function ProjectsSection() {
  return (
    <SectionLayout
      id="projects-heading"
      header={
        <SectionHeader
          icon={FolderGit2}
          titleKey="projects.title"
          id="projects-heading"
        />
      }
    >
      <ProjectsMain />
    </SectionLayout>
  )
}
