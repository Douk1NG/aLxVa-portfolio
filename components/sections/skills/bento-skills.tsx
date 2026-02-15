import { SkillGroup } from "@/types/skills"
import { SkillGroupItem } from "./components/skill-group-item"

export default function BentoSkills({ skills }: { skills: SkillGroup[] }) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-min grid-flow-dense">
                {skills.map((group) => (
                    <SkillGroupItem key={group.name} group={group} />
                ))}
            </div>
        </div>
    )
}

