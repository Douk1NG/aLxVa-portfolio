import {
  describe,
  it,
  expect,
  beforeEach,
  vi,
} from 'vitest'
import { render } from '@testing-library/react'
import Main from '@/components/main'
import { LanguageProvider } from '@/components/providers/language-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import {
  VIEWPORT_LAYOUT_BREAKPOINTS,
  VIEWPORT_FILL_CLASSES,
} from '@/types/layout/viewport-layout'

type ViewportSize = {
  width: number
  height: number
}

const mockViewport = ({ width, height }: ViewportSize) => {
  Object.defineProperty(window, 'innerWidth', {
    configurable: true,
    writable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    configurable: true,
    writable: true,
    value: height,
  })

  window.matchMedia = vi
    .fn()
    .mockImplementation((query: string) => {
      const minWidthMatch = query.match(
        /min-width:\s*(\d+)px/,
      )
      const maxWidthMatch = query.match(
        /max-width:\s*(\d+)px/,
      )

      let matches = false

      if (minWidthMatch) {
        matches = width >= Number(minWidthMatch[1])
      } else if (maxWidthMatch) {
        matches = width <= Number(maxWidthMatch[1])
      }

      return {
        matches,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }
    })
}

const renderMainAtViewport = (viewport: ViewportSize) => {
  mockViewport(viewport)

  document.documentElement.style.height = `${viewport.height}px`
  document.body.style.height = `${viewport.height}px`
  document.body.style.margin = '0'

  const root = document.createElement('div')
  root.id = 'root'
  root.style.height = `${viewport.height}px`
  document.body.appendChild(root)

  return render(
    <ThemeProvider>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </ThemeProvider>,
    { container: root },
  )
}

describe('Portfolio viewport layout', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    document.body.style.height = ''
    document.documentElement.style.height = ''
  })

  const desktopViewports = [
    VIEWPORT_LAYOUT_BREAKPOINTS.laptop,
    VIEWPORT_LAYOUT_BREAKPOINTS.desktop,
    VIEWPORT_LAYOUT_BREAKPOINTS.wide,
  ]

  desktopViewports.forEach((viewport) => {
    it(`fills ${viewport.width}x${viewport.height} without document overflow`, () => {
      renderMainAtViewport(viewport)

      const main = document.querySelector('main')
      expect(main).toBeTruthy()
      expect(main?.className).toContain(
        VIEWPORT_FILL_CLASSES.main,
      )

      const grid = document.querySelector(
        '.portfolio-grid-fill',
      )
      expect(grid).toBeTruthy()

      const heroSection = document.querySelector(
        '[aria-label="Hero"]',
      )
      expect(heroSection?.className).toContain(
        VIEWPORT_FILL_CLASSES.hero,
      )

      const experienceHeading = document.getElementById(
        'experience-heading',
      )
      const projectsHeading = document.getElementById(
        'projects-heading',
      )
      expect(experienceHeading).toBeTruthy()
      expect(projectsHeading).toBeTruthy()

      expect(
        document.documentElement.scrollHeight,
      ).toBeLessThanOrEqual(viewport.height + 1)
    })
  })

  it('marks experience and projects sections as flex-grow children', () => {
    renderMainAtViewport(
      VIEWPORT_LAYOUT_BREAKPOINTS.desktop,
    )

    const experienceSection = document
      .getElementById('experience-heading')
      ?.closest('section')
    const projectsSection = document
      .getElementById('projects-heading')
      ?.closest('section')

    expect(experienceSection?.className).toContain(
      'lg:flex-1',
    )
    expect(experienceSection?.className).toContain(
      'lg:min-h-0',
    )
    expect(projectsSection?.className).toContain(
      'lg:flex-1',
    )
    expect(projectsSection?.className).toContain(
      'lg:min-h-0',
    )
  })

  it('does not force viewport-fill flex on mobile sections', () => {
    renderMainAtViewport(VIEWPORT_LAYOUT_BREAKPOINTS.mobile)

    const experienceSection = document
      .getElementById('experience-heading')
      ?.closest('section')

    expect(experienceSection?.className).toContain(
      'lg:flex-1',
    )
    expect(experienceSection?.className).not.toMatch(
      /(?:^|\s)flex-1(?:\s|$)/,
    )
  })

  it('uses stretch grid on tablet and desktop widths', () => {
    renderMainAtViewport(VIEWPORT_LAYOUT_BREAKPOINTS.tablet)

    const grid = document.querySelector(
      '.portfolio-grid-fill',
    )
    expect(grid?.className).toContain('portfolio-grid-fill')
    expect(grid?.className).toContain('portfolio-grid')
  })

  it('allows mobile overflow for stacked expanded content', () => {
    renderMainAtViewport(VIEWPORT_LAYOUT_BREAKPOINTS.mobile)

    const main = document.querySelector('main')
    expect(main?.className).toContain(
      VIEWPORT_FILL_CLASSES.main,
    )
  })
})
