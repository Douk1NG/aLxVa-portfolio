import { LucideIcon } from 'lucide-react'
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  icon: LucideIcon
  titleKey: string
  id: string
  iconClassName?: string
}

export function SectionHeader({
  icon: Icon,
  titleKey,
  id,
  iconClassName,
}: SectionHeaderProps) {
  const { t } = useLanguageSwitcher()

  return (
    <header className="mb-4 flex items-center justify-between border-b border-border/50 pb-3">
      <div className="flex items-center gap-2.5">
        <Icon
          className={cn(
            'size-5 text-primary',
            iconClassName,
          )}
          aria-hidden="true"
        />
        <h2
          id={id}
          className="font-display text-h2 font-semibold tracking-tight text-foreground"
        >
          {t(titleKey)}
        </h2>
      </div>
    </header>
  )
}
