import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'

export default function HeroMain() {
  const { t } = useLanguageSwitcher()
  return (
    <div className="space-y-4">
      <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
        {t('hero.name')}
        <br />
        <span className="text-gradient inline-block">
          {t('hero.surname')}
        </span>
      </h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
        {t('hero.description')}
      </p>
    </div>
  )
}
