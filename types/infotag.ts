import type { SvgIcon } from './svgIcons'
import type { LucideIconName } from './lucide-icon'
import type { Language } from './language'

export type IconType = {
  icon?: LucideIconName
  svg?: SvgIcon
}

export type InfoTag = {
  titleKey: string
  href?: string
  hrefByLanguage?: Partial<Record<Language, string>>
} & IconType
