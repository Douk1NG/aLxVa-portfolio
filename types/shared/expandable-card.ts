import { ReactNode } from 'react'

export type ExpandableCardGridProps = {
  children: ReactNode
  className?: string
}

export type ExpandableCardProps = {
  compact: ReactNode
  expanded: ReactNode
  _index?: number // Internal use
}

export type ExpandableContextType = {
  expandedIndex: number | null
  setExpandedIndex: (index: number | null) => void
  isMobile: boolean
}
