import { Briefcase } from 'lucide-react'
import { SectionLayout } from '@/components/shared/SectionLayout'
import { SectionHeader } from '@/components/shared/SectionHeader'
import ExperienceMain from './experience-main'

export default function ExperienceSection() {
  return (
    <SectionLayout
      id="experience-heading"
      header={
        <SectionHeader
          icon={Briefcase}
          titleKey="experience.title"
          id="experience-heading"
        />
      }
    >
      <ExperienceMain />
    </SectionLayout>
  )
}
