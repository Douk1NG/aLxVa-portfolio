import { cn } from "@/lib/utils"
import Icon, { type LucideIconName } from "@/components/shared/Icon"

type BentoCardProps = {
    title: string
    icon?: LucideIconName
    children: React.ReactNode
    className?: string
}

export function BentoCard({
    title,
    icon,
    children,
    className,
}: BentoCardProps) {
    return (
        <div className={cn("bg-card rounded-2xl p-4 md:p-6 flex flex-col h-full border border-border/50 hover:border-border/80 transition-all duration-300 hover:shadow-md group", className)}>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon icon={icon} className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-sm md:text-xl font-bold tracking-tight">{title}</h3>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}
