import { ReactNode } from 'react'
import { LucideIcon, Layers } from 'lucide-react'
import { Skill } from '@/types/skills'
import { SkillTag } from '@/components/shared/SkillTag'

type MetaItem = {
  icon: LucideIcon
  text: string
}

type SectionItemExpandedProps = {
  title: string
  subtitle?: string
  metaItems?: MetaItem[]
  description: string
  descriptionLabel: string
  tags: Skill[]
  tagsLabel: string
  actions?: ReactNode
}

export function SectionItemExpanded(
  props: SectionItemExpandedProps,
) {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:min-h-125">
      {/* Left Column - Main Info */}
      <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 border-b lg:border-b-0 lg:border-r border-border/50">
        <header className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-overlay-title font-extrabold text-foreground tracking-tight text-balance">
                {props.title}
              </h2>
              {props.subtitle && (
                <div className="text-primary font-bold text-base sm:text-lg lg:text-xl uppercase tracking-tight">
                  {props.subtitle}
                </div>
              )}
            </div>

            {props.metaItems &&
              props.metaItems.length > 0 && (
                <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm md:text-body text-muted-foreground font-medium pt-1">
                  {props.metaItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <item.icon className="size-3 sm:size-3.5 md:size-4 text-primary/60" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              )}

            {props.actions && (
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
                {props.actions}
              </div>
            )}
          </div>
        </header>

        <section className="space-y-3 sm:space-y-4 flex-1">
          <h3 className="text-small sm:text-body font-bold uppercase tracking-[0.2em] text-primary/80 flex items-center gap-2">
            {props.descriptionLabel}
          </h3>

          <div className="text-body sm:text-lg text-foreground/80 leading-relaxed whitespace-pre-line bg-muted/20 p-5 sm:p-6 rounded-2xl border border-border/30 shadow-sm">
            {props.description}
          </div>
        </section>
      </div>

      {/* Right Column - Tags/Skills */}
      <div className="lg:col-span-5 p-5 sm:p-8 md:p-10 bg-muted/5 flex flex-col gap-6 sm:gap-8">
        <section className="space-y-4 sm:space-y-6">
          <h3 className="text-small sm:text-body font-bold uppercase tracking-[0.2em] text-primary/80 flex items-center gap-2">
            <Layers className="size-3 sm:size-3.5 md:size-4" />
            {props.tagsLabel}
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {props.tags.map((skill: Skill) => (
              <SkillTag
                key={skill.name}
                skill={skill}
                className="py-2 px-3 text-sm hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
