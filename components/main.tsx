import { PortfolioSection } from './sections/portfolio-section'

export default function Main() {
  return (
    <main className="flex-1 portfolio-viewport min-h-0 w-full">
      <div className="portfolio-shell h-full min-h-0 flex flex-col">
        <PortfolioSection />
      </div>
    </main>
  )
}
