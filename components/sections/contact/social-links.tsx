"use client"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <Button
        size="lg"
        className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-cyan-400 transition-all duration-300"
        onClick={() => window.open("https://github.com", "_blank")}
      >
      </Button>
      <Button
        size="lg"
        className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-cyan-400 transition-all duration-300"
        onClick={() => window.open("https://linkedin.com", "_blank")}
      >
      </Button>
    </div>
  )
}
