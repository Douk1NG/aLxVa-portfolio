import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  index?: number
  delayStep?: number
}

export default function ScrollReveal({
  children,
  className,
  index = 0,
  delayStep = 0.08,
}: ScrollRevealProps) {
  const motionProps = useScrollReveal({ index, delayStep })

  return (
    <motion.div
      className={cn(className)}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
