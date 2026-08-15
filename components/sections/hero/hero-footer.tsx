import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'
import { infoTags } from '@/data/info-tags'
import Icon from '@/components/shared/Icon'
import type { IconType } from '@/types/infotag'

function Tag({
  icon,
  svg,
  children,
}: IconType & { children: React.ReactNode }) {
  return (
    <span className="flex gap-2 items-center glass px-4 py-2 rounded-full text-small font-medium tracking-wide transition-all duration-300 hover:bg-primary/10 hover:border-primary/30">
      <Icon
        icon={icon}
        svg={svg}
      />
      {children}
    </span>
  )
}

export default function HeroFooter() {
  const { language, t } = useLanguageSwitcher()
  const basePath = import.meta.env.BASE_URL.replace(
    /\/$/,
    '',
  )

  const resolveHref = (href?: string) => {
    if (!href) return href
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:')
    )
      return href
    return `${basePath}${href}`
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start w-full min-w-0">
      {infoTags.map(
        ({ icon, svg, href, hrefByLanguage, titleKey }) => {
          const content = (
            <Tag
              key={titleKey}
              icon={icon}
              svg={svg}
            >
              {t(titleKey)}
            </Tag>
          )

          const resolvedHref = resolveHref(
            hrefByLanguage?.[language] ?? href,
          )

          if (resolvedHref) {
            return (
              <a
                key={titleKey}
                href={resolvedHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105 hover:underline-offset-4 hover:underline"
              >
                {content}
              </a>
            )
          }

          return content
        },
      )}
    </div>
  )
}
