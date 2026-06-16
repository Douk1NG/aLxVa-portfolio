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
    <header className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon
          className={cn(
            'h-5 w-5 text-primary',
            iconClassName,
          )}
          aria-hidden="true"
        />
        <h2
          id={id}
          className="text-xl font-bold tracking-tight text-gradient"
        >
          {t(titleKey)}
        </h2>
      </div>
    </header>
  )
}
