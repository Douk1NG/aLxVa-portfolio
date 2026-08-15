import { useReducedMotion } from 'framer-motion'

type ScrollRevealOptions = {
  index?: number
  delayStep?: number
}

export function useScrollReveal({
  index = 0,
  delayStep = 0.08,
}: ScrollRevealOptions = {}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return {
      initial: false as const,
      animate: undefined,
      whileInView: undefined,
      viewport: { once: true },
      transition: undefined,
    }
  }

  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-5%' },
    transition: {
      duration: 0.5,
      delay: index * delayStep,
      ease: [0.4, 0, 0.2, 1] as [
        number,
        number,
        number,
        number,
      ],
    },
  }
}
