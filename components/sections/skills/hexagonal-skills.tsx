"use client"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"
import type { Skill } from "@/types/skills"

type HexagonalSkillsProps = {
  skills: Skill[]
}

const HexagonalIcon = ({ IconComponent}:{ IconComponent: React.ElementType}) => <IconComponent className={cn("text-white")} size={20}/>

export function HexagonalSkills({ skills }: HexagonalSkillsProps) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => {
          const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons]

          return (
            <div key={skill.name} className="flex items-center gap-2">
              <HexagonalIcon
                IconComponent={IconComponent as React.ElementType}
                  />
                  <span className={cn("text-xs font-medium text-gray-300 transition-all duration-300 group-hover:text-white")}>
                    {skill.name}
                  </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
