import PillLanguageSwitcher from '@/components/shared/PillLanguageSwitcher'
import ThemeIndicator from '@/components/shared/ThemeIndicator'

export default function HeroHeader() {
  return (
    <div className="flex w-full min-w-0 flex-col items-center justify-between gap-4">
      <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-3 lg:justify-between">
        <ThemeIndicator />
        <div aria-label="Language controls">
          <PillLanguageSwitcher />
        </div>
      </div>
      <time
        className="font-mono text-small mt-1 block tracking-widest uppercase opacity-40"
        dateTime="2026"
      >
        ♫⋆｡♪ ₊˚♬ ﾟ. / 2026
      </time>
    </div>
  )
}
