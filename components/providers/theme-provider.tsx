import { ReactNode } from 'react'
import {
  ThemeContext,
  useThemeProvider,
  useThemeRotation,
} from '@/hooks/useTheme'

export type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  useThemeRotation()
  const contextValue = useThemeProvider()

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
