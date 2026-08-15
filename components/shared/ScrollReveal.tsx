import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  index?: number
  delayStep?: number
  offsetY?: number
}

export default function ScrollReveal({
  children,
  className,
  index = 0,
  delayStep = 0.08,
  offsetY = 24,
}: ScrollRevealProps) {
  const ref = useScrollReveal({ index, delayStep, offsetY })

  return (
    <div
      ref={ref}
      className={cn('scroll-reveal', className)}
    >
      {children}
    </div>
  )
}
