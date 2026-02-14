import { HeroActions } from "./hero-actions"
import { useLanguageContext } from "@/hooks/useLanguage"
import { useMediaQuery } from "@/hooks/use-media-query"
import { InfoTags } from "./info-tags"
import { HeroMobileHeader } from "./hero-mobile-header"
import { HeroDesktopHeader } from "./hero-desktop-header"
import { HeroDesktopImage } from "./hero-desktop-image"

export function HeroSection() {
  const { t } = useLanguageContext()
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <HeroActions />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

        <div className="md:col-span-7 space-y-6 md:space-y-8">
          {!isMobile ? <HeroDesktopHeader /> : <HeroMobileHeader />}

          <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full  border border-border/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {t('hero.available')}
            </div>
          </div>

          <div className="space-y-6 max-w-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed ">
              {t('hero.description')}
            </p>

            <div className="pt-2">
              <InfoTags />
            </div>
          </div>
        </div>

        {!isMobile && <HeroDesktopImage />}
      </div>
    </div>
  )
}
