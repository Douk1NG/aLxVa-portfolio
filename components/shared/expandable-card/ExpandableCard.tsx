import { ExpandableCardProps } from '@/types/shared/expandable-card'
import { useExpandableContext } from './ExpandableContext'

export function ExpandableCard({
  compact,
  expanded,
  _index,
}: ExpandableCardProps) {
  const { setExpandedIndex, isMobile } =
    useExpandableContext()

  if (isMobile) {
    return (
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        {expanded}
      </div>
    )
  }

  return (
    <button
      onClick={() =>
        _index !== undefined && setExpandedIndex(_index)
      }
      className="text-left w-full h-full min-h-0 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl group"
    >
      {compact}
    </button>
  )
}
