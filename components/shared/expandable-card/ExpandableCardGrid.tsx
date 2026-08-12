import {
  Children,
  isValidElement,
  cloneElement,
} from 'react'
import {
  ExpandableCardGridProps,
  ExpandableCardProps,
} from '@/types/shared/expandable-card'
import { useExpandableGrid } from '@/hooks/useExpandableGrid'
import { cn } from '@/lib/utils'
import { ExpandableContext } from './ExpandableContext'
import { ExpandableOverlay } from './ExpandableOverlay'

export function ExpandableCardGrid({
  children,
  className = '',
}: ExpandableCardGridProps) {
  const {
    expandedIndex,
    setExpandedIndex,
    closeExpanded,
    isMobile,
  } = useExpandableGrid()
  const childrenArray = Children.toArray(children)

  return (
    <ExpandableContext.Provider
      value={{ expandedIndex, setExpandedIndex, isMobile }}
    >
      <div className={cn('relative', className)}>
        <div
          className={cn(
            'grid gap-6',
            isMobile
              ? 'grid-cols-1'
              : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
          )}
        >
          {childrenArray.map((child, index) => {
            if (
              isValidElement<ExpandableCardProps>(child)
            ) {
              return cloneElement(child, { _index: index })
            }
            return child
          })}
        </div>

        {!isMobile && expandedIndex !== null && (
          <ExpandableOverlay
            childrenArray={childrenArray}
            closeExpanded={closeExpanded}
          />
        )}
      </div>
    </ExpandableContext.Provider>
  )
}
