//todo: a implementation like lucide with dinamic import and tree shaking

import * as Icons from 'portfolio-svg-icon-provider'
import type { SvgIcon } from '@/types/svgIcons'
import { cn } from '@/lib/utils'

export default function IconSVG({
  name,
  className,
}: {
  name: SvgIcon
  className?: string
}) {
  const IconComponent = Icons[name] as React.ElementType

  if (!IconComponent) return null

  return (
    <IconComponent className={cn('size-4', className)} />
  )
}
