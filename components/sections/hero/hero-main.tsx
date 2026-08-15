import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'

export default function HeroMain() {
  const { t } = useLanguageSwitcher()
  return (
    <div className="space-y-5 w-full min-w-0">
      <h1 className="font-display w-full min-w-0 font-semibold tracking-[-0.025em] leading-[1.05]">
        <span className="text-display block text-foreground">
          {t('hero.name')}
        </span>
        <span className="text-display mt-1 block text-primary">
          {t('hero.surname')}
        </span>
      </h1>
      <p className="text-body w-full min-w-0 max-w-full text-foreground/88">
        {t('hero.description')}
      </p>
    </div>
  )
}
