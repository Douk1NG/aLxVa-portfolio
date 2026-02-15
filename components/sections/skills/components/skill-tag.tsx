import Icon from "@/components/shared/Icon"
import { SkillItem } from "@/types/skills"

export function SkillTag({ skill }: { skill: SkillItem }) {
    return (
        <div className="flex items-center gap-1.5 md:gap-2 bg-muted/50 hover:bg-muted px-2 py-1 md:px-3 md:py-1.5 rounded-lg transition-colors border border-transparent hover:border-border/50">
            <Icon icon={skill.icon} className="text-primary w-3 h-3 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-sm font-medium">{skill.name}</span>
        </div>
    )
}
