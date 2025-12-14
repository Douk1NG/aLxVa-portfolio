import Icon, { type LucideIconName } from "@/components/shared/Icon"
import { SkillGroup, SkillItem } from "@/types/skills"
import { cn } from "@/lib/utils"

// Config extracted and constant
const VARIANT_STYLES = {
    feature: "md:col-span-2 md:row-span-1 bg-linear-to-br from-card to-card/50",
    wide: "md:col-span-2",
    vertical: "md:col-span-1 md:row-span-2",
    default: "md:col-span-1",
} as const;

function BentoCard({
    title,
    icon,
    children,
    className,
}: {
    title: string
    icon?: LucideIconName
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className={cn("bg-card rounded-2xl p-5 md:p-8 flex flex-col h-full border border-border/50 hover:border-border/80 transition-all duration-300 hover:shadow-md group", className)}>
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon icon={icon} className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold tracking-tight">{title}</h3>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

function SkillTag({ skill }: { skill: SkillItem }) {
    return (
        <div className="flex items-center gap-2 md:gap-2.5 bg-muted/50 hover:bg-muted px-3 py-1.5 md:px-4 md:py-2.5 rounded-lg transition-colors border border-transparent hover:border-border/50">
            <Icon icon={skill.icon} className="text-primary w-3.5 h-3.5 md:w-5 md:h-5" />
            <span className="text-xs md:text-base font-medium">{skill.name}</span>
        </div>
    )
}

export default function BentoSkills({ skills }: { skills: SkillGroup[] }) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min grid-flow-dense">
                {skills.map((group) => (
                    <SkillGroupItem key={group.name} group={group} />
                ))}
            </div>
        </div>
    )
}

function SkillGroupItem({ group }: { group: SkillGroup }) {
    const variant = group.variant || "default";
    const className = VARIANT_STYLES[variant as keyof typeof VARIANT_STYLES] || VARIANT_STYLES.default;
    const isVertical = variant === 'vertical';

    return (
        <div className={className}>
            <BentoCard title={group.name} icon={group.icon}>
                <div className={cn("gap-2 md:gap-3", isVertical ? "flex flex-col" : "flex flex-wrap")}>
                    {group.skills.map((skill) => (
                        <SkillTag key={skill.name} skill={skill} />
                    ))}
                </div>
            </BentoCard>
        </div>
    )
}
