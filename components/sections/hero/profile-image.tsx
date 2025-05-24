import { StatusBadge } from "@/components/sections/hero/status-badge"

export function ProfileImage() {
  return (
    <div className="relative flex-shrink-0">
      <div className="flex flex-col xs:flex-row items-center gap-4 xs:gap-6">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75 blur-sm"></div>
          <div className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-cyan-400/50 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></div>
              </div>
            </div>
          </div>
        </div>
        <StatusBadge />
      </div>
    </div>
  )
}
