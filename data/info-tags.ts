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
    titleKey: 'hero.role',
    descriptionKey: 'hero.role.description'
  },
  {
    icon: MapPin,
    titleKey: 'hero.location',
    descriptionKey: 'hero.location.description'
  },
  {
    icon: Github,
    titleKey: 'hero.github',
    descriptionKey: 'hero.github.description'
  },
  {
    icon: Linkedin,
    titleKey: 'hero.linkedin',
    descriptionKey: 'hero.linkedin.description'
  },
  {
    icon: FileDown,
    titleKey: 'hero.download',
    descriptionKey: 'hero.download.description'
  }
]