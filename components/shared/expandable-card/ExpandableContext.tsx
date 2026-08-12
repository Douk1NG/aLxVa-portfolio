import { createContext, useContext } from 'react'
import { ExpandableContextType } from '@/types/shared/expandable-card'

export const ExpandableContext =
  createContext<ExpandableContextType | null>(null)

export function useExpandableContext() {
  const context = useContext(ExpandableContext)
  if (!context) {
    throw new Error(
      'Expandable components must be used within an ExpandableCardGrid',
    )
  }
  return context
}
