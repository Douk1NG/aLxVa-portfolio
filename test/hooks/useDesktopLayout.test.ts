import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
} from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDesktopLayout } from '@/hooks/useDesktopLayout'

const matchMediaMock = vi.fn()

beforeEach(() => {
  matchMediaMock.mockReset()
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: matchMediaMock,
  })
})

describe('useDesktopLayout', () => {
  it('returns true at 1024px and above', () => {
    matchMediaMock.mockImplementation((query: string) => ({
      matches: query === '(min-width: 1024px)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useDesktopLayout())
    expect(result.current).toBe(true)
  })

  it('returns false below 1024px', () => {
    matchMediaMock.mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useDesktopLayout())
    expect(result.current).toBe(false)
  })
})
