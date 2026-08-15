import { ExternalLink } from 'lucide-react'
import { useProjects } from '@/hooks/useProjects'
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'
import { ExpandableCardGrid } from '@/components/shared/expandable-card/ExpandableCardGrid'
import { ExpandableCard } from '@/components/shared/expandable-card/ExpandableCard'
import { SectionItemCompact } from '@/components/shared/section-item/SectionItemCompact'
import { SectionItemExpanded } from '@/components/shared/section-item/SectionItemExpanded'
import { Button } from '@/components/ui/button'
import IconSVG from '@/components/shared/IconSVG'

export default function ProjectsMain() {
  const { projectsData } = useProjects()
  const { t } = useLanguageSwitcher()

  return (
    <ExpandableCardGrid>
      {projectsData.map((project, index) => (
        <ExpandableCard
          key={index}
          compact={
            <SectionItemCompact
              title={t(project.title)}
              detailsLabel={t('projects.details')}
            >
              <p className="text-sm text-foreground/75 line-clamp-3">
                {t(project.key_description)}
              </p>
            </SectionItemCompact>
          }
          expanded={
            <SectionItemExpanded
              title={t(project.title)}
              description={t(project.description)}
              descriptionLabel={t(
                'projects.description_label',
              )}
              tags={project.tech}
              tagsLabel={t('projects.tech_stack_label')}
              actions={
                <>
                  {project.github && (
                    <Button
                      variant="link"
                      size="sm"
                      className="gap-2 h-10 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 text-muted-foreground font-semibold"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconSVG
                          name="Github"
                          className="size-5"
                        />
                        <span>{t('projects.code')}</span>
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="link"
                      size="sm"
                      className="bg-primary/10 gap-2 h-10 px-4 rounded-xl hover:bg-primary/20 hover:text-primary transition-all duration-300 text-primary font-bold"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-5" />
                        <span>{t('projects.demo')}</span>
                      </a>
                    </Button>
                  )}
                </>
              }
            />
          }
        />
      ))}
    </ExpandableCardGrid>
  )
}
