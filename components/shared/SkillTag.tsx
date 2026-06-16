import { Badge } from '@/components/ui/badge'
import Icon from '@/components/shared/Icon'
import { Skill } from '@/types/skills'

import { cn } from '@/lib/utils'

export function SkillTag({
  skill,
  className,
}: {
  skill: Skill
  className?: string
}) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 bg-card/50 md:backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-sm',
        className,
      )}
    >
      <Icon
        icon={skill.icon}
        svg={skill.svg}
      />
      <span>{skill.name}</span>
    </Badge>
  )
}
