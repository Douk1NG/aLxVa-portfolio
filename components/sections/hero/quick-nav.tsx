"use client"

import { ArrowDown, User, Briefcase, Code, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickNav() {
  const quickLinks = [
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 mt-12">
      {/* Quick Navigation Pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {quickLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="sm"
            onClick={() => scrollToSection(link.href)}
            className="border-gray-600 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.name}
          </Button>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex flex-col items-center space-y-2 text-gray-400">
        <span className="text-sm">Explore more</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  )
}
