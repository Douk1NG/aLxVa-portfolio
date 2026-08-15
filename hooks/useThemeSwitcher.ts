import {
  useThemeContext,
  useThemeId,
} from '@/hooks/useTheme'
import { PortfolioThemeId } from '@/types/theme'

export function useThemeSwitcher() {
  const themeId = useThemeId()
  const { themes, setTheme, nextTheme } = useThemeContext()

  const isActive = (id: PortfolioThemeId) => themeId === id

  return {
    themeId,
    themes,
    setTheme,
    nextTheme,
    isActive,
  }
}
