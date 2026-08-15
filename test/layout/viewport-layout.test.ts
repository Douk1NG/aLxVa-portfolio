import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  CHARRED_OXBLOOD_COLORS,
  VIEWPORT_FILL_CLASSES,
} from '@/types/layout/viewport-layout'

const readProjectFile = (relativePath: string) =>
  readFileSync(
    resolve(process.cwd(), relativePath),
    'utf-8',
  )

describe('Portfolio theme layers', () => {
  const themesCss = readProjectFile('app/styles/themes.css')
  const baseCss = readProjectFile('app/styles/base.css')

  it('defines the Charred Oxblood palette', () => {
    expect(themesCss).toContain(
      CHARRED_OXBLOOD_COLORS.parchment,
    )
    expect(themesCss).toContain(CHARRED_OXBLOOD_COLORS.sand)
    expect(themesCss).toContain(
      CHARRED_OXBLOOD_COLORS.olive,
    )
    expect(themesCss).toContain(
      CHARRED_OXBLOOD_COLORS.forest,
    )
    expect(themesCss).toContain(
      CHARRED_OXBLOOD_COLORS.charred,
    )
    expect(themesCss).toContain(CHARRED_OXBLOOD_COLORS.void)
  })

  it('defines Deep Plum palette', () => {
    expect(themesCss).toContain('#702f9c')
    expect(themesCss).toContain('#352d64')
    expect(themesCss).toContain("[data-theme='deep-plum']")
  })

  it('defines Burnt Steel palette', () => {
    expect(themesCss).toContain('#418f99')
    expect(themesCss).toContain('#809ab3')
    expect(themesCss).toContain(
      "[data-theme='burnt-steel']",
    )
  })

  it('uses shared theme layer variables in base styles', () => {
    expect(baseCss).toContain('var(--gradient-theme-base)')
    expect(baseCss).toContain(
      'var(--gradient-theme-highlights)',
    )
    expect(baseCss).toContain(
      'var(--gradient-theme-vignette)',
    )
  })
})

describe('Viewport-fill layout CSS', () => {
  const baseCss = readProjectFile('app/styles/base.css')
  const mainTsx = readProjectFile('components/main.tsx')
  const portfolioSectionTsx = readProjectFile(
    'components/sections/portfolio-section.tsx',
  )

  it('defines portfolio viewport and grid-fill utilities', () => {
    expect(baseCss).toContain('.portfolio-viewport')
    expect(baseCss).toContain('.portfolio-grid-fill')
    expect(baseCss).toContain('align-items: stretch')
    expect(baseCss).toContain('overflow: hidden')
  })

  it('allows scroll only below desktop breakpoint', () => {
    expect(baseCss).toContain('@media (max-width: 1023px)')
    expect(baseCss).toContain('overflow-y: auto')
  })

  it('scopes grid-fill height to desktop breakpoint', () => {
    expect(baseCss).toContain('@media (min-width: 1024px)')
    expect(baseCss).toMatch(
      /\.portfolio-grid-fill[\s\S]*@media \(min-width: 1024px\)[\s\S]*height:\s*100%/,
    )
  })

  it('wires viewport-fill classes in main layout', () => {
    expect(mainTsx).toContain(VIEWPORT_FILL_CLASSES.main)
    expect(mainTsx).toContain('portfolio-shell')
  })

  it('wires grid-fill and stretch classes in portfolio section', () => {
    expect(portfolioSectionTsx).toContain(
      VIEWPORT_FILL_CLASSES.grid,
    )
    expect(portfolioSectionTsx).toContain(
      VIEWPORT_FILL_CLASSES.hero,
    )
    expect(portfolioSectionTsx).toContain(
      VIEWPORT_FILL_CLASSES.contentColumn,
    )
    expect(portfolioSectionTsx).toContain(
      VIEWPORT_FILL_CLASSES.section,
    )
  })

  it('uses a wider hero column on laptop and desktop viewports', () => {
    expect(baseCss).toContain('grid-column: span 5')
    expect(baseCss).toContain('grid-column: span 7')
    expect(baseCss).toMatch(
      /@media \(min-width: 1024px\) and \(max-width: 1919px\)[\s\S]*grid-column: span 5/,
    )
    expect(baseCss).toMatch(
      /@media \(min-width: 1920px\)[\s\S]*grid-column: span 3/,
    )
  })
})
