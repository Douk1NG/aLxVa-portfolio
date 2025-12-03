import { Code2, MapPin, Github, Linkedin } from 'lucide-react'
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
  /** Optional link URL */
  href?: string
}

export const infoTags: InfoTag[] = [
  {
    icon: Code2,
    titleKey: 'hero.role'
  },
  {
    icon: MapPin,
    titleKey: 'hero.location'
  },
  {
    icon: Github,
    titleKey: 'hero.github',
    href: '.'
  },
  {
    icon: Linkedin,
    titleKey: 'hero.linkedin',
    href: '.'
  }
]