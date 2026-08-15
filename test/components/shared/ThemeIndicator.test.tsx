import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from 'vitest'
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react'
import ThemeIndicator from '@/components/shared/ThemeIndicator'
import { ThemeContext } from '@/hooks/useTheme'
import { PORTFOLIO_THEMES } from '@/data/portfolio-themes'

describe('ThemeIndicator', () => {
  const setTheme = vi.fn()

  beforeEach(() => {
    setTheme.mockReset()
  })

  afterEach(() => {
    document.documentElement.dataset.theme = ''
  })

  it('renders a button for each theme', () => {
    render(
      <ThemeContext.Provider
        value={{
          themeId: 'charred-oxblood',
          themes: PORTFOLIO_THEMES,
          setTheme,
          nextTheme: vi.fn(),
        }}
      >
        <ThemeIndicator />
      </ThemeContext.Provider>,
    )

    expect(
      screen
        .getByRole('button', { name: 'Charred Oxblood' })
        .getAttribute('aria-pressed'),
    ).toBe('true')
    expect(
      screen
        .getByRole('button', { name: 'Deep Plum' })
        .getAttribute('aria-pressed'),
    ).toBe('false')
    expect(
      screen
        .getByRole('button', { name: 'Burnt Steel' })
        .getAttribute('aria-pressed'),
    ).toBe('false')
  })

  it('switches theme when a swatch is clicked', () => {
    render(
      <ThemeContext.Provider
        value={{
          themeId: 'charred-oxblood',
          themes: PORTFOLIO_THEMES,
          setTheme,
          nextTheme: vi.fn(),
        }}
      >
        <ThemeIndicator />
      </ThemeContext.Provider>,
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Burnt Steel' }),
    )

    expect(setTheme).toHaveBeenCalledWith('burnt-steel')
  })
})
