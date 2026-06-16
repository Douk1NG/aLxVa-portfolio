import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionLayoutProps = {
  children: ReactNode
  header: ReactNode
  id?: string
  className?: string
}

export function SectionLayout({
  children,
  header,
  id,
  className,
}: SectionLayoutProps) {
  return (
    <section
      className={cn(
        'glass-gradient section-padding-responsive rounded-3xl flex flex-col h-full',
        className,
      )}
      aria-labelledby={id}
    >
      {header}
      {children}
    </section>
  )
}
