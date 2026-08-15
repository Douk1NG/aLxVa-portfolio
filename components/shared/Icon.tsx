import type { IconType } from '@/types/infotag'
import IconSVG from './IconSVG'
import { LUCIDE_ICONS } from '@/lib/lucide-icons'

export default function Icon({ icon, svg }: IconType) {
  if (icon) {
    const LucideIcon = LUCIDE_ICONS[icon]
    if (!LucideIcon) return null

    return <LucideIcon className="w-3.5 h-3.5 opacity-70" />
  }
  if (svg) {
    return <IconSVG name={svg} />
  }
  return null
}
