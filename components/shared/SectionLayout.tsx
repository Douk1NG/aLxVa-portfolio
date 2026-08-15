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
        'glass-gradient section-padding-responsive rounded-3xl flex flex-col',
        'h-auto lg:h-full lg:min-h-0 lg:flex-1',
        className,
      )}
      aria-labelledby={id}
    >
      {header}
      <div className="flex flex-col lg:flex-1 lg:min-h-0">
        {children}
      </div>
    </section>
  )
}
