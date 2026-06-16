import PillLanguageSwitcher from '@/components/shared/PillLanguageSwitcher'

export default function HeroHeader() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div
        className="flex items-center gap-4"
        aria-label="Language controls"
      >
        <PillLanguageSwitcher />
      </div>
      <time
        className="text-sm opacity-50 block mt-4"
        dateTime="2025"
      >
        ♫⋆｡♪ ₊˚♬ ﾟ. / 2026
      </time>
    </div>
  )
}
