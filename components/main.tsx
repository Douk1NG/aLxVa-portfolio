import { PortfolioSection } from './sections/portfolio-section'
import { motion } from 'framer-motion'

export default function Main() {
  return (
    <main className="flex-1 custom-scrollbar">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto space-y-32 min-h-screen flex flex-col"
      >
        <PortfolioSection />
      </motion.div>
    </main>
  )
}
