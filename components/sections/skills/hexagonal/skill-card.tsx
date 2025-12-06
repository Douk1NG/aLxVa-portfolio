import { SkillSubcategory, SkillItem } from "@/types/skills"

import { SkillBadge } from "./skill-badge"

interface SkillCardProps {
    name: string
    skills?: SkillItem[]
    subcategories?: SkillSubcategory[]
}

function Skills({
    skills,
    subcategories
}: {
    skills?: SkillItem[];
    subcategories?: SkillSubcategory[]
}) {
    if (subcategories) {
        return (
            subcategories.map((subcategory) => (
                <div key={subcategory.name}>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">{subcategory.name}</h4>
                    <div className="flex flex-wrap gap-2">
                        {subcategory.skills.map((skill) => (
                            <SkillBadge key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            )))
    }

    return (
        <div className="flex flex-wrap gap-2">
            {skills?.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
            ))}
        </div>
    )
}

export function SkillCard({
    name,
    skills,
    subcategories,
}: SkillCardProps) {
    return (
        <div className="bg-card rounded-2xl p-6 shadow-sm">
            <div className="w-full flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">
                    {name}
                </h3>
            </div>
            <div>
                <Skills
                    skills={skills}
                    subcategories={subcategories}
                />
            </div>
        </div>
    )
}