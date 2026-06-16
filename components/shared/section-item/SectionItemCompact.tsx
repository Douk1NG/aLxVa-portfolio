import { MousePointerClick } from 'lucide-react'
import { ReactNode } from 'react'

type SectionItemCompactProps = {
  title: string
  children: ReactNode
}

export function SectionItemCompact({
  title,
  children,
}: SectionItemCompactProps) {
  return (
    <div className="hover:cursor-pointer p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 h-full flex flex-col gap-4 group-hover:shadow-lg relative overflow-hidden group/compact min-h-45 shadow-xl">
      <h3 className="font-bold text-base md:text-lg text-foreground line-clamp-2 group-hover/compact:text-primary transition-colors pr-4 leading-tight">
        {title}
      </h3>

      {children}

      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10 shadow-sm group-hover/compact:bg-primary/20 group-hover/compact:border-primary/30 transition-all duration-300">
        <span className="text-[10px] font-black text-primary/70 group-hover/compact:text-primary uppercase tracking-wider">
          Details
        </span>
        <div className="relative">
          <MousePointerClick className="size-4 text-primary animate-pulse" />
        </div>
      </div>
    </div>
  )
}
