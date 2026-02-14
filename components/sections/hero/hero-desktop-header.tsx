"use client"

import { useLanguageContext } from "@/hooks/useLanguage"

export function HeroDesktopHeader() {
    const { t } = useLanguageContext()

    return (
        <div className="space-y-6 md:space-y-8">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
                ♫⋆｡♪ ₊˚♬ ﾟ. / 2025
            </div>
            <div className="space-y-4">
                <h1 className="text-6xl lg:text-9xl font-light tracking-tighter leading-[0.8]">
                    <span className="text-gradient block">{t('hero.name')}</span>
                    <span className="text-muted-foreground/40 font-medium italic">{t('hero.surname')}</span>
                </h1>
            </div>
        </div>
    )
}
