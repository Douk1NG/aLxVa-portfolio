import HeroHeader from './hero-header'
import HeroMain from './hero-main'
import HeroFooter from './hero-footer'

export default function HeroSection() {
  return (
    <section
      className="glass-gradient section-padding-responsive rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left gap-8 h-fit"
      aria-label="Hero"
    >
      <HeroHeader />
      <HeroMain />
      <HeroFooter />
    </section>
  )
}
