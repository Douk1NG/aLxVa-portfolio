import {
  PortfolioTheme,
  PortfolioThemeId,
} from '@/types/theme'

export const PORTFOLIO_THEMES: PortfolioTheme[] = [
  {
    id: 'charred-oxblood',
    label: 'Charred Oxblood',
    swatch:
      'linear-gradient(135deg, #9ca83e 0%, #3a5229 55%, #070807 100%)',
  },
  {
    id: 'deep-plum',
    label: 'Deep Plum',
    swatch:
      'linear-gradient(135deg, #cfa0cd 0%, #702f9c 50%, #14161d 100%)',
  },
  {
    id: 'burnt-steel',
    label: 'Burnt Steel',
    swatch:
      'linear-gradient(135deg, #809ab3 0%, #418f99 45%, #1e2821 100%)',
  },
]

export const PORTFOLIO_THEME_IDS: PortfolioThemeId[] =
  PORTFOLIO_THEMES.map((theme) => theme.id)

export const DEFAULT_THEME_ID: PortfolioThemeId =
  'charred-oxblood'

export function getNextThemeId(
  current: PortfolioThemeId,
): PortfolioThemeId {
  const index = PORTFOLIO_THEME_IDS.indexOf(current)
  return PORTFOLIO_THEME_IDS[
    (index + 1) % PORTFOLIO_THEME_IDS.length
  ]
}
