import { useState, useEffect, useCallback } from 'react'
import { useMediaQuery } from './useMediaQuery'

export function useExpandableGrid() {
  const [expandedIndex, setExpandedIndex] = useState<
    number | null
  >(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [prevIsMobile, setPrevIsMobile] = useState(isMobile)

  if (isMobile !== prevIsMobile) {
    setPrevIsMobile(isMobile)
    if (isMobile && expandedIndex !== null) {
      setExpandedIndex(null)
    }
  }

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedIndex(null)
      }
    },
    [],
  )

  useEffect(() => {
    if (expandedIndex !== null && !isMobile) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
      }
    }
  }, [expandedIndex, handleKeyDown, isMobile])

  const closeExpanded = useCallback(() => {
    setExpandedIndex(null)
  }, [])

  const openExpanded = useCallback(
    (index: number) => {
      if (isMobile) return
      setExpandedIndex(index)
    },
    [isMobile],
  )

  return {
    expandedIndex,
    setExpandedIndex,
    closeExpanded,
    openExpanded,
    isMobile,
  }
}
