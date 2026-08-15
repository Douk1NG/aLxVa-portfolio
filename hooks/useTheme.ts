import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react'
import { PORTFOLIO_THEMES } from '@/data/portfolio-themes'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  advanceThemeId,
  getThemeId,
  setThemeId,
  subscribeToTheme,
} from '@/lib/theme-store'
import {
  PortfolioThemeId,
  THEME_ROTATION_MS,
  ThemeContextType,
} from '@/types/theme'

export const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined)

export function useThemeId(): PortfolioThemeId {
  return useSyncExternalStore(
    subscribeToTheme,
    getThemeId,
    getThemeId,
  )
}

export function useThemeRotation() {
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)',
  )

  useEffect(() => {
    if (prefersReducedMotion) return

    let intervalId:
      | ReturnType<typeof setInterval>
      | undefined

    const startRotation = () => {
      intervalId = setInterval(
        advanceThemeId,
        THEME_ROTATION_MS,
      )
    }

    const stopRotation = () => {
      if (intervalId) clearInterval(intervalId)
      intervalId = undefined
    }

    const handleVisibilityChange = () => {
      stopRotation()
      if (document.visibilityState === 'visible') {
        startRotation()
      }
    }

    startRotation()
    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange,
    )

    return () => {
      stopRotation()
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange,
      )
    }
  }, [prefersReducedMotion])
}

export function useThemeProvider(): ThemeContextType {
  const setTheme = useCallback((id: PortfolioThemeId) => {
    setThemeId(id)
  }, [])

  const nextTheme = useCallback(() => {
    advanceThemeId()
  }, [])

  return useMemo(
    () => ({
      themes: PORTFOLIO_THEMES,
      setTheme,
      nextTheme,
    }),
    [setTheme, nextTheme],
  )
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(
      'useThemeContext must be used within ThemeProvider',
    )
  }

  return context
}
