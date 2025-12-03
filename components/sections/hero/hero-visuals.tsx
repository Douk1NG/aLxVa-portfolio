'use client'

import Image from "next/image"

export function HeroVisuals() {
    return (
        <div className="hidden md:block md:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-sm mx-auto">
                <div className="relative h-full w-full drop-shadow-lg drop-shadow-cyan-500">
                    <Image
                        src={"/avatar.png"}
                        alt="Portrait of Dibey Valencia"
                        fill
                        className="object-cover"
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}
