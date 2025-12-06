

import { SkillCard } from "./hexagonal/skill-card"
import type { SkillGroup } from "@/types/skills"

function HexagonalSkills({ skills }: { skills: SkillGroup[] }) {


  const items = Object.entries(skills)
  const midpoint = Math.ceil(items.length / 2)
  const leftColumn = items.slice(0, midpoint)
  const rightColumn = items.slice(midpoint)

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumn.map(([_i, group]) => (
            <SkillCard
              key={group.name}
              name={group.name}
              skills={group.skills}
              subcategories={group.subcategories}

            />
          ))}
        </div>
        <div className="space-y-6">
          {rightColumn.map(([_i, group]) => (
            <SkillCard
              key={group.name}
              name={group.name}
              skills={group.skills}
              subcategories={group.subcategories}

            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HexagonalSkills