import type { IconType } from '@/types/infotag'
import IconSVG from './IconSVG'
import { DynamicIcon } from 'lucide-react/dynamic'

export default function Icon({ icon, svg }: IconType) {
  if (icon) {
    return (
      <DynamicIcon
        key={icon}
        name={icon}
        className="w-3.5 h-3.5 opacity-70"
      />
    )
  }
  if (svg) {
    return <IconSVG name={svg} />
  }
  return null
}
