import { ProfileImage } from "@/components/sections/hero/profile-image"
import { QuickNav } from "@/components/sections/hero/quick-nav"

export function HeroSection() {
  return (
      <div className="space-y-8">
        <ProfileImage />

        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Hey, I&apos;m Dibey
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl">
              <span className="text-gray-400">+5 years of experience.</span>{" "}
              <span className="text-yellow-400 font-semibold">Software Engineer and Full Stack Developer</span>{" "}
              <span className="text-gray-400">from San Francisco, CA.</span>{" "}
              <span className="text-gray-300">Specialized in building unique web applications.</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <QuickNav />
        </div>
      </div>
  )
}
