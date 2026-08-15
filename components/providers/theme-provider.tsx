import { ReactNode } from 'react'
import {
  ThemeContext,
  useThemeProvider,
} from '@/hooks/useTheme'

export type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const contextValue = useThemeProvider()

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
