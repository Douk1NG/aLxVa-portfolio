
'use client'

import { HeroActions } from "./hero-actions"
import { HeroMobileProfile } from "./hero-mobile-profile"
import { HeroDesktopProfile } from "./hero-desktop-profile"
import { HeroBio } from "./hero-bio"
import { HeroVisuals } from "./hero-visuals"

export function HeroSection() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[calc(100vh-(--spacing(16)))] flex flex-col justify-center">
      <HeroActions />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

        <div className="md:col-span-7 space-y-6 md:space-y-8">
          <HeroMobileProfile />
          <HeroDesktopProfile />
          <HeroBio />
        </div>

        {/* Right Column: Image (Desktop Only) */}
        <HeroVisuals />
      </div>
    </div>
  )
}
