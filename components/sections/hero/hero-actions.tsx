'use client'

import PillLanguageSwitcher from "@/components/shared/PillLanguageSwitcher"
import ThemeToggle from "@/components/shared/ThemeToggle"

export function HeroActions() {
    return (
        <div className="absolute top-4 right-4 z-10 hidden md:flex">
            <div className="flex items-center gap-2">
                <PillLanguageSwitcher />
                <ThemeToggle />
            </div>
        </div>
    )
}
