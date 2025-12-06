

import { SkillCard } from "./hexagonal/skill-card"
import type { SkillGroup } from "@/types/skills"

function HexagonalSkills({ skills }: { skills: SkillGroup[] }) {

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <SkillCard
            key={group.name}
            name={group.name}
            skills={group.skills}
            subcategories={group.subcategories}
          />
        ))}
      </div>
    </div>
  )
}

export default HexagonalSkills