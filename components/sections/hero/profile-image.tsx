import Image from "next/image"

export function ProfileImage() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
      <div className="relative w-24 h-24 xs:w-32 xs:h-32 overflow-hidden rounded-full border-4 border-cyan-400/50 bg-gradient-to-br from-gray-800 to-gray-900">
        <Image src="/avatar.webp" alt="Profile" fill className="object-cover" />
      </div>
    </div>
  )
}
