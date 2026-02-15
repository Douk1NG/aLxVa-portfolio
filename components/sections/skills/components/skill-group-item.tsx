import { cn } from "@/lib/utils"
import { SkillGroup } from "@/types/skills"
import { useSkillGroup } from "@/hooks/use-skill-group"
import { BentoCard } from "./bento-card"
import { SkillTag } from "./skill-tag"

export function SkillGroupItem({ group }: { group: SkillGroup }) {
    const { className, isVertical } = useSkillGroup(group);

    return (
        <div className={className}>
            <BentoCard title={group.name} icon={group.icon}>
                <div className={cn("gap-2 md:gap-2.5", isVertical ? "flex flex-col" : "flex flex-wrap")}>
                    {group.skills.map((skill) => (
                        <SkillTag key={skill.name} skill={skill} />
                    ))}
                </div>
            </BentoCard>
        </div>
    )
}
