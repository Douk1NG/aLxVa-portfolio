import type { SvgIcon } from './svgIcons'
import type { IconName } from 'lucide-react/dynamic'
import type { Language } from './language'

export type IconType = {
  icon?: IconName
  svg?: SvgIcon
}

export type InfoTag = {
  titleKey: string
  href?: string
  hrefByLanguage?: Partial<Record<Language, string>>
} & IconType
