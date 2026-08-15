import HeroSection from './hero/hero-section'
import ExperienceSection from './experience/experience-section'
import ProjectsSection from './projects/projects-section'
import ScrollReveal from '@/components/shared/ScrollReveal'

export function PortfolioSection() {
  return (
    <div
      className="w-full h-auto lg:h-full min-h-0 flex flex-col"
      style={{
        padding: 'var(--section-padding)',
      }}
    >
      <div className="portfolio-grid portfolio-grid-fill">
        <ScrollReveal
          index={0}
          className="hero-column h-auto lg:h-full min-h-0 min-w-0"
        >
          <aside className="h-auto lg:h-full min-h-0 min-w-0 w-full">
            <HeroSection />
          </aside>
        </ScrollReveal>
        <section
          className="content-column flex flex-col h-auto lg:h-full min-h-0 min-w-0"
          style={{
            gap: 'var(--content-gap)',
          }}
        >
          <ScrollReveal
            index={1}
            className="flex-none lg:flex-1 min-h-0 flex flex-col"
          >
            <ExperienceSection />
          </ScrollReveal>
          <ScrollReveal
            index={2}
            className="flex-none lg:flex-1 min-h-0 flex flex-col"
          >
            <ProjectsSection />
          </ScrollReveal>
        </section>
      </div>
    </div>
  )
}
