import { ProfileImage } from "@/components/sections/hero/profile-image"
import { QuickNav } from "@/components/sections/hero/quick-nav"
import { useLanguageContext } from "@/hooks/useLanguage"

export function HeroSection() {
  const { t } = useLanguageContext();

  return (
    <div className="space-y-8">
      <ProfileImage />

      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            {t('hero.greeting')}
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl">
            <span className="text-gray-400">{t('hero.experience')}</span>{" "}
            <span className="text-yellow-400 font-semibold">{t('hero.role')}</span>{" "}
            <span className="text-gray-400">{t('hero.location')}</span>{" "}
            <span className="text-gray-300">{t('hero.specialization')}</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <QuickNav />
      </div>
    </div>
  )
}
