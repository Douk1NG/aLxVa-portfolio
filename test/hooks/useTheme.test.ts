import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useThemeProvider } from '@/hooks/useTheme'
import { THEME_ROTATION_MS } from '@/types/theme'

describe('useThemeProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    document.documentElement.dataset.theme = ''
  })

  afterEach(() => {
    vi.useRealTimers()
    document.documentElement.dataset.theme = ''
  })

  it('applies the active theme to the document element', () => {
    const { result } = renderHook(() => useThemeProvider())

    expect(document.documentElement.dataset.theme).toBe(
      'charred-oxblood',
    )

    act(() => {
      result.current.setTheme('deep-plum')
    })

    expect(document.documentElement.dataset.theme).toBe(
      'deep-plum',
    )
  })

  it('advances to the next theme', () => {
    const { result } = renderHook(() => useThemeProvider())

    act(() => {
      result.current.nextTheme()
    })

    expect(result.current.themeId).toBe('deep-plum')
  })

  it('auto-rotates themes on an interval', () => {
    const { result } = renderHook(() => useThemeProvider())

    act(() => {
      vi.advanceTimersByTime(THEME_ROTATION_MS)
    })

    expect(result.current.themeId).toBe('deep-plum')
  })
})
