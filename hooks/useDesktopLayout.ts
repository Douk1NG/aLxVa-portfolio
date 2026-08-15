import { useMediaQuery } from './useMediaQuery'

/** Matches portfolio two-column grid breakpoint (1024px) */
export function useDesktopLayout() {
  return useMediaQuery('(min-width: 1024px)')
}
