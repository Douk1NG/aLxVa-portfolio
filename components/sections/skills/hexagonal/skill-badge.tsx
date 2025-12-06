import { SkillItem } from "@/types/skills"
import * as LucideIcons from "lucide-react"
import { LucideIcon } from "lucide-react"



interface SkillBadgeProps {
    skill: SkillItem
}

export function SkillBadge({ skill }: SkillBadgeProps) {
    const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons] as LucideIcon

    return (
        <div
            className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition-colors relative"
        >
            <Icon className="text-primary" size={16} />
            <span className="text-sm text-muted-foreground">{skill.name}</span>
            {/* level indicator removed */}
        </div>
    )
}
