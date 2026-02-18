'use client'

import { useLanguageContext } from '@/hooks/useLanguage'
import { infoTags } from '@/data/info-tags'
import { ComponentProps, ElementType } from 'react'
import IconSVG from '@/components/shared/IconSVG'
import type { SvgIcon } from '@/types/svgIcons'

function InfoTag({
  icon,
  children,
  ...props
}: ComponentProps<'span'> & { icon: ElementType | SvgIcon }) {
  const Icon = icon
  return (
    <span
      className="flex gap-2 items-center border border-secondary-foreground/20 rounded-full px-3 py-1 md:border-none"
      {...props}
    >
      {
        typeof Icon === 'string' ? <IconSVG name={icon as SvgIcon} /> : <Icon className="w-4 h-4" />
      }
      {children}
    </span>
  )
}

export function InfoTags() {
  const { t } = useLanguageContext()

  return (
    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
      {infoTags.map(({ icon, href, titleKey }) => {

        const content = (
          <InfoTag key={titleKey} icon={icon}>
            {t(titleKey)}
          </InfoTag>
        )

        if (href) {
          return (
            <a
              key={titleKey}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className='underline hover:border-secondary-foreground hover:bg-secondary transition-colors rounded-full hover:font-semibold'
            >
              {content}
            </a>
          )
        }

        return content
      })}
    </div>
  )
}