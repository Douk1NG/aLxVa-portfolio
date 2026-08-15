import {
  Children,
  isValidElement,
  cloneElement,
} from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ExpandableCardGridProps,
  ExpandableCardProps,
} from '@/types/shared/expandable-card'
import { useExpandableGrid } from '@/hooks/useExpandableGrid'
import { useDesktopLayout } from '@/hooks/useDesktopLayout'
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
  const prefersReducedMotion = useReducedMotion()
  const isDesktopLayout = useDesktopLayout()
  const childrenArray = Children.toArray(children)

  return (
    <ExpandableContext.Provider
      value={{ expandedIndex, setExpandedIndex, isMobile }}
    >
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
              <motion.div
                key={index}
                className={cn(
                  isDesktopLayout && 'h-full min-h-0',
                )}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 16 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: '-5%' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {card}
              </motion.div>
            )
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
