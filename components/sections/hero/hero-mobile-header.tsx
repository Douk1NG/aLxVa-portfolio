"use client"

import Image from "next/image"
import { getAssetPath } from "@/lib/utils"
import HeroName from "./hero-name"

export function HeroMobileHeader() {
    return (
        <div className="md:hidden space-y-4 mt-16">
            <div className="flex items-center gap-6">
                <div className="flex-1">
                    <HeroName />
                </div>
                <div className="relative h-28 w-28 shrink-0">
                    <div className="absolute inset-0 bg-accent/10 rounded-full " />
                    <div className="relative h-full w-full rounded-full overflow-hidden border-2 drop-shadow-lg drop-shadow-cyan-500">
                        <Image
                            src={getAssetPath("/mobile-avatar.webp")}
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
