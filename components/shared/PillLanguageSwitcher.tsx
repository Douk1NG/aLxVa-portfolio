import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Language } from '@/types/language'
import { useLanguageContext } from '@/hooks/useLanguage'

const LANGUAGES: Language[] = ['en', 'es']

const PillLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext()
  const activeIndex = LANGUAGES.indexOf(language)

  return (
    <div className="glass inline-flex items-center rounded-full border border-border/35 p-1 shadow-lg relative h-11 gap-0.5">
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full',
          'bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary-orange))]',
          'shadow-[0_0_16px_hsl(var(--primary)/0.5),inset_0_1px_0_hsl(var(--foreground-primary)/0.2)]',
          'transition-[transform,box-shadow,filter] duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]',
          'group-hover/lang-switch:brightness-110',
        )}
        style={{
          transform:
            activeIndex === 0
              ? 'translateX(0)'
              : 'translateX(calc(100% + 4px))',
        }}
      />
      {LANGUAGES.map((targetLanguage) => {
        const isActive = language === targetLanguage

        return (
          <Button
            key={targetLanguage}
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(targetLanguage)}
            aria-pressed={isActive}
            className={cn(
              'group/lang-switch relative z-10 rounded-full px-4 py-1.5 text-sm font-medium w-14 transition-colors duration-300 hover:scale-100',
              isActive
                ? 'text-primary-foreground font-semibold hover:bg-transparent hover:text-primary-foreground'
                : 'text-muted-foreground hover:bg-primary/12 hover:text-foreground hover:shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.28)]',
            )}
          >
            {targetLanguage.toUpperCase()}
          </Button>
        )
      })}
    </div>
  )
}

export default PillLanguageSwitcher
