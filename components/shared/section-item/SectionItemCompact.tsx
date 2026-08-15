import { MousePointerClick } from 'lucide-react'
import { ReactNode } from 'react'

type SectionItemCompactProps = {
  title: string
  children: ReactNode
  detailsLabel?: string
}

export function SectionItemCompact({
  title,
  children,
  detailsLabel = 'Details',
}: SectionItemCompactProps) {
  return (
    <div className="hover:cursor-pointer p-5 sm:p-6 rounded-2xl border border-border/70 bg-card/80 hover:border-primary/50 transition-[border-color,box-shadow,transform] duration-300 h-full flex flex-col gap-3 group-hover:shadow-lg relative overflow-hidden group/compact min-h-0 glow-hover">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover/compact:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />

      <h3 className="font-display font-bold text-card-title text-foreground group-hover/compact:text-primary transition-colors leading-snug relative shrink-0 line-clamp-2 text-pretty">
        {title}
      </h3>

      <div className="relative flex-1 min-h-0 min-w-0 text-muted-foreground">
        {children}
      </div>

      <div className="relative flex items-center justify-end gap-2 shrink-0 pt-1">
        <span className="text-[10px] font-black text-primary uppercase tracking-wider">
          {detailsLabel}
        </span>
        <MousePointerClick
          className="size-4 text-primary"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
