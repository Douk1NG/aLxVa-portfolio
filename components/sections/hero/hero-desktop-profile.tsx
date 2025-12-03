'use client'

import { useLanguageContext } from "@/hooks/useLanguage"

export function HeroDesktopProfile() {
    const { t } = useLanguageContext()

    return (
        <>
            {/* Desktop "Tagline" */}
            <div className="hidden md:block text-sm text-muted-foreground font-mono tracking-wider">
                ♫⋆｡♪ ₊˚♬ ﾟ. / 2025
            </div>

            {/* Desktop Title */}
            <div className="hidden md:block space-y-4">
                <h1 className="text-6xl lg:text-8xl font-light tracking-tight leading-[0.9]">
                    {t('hero.name')}
                    <br />
                    <span className="text-muted-foreground font-medium">{t('hero.surname')}</span>
                </h1>
            </div>
        </>
    )
}
