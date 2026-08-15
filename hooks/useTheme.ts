import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  DEFAULT_THEME_ID,
  getNextThemeId,
  PORTFOLIO_THEMES,
} from '@/data/portfolio-themes'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  PortfolioThemeId,
  THEME_ROTATION_MS,
  ThemeContextType,
} from '@/types/theme'

export const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined)

function applyThemeToDocument(themeId: PortfolioThemeId) {
  document.documentElement.dataset.theme = themeId
}

export function useThemeProvider(): ThemeContextType {
  const [themeId, setThemeIdState] =
    useState<PortfolioThemeId>(DEFAULT_THEME_ID)
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)',
  )

  const setTheme = useCallback((id: PortfolioThemeId) => {
    setThemeIdState(id)
  }, [])

  const nextTheme = useCallback(() => {
    setThemeIdState((current) => getNextThemeId(current))
  }, [])

  useEffect(() => {
    applyThemeToDocument(themeId)
  }, [themeId])

  useEffect(() => {
    if (prefersReducedMotion) return

    let intervalId:
      | ReturnType<typeof setInterval>
      | undefined

    const startRotation = () => {
      intervalId = setInterval(() => {
        setThemeIdState((current) =>
          getNextThemeId(current),
        )
      }, THEME_ROTATION_MS)
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
  }, [prefersReducedMotion, themeId])

  return {
    themeId,
    themes: PORTFOLIO_THEMES,
    setTheme,
    nextTheme,
  }
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
