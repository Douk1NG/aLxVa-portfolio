import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type UseExpandableCarouselProps = {
  expandedIndex: number | null
  setExpandedIndex: (index: number | null) => void
}

export function useExpandableCarousel({
  expandedIndex,
  setExpandedIndex,
}: UseExpandableCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
    startIndex: expandedIndex ?? 0,
  })

  const scrollPrev = useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const newIndex = emblaApi.selectedScrollSnap()
    setExpandedIndex(newIndex)
  }, [emblaApi, setExpandedIndex])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (emblaApi && expandedIndex !== null) {
      if (emblaApi.selectedScrollSnap() !== expandedIndex) {
        emblaApi.scrollTo(expandedIndex, true)
      }
    }
  }, [emblaApi, expandedIndex])

  useEffect(() => {
    if (expandedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') scrollPrev()
      if (event.key === 'ArrowRight') scrollNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () =>
      window.removeEventListener('keydown', handleKeyDown)
  }, [expandedIndex, scrollPrev, scrollNext])

  return {
    emblaRef,
    scrollPrev,
    scrollNext,
  }
}
