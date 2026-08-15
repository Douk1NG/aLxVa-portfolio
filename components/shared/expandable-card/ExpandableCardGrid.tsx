import {
  Children,
  Suspense,
  cloneElement,
  isValidElement,
  lazy,
  useMemo,
} from 'react'
import {
  ExpandableCardGridProps,
  ExpandableCardProps,
} from '@/types/shared/expandable-card'
import { useExpandableGrid } from '@/hooks/useExpandableGrid'
import { useDesktopLayout } from '@/hooks/useDesktopLayout'
import { cn } from '@/lib/utils'
import { ExpandableContext } from './ExpandableContext'

const ExpandableOverlay = lazy(() =>
  import('./ExpandableOverlay').then((module) => ({
    default: module.ExpandableOverlay,
  })),
)

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
  const isDesktopLayout = useDesktopLayout()
  const childrenArray = Children.toArray(children)

  const contextValue = useMemo(
    () => ({ expandedIndex, setExpandedIndex, isMobile }),
    [expandedIndex, setExpandedIndex, isMobile],
  )

  return (
    <ExpandableContext.Provider value={contextValue}>
      <div
        className={cn(
          'relative min-h-0',
          isDesktopLayout ? 'flex-1 h-full' : 'h-auto',
          className,
        )}
      >
        <div
          className={cn(
            'grid gap-4 sm:gap-6',
            isMobile
              ? 'grid-cols-1'
              : isDesktopLayout
                ? 'grid-cols-2'
                : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
            isDesktopLayout &&
              'h-full min-h-0 auto-rows-fr',
          )}
        >
          {childrenArray.map((child, index) => {
            const card =
              isValidElement<ExpandableCardProps>(child)
                ? cloneElement(child, { _index: index })
                : child

            return (
              <div
                key={index}
                className={cn(
                  isDesktopLayout && 'h-full min-h-0',
                )}
              >
                {card}
              </div>
            )
          })}
        </div>

        {!isMobile && expandedIndex !== null && (
          <Suspense fallback={null}>
            <ExpandableOverlay
              childrenArray={childrenArray}
              closeExpanded={closeExpanded}
            />
          </Suspense>
        )}
      </div>
    </ExpandableContext.Provider>
  )
}
