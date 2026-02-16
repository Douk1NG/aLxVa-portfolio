"use client"
import { useLanguageContext } from "@/hooks/useLanguage"

export default function HeroName() {
    const { t } = useLanguageContext()

    return (
        <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-light tracking-tighter leading-none flex flex-col relative z-20">
                <div className="overflow-visible pb-12 lg:pb-20 -mb-12 lg:-mb-20 pt-4 relative z-30">
                    <span className="text-gradient transition-transform duration-500 hover:scale-105 origin-left inline-block w-full">
                        {t('hero.name')}
                    </span>
                </div>
                <span className="text-muted-foreground/40 font-medium italic relative z-10 -mt-2 lg:-mt-4 ml-4 md:ml-12 lg:ml-24">
                    {t('hero.surname')}
                </span>
            </h1>
        </div>
    )
}