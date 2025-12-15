"use client"

import Image from "next/image"
import { useLanguageContext } from "@/hooks/useLanguage"

export function HeroMobileHeader() {
    const { t } = useLanguageContext()

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-6">
                <div className="flex-1">
                    <h1 className="text-4xl font-light tracking-tight leading-[1.1]">
                        {t('hero.name')}
                        <br />
                        <span className="text-muted-foreground font-medium">{t('hero.surname')}</span>
                    </h1>
                </div>
                <div className="relative h-28 w-28 shrink-0">
                    <div className="absolute inset-0 bg-accent/10 rounded-full " />
                    <div className="relative h-full w-full rounded-full overflow-hidden border-2 drop-shadow-lg drop-shadow-cyan-500">
                        <Image
                            src={"/avatar3.jpg"}
                            alt="Portrait of Dibey Valencia"
                            fill
                            className="object-cover"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
