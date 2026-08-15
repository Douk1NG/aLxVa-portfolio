import { isValidElement, ReactNode } from 'react'

import { createPortal } from 'react-dom'

import { X, ChevronLeft, ChevronRight } from 'lucide-react'

import { useExpandableCarousel } from '@/hooks/useExpandableCarousel'

import { useExpandableContext } from './ExpandableContext'

import { ExpandableCardProps } from '@/types/shared/expandable-card'

type ExpandableOverlayProps = {
  childrenArray: ReactNode[]

  closeExpanded: () => void
}

export function ExpandableOverlay({
  childrenArray,

  closeExpanded,
}: ExpandableOverlayProps) {
  const { expandedIndex, setExpandedIndex } =
    useExpandableContext()

  const { emblaRef, scrollPrev, scrollNext } =
    useExpandableCarousel({
      expandedIndex,

      setExpandedIndex,
    })

  if (expandedIndex === null) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center sm:p-6 lg:p-10 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={closeExpanded}
    >
      <div
        className="relative w-full max-w-5xl flex items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={scrollPrev}
          className="hidden lg:flex shrink-0 p-3 rounded-full bg-card/70 hover:bg-card border border-border shadow-lg transition-[transform,background-color,color,box-shadow] duration-200 hover:scale-110 active:scale-95 text-muted-foreground hover:text-primary"
          aria-label="Previous"
        >
          <ChevronLeft className="size-6" />
        </button>

        <div className="relative flex-1 overflow-hidden">
          <div
            className="embla"
            ref={emblaRef}
          >
            <div className="flex">
              {childrenArray.map((child, index) => {
                const isNear =
                  Math.abs(index - expandedIndex) <= 1

                return (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 flex justify-center py-4"
                  >
                    <div className="gradient-border w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl bg-card shadow-2xl animate-in zoom-in-95 duration-300 no-scrollbar relative">
                      <button
                        onClick={closeExpanded}
                        className="hover:cursor-pointer absolute top-4 right-4 z-10 p-2.5 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-[background-color,color,border-color] duration-200 border border-primary/20"
                        aria-label="Close"
                      >
                        <X className="size-5" />
                      </button>

                      {isNear &&
                        isValidElement<ExpandableCardProps>(
                          child,
                        ) &&
                        child.props.expanded}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="hidden lg:flex shrink-0 p-3 rounded-full bg-card/70 hover:bg-card border border-border shadow-lg transition-[transform,background-color,color,box-shadow] duration-200 hover:scale-110 active:scale-95 text-muted-foreground hover:text-primary"
          aria-label="Next"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>,

    document.body,
  )
}
