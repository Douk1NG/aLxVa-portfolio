"use client"
import HeroName from "./hero-name"

export function HeroDesktopHeader() {

    return (
        <div className="hidden md:block">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
                ♫⋆｡♪ ₊˚♬ ﾟ. / 2025
            </div>
            <HeroName />
        </div>
    )
}
