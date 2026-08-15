export type PortfolioThemeId =
  | 'charred-oxblood'
  | 'deep-plum'
  | 'burnt-steel'

export type PortfolioTheme = {
  id: PortfolioThemeId
  label: string
  /** Mini gradient preview for the theme indicator */
  swatch: string
}

export type ThemeContextType = {
  themeId: PortfolioThemeId
  themes: PortfolioTheme[]
  setTheme: (id: PortfolioThemeId) => void
  nextTheme: () => void
}

/** How long each theme stays active before auto-rotation (ms) */
export const THEME_ROTATION_MS = 45_000
