import { Code2, MapPin, Github, Linkedin, FileDown } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

/**
 * Type for information tags
 */
export type InfoTag = {
  /** Icon component */
  icon: LucideIcon
  /** Translation key for the title */
  titleKey: string
  /** Translation key for the description */
  descriptionKey: string
  /** Optional link URL */
  href?: string
}

export const infoTags: InfoTag[] = [
  {
    icon: Code2,
    titleKey: 'info.code.title',
    descriptionKey: 'info.code.description'
  },
  {
    icon: MapPin,
    titleKey: 'info.location.title',
    descriptionKey: 'info.location.description'
  },
  {
    icon: Github,
    titleKey: 'info.github.title',
    descriptionKey: 'info.github.description'
  },
  {
    icon: Linkedin,
    titleKey: 'info.linkedin.title',
    descriptionKey: 'info.linkedin.description'
  },
  {
    icon: FileDown,
    titleKey: 'info.resume.title',
    descriptionKey: 'info.resume.description'
  }
] 