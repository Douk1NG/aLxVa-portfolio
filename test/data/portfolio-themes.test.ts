import { describe, it, expect } from 'vitest'
import {
  DEFAULT_THEME_ID,
  getNextThemeId,
  PORTFOLIO_THEMES,
  PORTFOLIO_THEME_IDS,
} from '@/data/portfolio-themes'

describe('portfolio themes registry', () => {
  it('includes all portfolio themes', () => {
    expect(PORTFOLIO_THEME_IDS).toEqual([
      'charred-oxblood',
      'deep-plum',
      'burnt-steel',
    ])
    expect(PORTFOLIO_THEMES).toHaveLength(3)
  })

  it('defaults to charred oxblood', () => {
    expect(DEFAULT_THEME_ID).toBe('charred-oxblood')
  })

  it('cycles themes in order', () => {
    expect(getNextThemeId('charred-oxblood')).toBe(
      'deep-plum',
    )
    expect(getNextThemeId('deep-plum')).toBe('burnt-steel')
    expect(getNextThemeId('burnt-steel')).toBe(
      'charred-oxblood',
    )
  })

  it('provides swatch previews for the theme indicator', () => {
    PORTFOLIO_THEMES.forEach((theme) => {
      expect(theme.swatch).toMatch(/^linear-gradient/)
    })
  })
})
