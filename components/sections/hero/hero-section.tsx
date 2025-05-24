import { ProfileImage } from "@/components/sections/hero/profile-image"
import { QuickNav } from "@/components/sections/hero/quick-nav"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-4 py-20 sm:px-6 lg:px-8 pt-24">
      <div className="mx-auto max-w-7xl w-full">
        <div className="space-y-8">
          {/* Profile Image with Status Badge - Horizontal Layout */}
          <ProfileImage />

          {/* Main Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Hey, I'm Alex Chen
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
      </div>
    </section>
  )
}
