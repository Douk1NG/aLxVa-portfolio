import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
} from 'vitest'
import { renderHook } from '@testing-library/react'
import { useExpandableCarousel } from '@/hooks/useExpandableCarousel'
import useEmblaCarousel from 'embla-carousel-react'

// Mock embla-carousel-react
vi.mock('embla-carousel-react', () => ({
  default: vi.fn(),
}))

describe('useExpandableCarousel', () => {
  const setExpandedIndexMock = vi.fn()
  const emblaApiMock = {
    scrollPrev: vi.fn(),
    scrollNext: vi.fn(),
    selectedScrollSnap: vi.fn(() => 0),
    on: vi.fn(),
    scrollTo: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useEmblaCarousel).mockReturnValue([
      vi.fn(),
      emblaApiMock as unknown as ReturnType<
        typeof useEmblaCarousel
      >[1],
    ])
  })

  it('should initialize embla carousel with correct options', () => {
    renderHook(() =>
      useExpandableCarousel({
        expandedIndex: 2,
        setExpandedIndex: setExpandedIndexMock,
      }),
    )

    expect(useEmblaCarousel).toHaveBeenCalledWith({
      loop: true,
      duration: 30,
      startIndex: 2,
    })
  })

  it('should scroll on keyboard navigation when expandedIndex is not null', () => {
    renderHook(() =>
      useExpandableCarousel({
        expandedIndex: 0,
        setExpandedIndex: setExpandedIndexMock,
      }),
    )

    const leftEvent = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
    })
    const rightEvent = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
    })

    window.dispatchEvent(leftEvent)
    expect(emblaApiMock.scrollPrev).toHaveBeenCalled()

    window.dispatchEvent(rightEvent)
    expect(emblaApiMock.scrollNext).toHaveBeenCalled()
  })

  it('should not scroll on keyboard navigation when expandedIndex is null', () => {
    renderHook(() =>
      useExpandableCarousel({
        expandedIndex: null,
        setExpandedIndex: setExpandedIndexMock,
      }),
    )

    const leftEvent = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
    })
    window.dispatchEvent(leftEvent)

    expect(emblaApiMock.scrollPrev).not.toHaveBeenCalled()
  })

  it('should call scrollTo when expandedIndex changes externally', () => {
    const { rerender } = renderHook(
      ({ expandedIndex }) =>
        useExpandableCarousel({
          expandedIndex,
          setExpandedIndex: setExpandedIndexMock,
        }),
      { initialProps: { expandedIndex: 0 } },
    )

    rerender({ expandedIndex: 1 })

    expect(emblaApiMock.scrollTo).toHaveBeenCalledWith(
      1,
      true,
    )
  })
})
