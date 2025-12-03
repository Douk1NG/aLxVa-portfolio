'use client'

import { useLanguageContext } from "@/hooks/useLanguage"
import { InfoTags } from "./info-tags"

export function HeroBio() {
    const { t } = useLanguageContext()

    return (
        <>
            <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 border border-border/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {t('hero.available')}
                </div>
            </div>

            <div className="space-y-6 max-w-lg">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed ">
                    {t('hero.description')}
                </p>

                {/* Info Tags - Below text on both mobile and desktop */}
                <div className="pt-2">
                    <InfoTags />
                </div>
            </div>
        </>
    )
}
