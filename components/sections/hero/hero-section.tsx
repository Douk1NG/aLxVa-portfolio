'use client'

import { useLanguageContext } from "@/hooks/useLanguage"
import PillLanguageSwitcher from "@/components/shared/PillLanguageSwitcher"
import ThemeToggle from "@/components/shared/ThemeToggle"
import FloatingTriangles from "./floating-triangles"
import { InfoTags } from "./info-tags"

export function HeroSection() {
  const { t } = useLanguageContext()

  return (
    <div className="relative flex flex-col space-y-8">
      <FloatingTriangles />

      {/* Language Switcher and Theme Toggle */}
      <div className="hidden md:flex items-center gap-2 self-end">
        <PillLanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Main Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column - Photo, Title and Description */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 items-center md:items-start mt-4">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-glow`}>
              {t('hero.greeting')}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('hero.description')}
          </p>
        </div>

        {/* Right Column - Links */}
        <div className="space-y-6">
          <InfoTags />
        </div>
      </div>
    </div>
  )
}
