import { Code2, MapPin, Mail, Download } from 'lucide-react'
import type { InfoTag } from '@/types/infotag'

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
    icon: 'github_light',
    titleKey: 'hero.github',
    href: 'https://github.com/Douk1NG.'
  },
  {
    icon: 'linkedin',
    titleKey: 'hero.linkedin',
    href: 'https://www.linkedin.com/in/douk1ng/.'
  },
  {
    icon: Mail,
    titleKey: 'hero.email',
    href: 'mailto:dialexanderx@gmail.com'
  },
  {
    icon: Download,
    titleKey: 'hero.cv',
    href: '/cv.pdf'
  }
]