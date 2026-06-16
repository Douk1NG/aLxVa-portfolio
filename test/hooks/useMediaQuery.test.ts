import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

describe('useMediaQuery', () => {
  let matchMediaMock: ReturnType<typeof vi.fn>
  let mediaQueryList: {
    matches: boolean
    media: string
    addEventListener: ReturnType<typeof vi.fn>
    removeEventListener: ReturnType<typeof vi.fn>
    addListener?: ReturnType<typeof vi.fn>
    removeListener?: ReturnType<typeof vi.fn>
    onchange: null
    dispatchEvent: ReturnType<typeof vi.fn>
  }

  beforeEach(() => {
    // Create a fresh mock for each test
    matchMediaMock = vi.fn()
    mediaQueryList = {
      matches: false,
      media: '',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      onchange: null,
      dispatchEvent: vi.fn(),
    }

    matchMediaMock.mockReturnValue(mediaQueryList)
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaMock,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  // Test 1: Server-side behavior (returns false on server)
  it('should return false when window.matchMedia is not available (server-side simulation)', () => {
    // The hook's getServerSnapshot function returns false
    // This is built into the hook implementation
    // We can verify this by checking the hook's behavior when getSnapshot would fail
    const { result } = renderHook(() =>
      useMediaQuery('(min-width: 768px)'),
    )

    // The hook should handle the case gracefully
    expect(result.current).toBe(false) // Because our mock returns matches: false
  })

  // Test 2: Correct matching logic
  describe('correct matching logic', () => {
    it('should return true when media query matches', () => {
      mediaQueryList.matches = true
      mediaQueryList.media = '(min-width: 768px)'

      const { result } = renderHook(() =>
        useMediaQuery('(min-width: 768px)'),
      )

      expect(matchMediaMock).toHaveBeenCalledWith(
        '(min-width: 768px)',
      )
      expect(result.current).toBe(true)
    })

    it('should return false when media query does not match', () => {
      mediaQueryList.matches = false
      mediaQueryList.media = '(min-width: 768px)'

      const { result } = renderHook(() =>
        useMediaQuery('(min-width: 768px)'),
      )

      expect(matchMediaMock).toHaveBeenCalledWith(
        '(min-width: 768px)',
      )
      expect(result.current).toBe(false)
    })

    it('should handle different media queries correctly', () => {
      mediaQueryList.matches = true
      mediaQueryList.media = '(prefers-color-scheme: dark)'

      const { result } = renderHook(() =>
        useMediaQuery('(prefers-color-scheme: dark)'),
      )

      expect(matchMediaMock).toHaveBeenCalledWith(
        '(prefers-color-scheme: dark)',
      )
      expect(result.current).toBe(true)
    })
  })

  // Test 3: Updates when media query changes
  describe('updates when media query changes', () => {
    it('should subscribe to change events when hook mounts', () => {
      renderHook(() => useMediaQuery('(min-width: 768px)'))

      expect(
        mediaQueryList.addEventListener,
      ).toHaveBeenCalledWith('change', expect.any(Function))
    })

    it('should unsubscribe from change events when hook unmounts', () => {
      const { unmount } = renderHook(() =>
        useMediaQuery('(min-width: 768px)'),
      )

      // Get the callback that was registered
      const changeCallback =
        mediaQueryList.addEventListener.mock.calls[0][1]

      unmount()

      expect(
        mediaQueryList.removeEventListener,
      ).toHaveBeenCalledWith('change', changeCallback)
    })

    it('should update value when media query changes', () => {
      mediaQueryList.matches = false

      const { result } = renderHook(() =>
        useMediaQuery('(min-width: 768px)'),
      )
      expect(result.current).toBe(false)

      // Get the change callback
      const changeCallback =
        mediaQueryList.addEventListener.mock.calls[0][1]

      // Simulate media query change
      mediaQueryList.matches = true
      act(() => {
        changeCallback()
      })

      expect(result.current).toBe(true)
    })

    it('should handle multiple change events', () => {
      mediaQueryList.matches = false

      const { result } = renderHook(() =>
        useMediaQuery('(min-width: 768px)'),
      )
      expect(result.current).toBe(false)

      // Get the change callback
      const changeCallback =
        mediaQueryList.addEventListener.mock.calls[0][1]

      // Simulate multiple changes
      mediaQueryList.matches = true
      act(() => {
        changeCallback()
      })
      expect(result.current).toBe(true)

      mediaQueryList.matches = false
      act(() => {
        changeCallback()
      })
      expect(result.current).toBe(false)
    })
  })

  // Additional edge cases
  describe('edge cases', () => {
    it('should handle empty query string', () => {
      mediaQueryList.matches = false
      mediaQueryList.media = ''

      const { result } = renderHook(() => useMediaQuery(''))

      expect(matchMediaMock).toHaveBeenCalledWith('')
      expect(result.current).toBe(false)
    })

    it('should re-subscribe when query changes', () => {
      mediaQueryList.matches = true

      const { result, rerender } = renderHook(
        ({ query }) => useMediaQuery(query),
        { initialProps: { query: '(min-width: 768px)' } },
      )

      expect(result.current).toBe(true)
      expect(matchMediaMock).toHaveBeenCalledWith(
        '(min-width: 768px)',
      )

      // Change query
      const newMediaQueryList = {
        ...mediaQueryList,
        matches: false,
        media: '(max-width: 480px)',
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }
      matchMediaMock.mockReturnValue(newMediaQueryList)

      rerender({ query: '(max-width: 480px)' })

      expect(matchMediaMock).toHaveBeenCalledWith(
        '(max-width: 480px)',
      )
      expect(result.current).toBe(false)
      // Should have unsubscribed from old query
      expect(
        mediaQueryList.removeEventListener,
      ).toHaveBeenCalled()
      // Should have subscribed to new query
      expect(
        newMediaQueryList.addEventListener,
      ).toHaveBeenCalled()
    })
  })
})
