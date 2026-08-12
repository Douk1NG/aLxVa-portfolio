import HeroSection from './hero/hero-section'
import ExperienceSection from './experience/experience-section'
import ProjectsSection from './projects/projects-section'

export function PortfolioSection() {
  return (
    <div
      className="w-full"
      style={{
        padding: 'var(--section-padding)',
      }}
    >
      <div className="portfolio-grid">
        <aside className="hero-column h-fit">
          <HeroSection />
        </aside>
        <section
          className="content-column flex flex-col"
          style={{
            gap: 'var(--content-gap)',
          }}
        >
          <ExperienceSection />
          <ProjectsSection />
        </section>
      </div>
    </div>
  )
}
