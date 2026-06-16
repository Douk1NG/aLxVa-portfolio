import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useExpandableGrid } from '@/hooks/useExpandableGrid'

// Mock the useMediaQuery hook
vi.mock('@/hooks/useMediaQuery', () => ({
  useMediaQuery: vi.fn(),
}))

import { useMediaQuery } from '@/hooks/useMediaQuery'

describe('useExpandableGrid', () => {
  let mockUseMediaQuery: ReturnType<typeof vi.fn>

  beforeEach(() => {
    // Reset all mocks
    vi.clearAllMocks()

    // Create mock for useMediaQuery
    mockUseMediaQuery = vi.mocked(useMediaQuery)
    mockUseMediaQuery.mockReturnValue(false) // Default to desktop (not mobile)
  })

  afterEach(() => {
    // Clean up any event listeners
    window.removeEventListener(
      'keydown',
      vi.fn() as EventListener,
    )
    document.body.style.overflow = ''
  })

  // Test 1: Initial state
  describe('initial state', () => {
    it('should have null expandedIndex initially', () => {
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      expect(result.current.expandedIndex).toBeNull()
      expect(result.current.isMobile).toBe(false)
    })

    it('should have closeExpanded and openExpanded functions', () => {
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      expect(typeof result.current.closeExpanded).toBe(
        'function',
      )
      expect(typeof result.current.openExpanded).toBe(
        'function',
      )
      expect(typeof result.current.setExpandedIndex).toBe(
        'function',
      )
    })
  })

  // Test 2: Open/close functions
  describe('open/close functions', () => {
    it('should open expanded card on desktop', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })

      expect(result.current.expandedIndex).toBe(2)
    })

    it('should not open expanded card on mobile', () => {
      mockUseMediaQuery.mockReturnValue(true) // Mobile
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })

      expect(result.current.expandedIndex).toBeNull()
    })

    it('should close expanded card', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      // First open
      act(() => {
        result.current.openExpanded(2)
      })
      expect(result.current.expandedIndex).toBe(2)

      // Then close
      act(() => {
        result.current.closeExpanded()
      })
      expect(result.current.expandedIndex).toBeNull()
    })

    it('should close expanded card using setExpandedIndex', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      // First open
      act(() => {
        result.current.setExpandedIndex(2)
      })
      expect(result.current.expandedIndex).toBe(2)

      // Then close
      act(() => {
        result.current.setExpandedIndex(null)
      })
      expect(result.current.expandedIndex).toBeNull()
    })

    it('should close expanded card when switching to mobile', () => {
      // Start on desktop with expanded card
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result, rerender } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })
      expect(result.current.expandedIndex).toBe(2)

      // Switch to mobile
      mockUseMediaQuery.mockReturnValue(true) // Mobile
      rerender()

      // Should automatically close when mobile
      expect(result.current.expandedIndex).toBeNull()
    })
  })

  // Test 3: Escape key handling
  describe('escape key handling', () => {
    it('should add keydown event listener when expanded on desktop', () => {
      const addEventListenerSpy = vi.spyOn(
        window,
        'addEventListener',
      )
      mockUseMediaQuery.mockReturnValue(false) // Desktop

      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      )
    })

    it('should remove keydown event listener when closed', () => {
      const removeEventListenerSpy = vi.spyOn(
        window,
        'removeEventListener',
      )
      mockUseMediaQuery.mockReturnValue(false) // Desktop

      const { result, unmount } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })

      // Get the event handler that was added
      const addEventListenerSpy = vi.spyOn(
        window,
        'addEventListener',
      )
      const handler = addEventListenerSpy.mock.calls.find(
        (call) => call[0] === 'keydown',
      )?.[1]

      unmount()

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        handler,
      )
    })

    it('should close expanded card when Escape key is pressed', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })
      expect(result.current.expandedIndex).toBe(2)

      // Simulate Escape key press
      act(() => {
        const event = new KeyboardEvent('keydown', {
          key: 'Escape',
        })
        window.dispatchEvent(event)
      })

      expect(result.current.expandedIndex).toBeNull()
    })

    it('should not close expanded card when other keys are pressed', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })
      expect(result.current.expandedIndex).toBe(2)

      // Simulate other key presses
      const keys = ['Enter', 'Space', 'Tab', 'a', '1']
      keys.forEach((key) => {
        act(() => {
          const event = new KeyboardEvent('keydown', {
            key,
          })
          window.dispatchEvent(event)
        })
        // Should still be expanded
        expect(result.current.expandedIndex).toBe(2)
      })
    })

    it('should not add event listener when expanded on mobile', () => {
      const addEventListenerSpy = vi.spyOn(
        window,
        'addEventListener',
      )
      mockUseMediaQuery.mockReturnValue(true) // Mobile

      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      // Try to open (should not work on mobile)
      act(() => {
        result.current.openExpanded(2)
      })

      expect(addEventListenerSpy).not.toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      )
    })
  })

  // Test 4: Body overflow handling
  describe('body overflow handling', () => {
    it('should hide body overflow when expanded on desktop', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      // Initial state
      expect(document.body.style.overflow).toBe('')

      act(() => {
        result.current.openExpanded(2)
      })

      expect(document.body.style.overflow).toBe('hidden')
    })

    it('should restore body overflow when closed', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })
      expect(document.body.style.overflow).toBe('hidden')

      act(() => {
        result.current.closeExpanded()
      })
      expect(document.body.style.overflow).toBe('')
    })

    it('should restore body overflow on unmount', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result, unmount } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })
      expect(document.body.style.overflow).toBe('hidden')

      unmount()
      expect(document.body.style.overflow).toBe('')
    })

    it('should not modify body overflow on mobile', () => {
      mockUseMediaQuery.mockReturnValue(true) // Mobile
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      // Try to open (should not work on mobile)
      act(() => {
        result.current.openExpanded(2)
      })

      expect(document.body.style.overflow).toBe('')
    })
  })

  // Test 5: Edge cases
  describe('edge cases', () => {
    it('should handle opening same index multiple times', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })
      expect(result.current.expandedIndex).toBe(2)

      // Open same index again
      act(() => {
        result.current.openExpanded(2)
      })
      expect(result.current.expandedIndex).toBe(2)
    })

    it('should handle opening different indices', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(2)
      })
      expect(result.current.expandedIndex).toBe(2)

      act(() => {
        result.current.openExpanded(5)
      })
      expect(result.current.expandedIndex).toBe(5)
    })

    it('should handle negative index', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(-1)
      })
      expect(result.current.expandedIndex).toBe(-1)
    })

    it('should handle zero index', () => {
      mockUseMediaQuery.mockReturnValue(false) // Desktop
      const { result } = renderHook(() =>
        useExpandableGrid(),
      )

      act(() => {
        result.current.openExpanded(0)
      })
      expect(result.current.expandedIndex).toBe(0)
    })
  })
})
