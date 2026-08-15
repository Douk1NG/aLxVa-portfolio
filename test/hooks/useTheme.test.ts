import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from 'vitest'
import { renderHook, act } from '@testing-library/react'
import {
  useThemeProvider,
  useThemeId,
  useThemeRotation,
} from '@/hooks/useTheme'
import { THEME_ROTATION_MS } from '@/types/theme'
import { setThemeId } from '@/lib/theme-store'

describe('useThemeProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    setThemeId('charred-oxblood')
  })

  afterEach(() => {
    vi.useRealTimers()
    setThemeId('charred-oxblood')
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

    expect(document.documentElement.dataset.theme).toBe(
      'deep-plum',
    )
  })

  it('auto-rotates themes on an interval', () => {
    const { result } = renderHook(() => {
      useThemeRotation()
      return useThemeId()
    })

    act(() => {
      vi.advanceTimersByTime(THEME_ROTATION_MS)
    })

    act(() => {
      expect(result.current).toBe('deep-plum')
    })
    expect(document.documentElement.dataset.theme).toBe(
      'deep-plum',
    )
  })
})
