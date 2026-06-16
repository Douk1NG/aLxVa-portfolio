import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
} from 'vitest'
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react'
import { ExpandableCard } from '@/components/shared/expandable-card/ExpandableCard'
import { useExpandableContext } from '@/components/shared/expandable-card/ExpandableContext'
import React from 'react'

// Mock useExpandableContext
vi.mock(
  '@/components/shared/expandable-card/ExpandableContext',
  () => ({
    useExpandableContext: vi.fn(),
  }),
)

describe('ExpandableCard', () => {
  const setExpandedIndexMock = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render compact content on desktop', () => {
    vi.mocked(useExpandableContext).mockReturnValue({
      expandedIndex: null,
      setExpandedIndex: setExpandedIndexMock,
      isMobile: false,
    })

    render(
      <ExpandableCard
        compact={<div data-testid="compact">Compact</div>}
        expanded={
          <div data-testid="expanded">Expanded</div>
        }
        _index={1}
      />,
    )

    expect(screen.getByTestId('compact')).toBeDefined()
    expect(screen.queryByTestId('expanded')).toBeNull()
  })

  it('should render expanded content on mobile', () => {
    vi.mocked(useExpandableContext).mockReturnValue({
      expandedIndex: null,
      setExpandedIndex: setExpandedIndexMock,
      isMobile: true,
    })

    render(
      <ExpandableCard
        compact={<div data-testid="compact">Compact</div>}
        expanded={
          <div data-testid="expanded">Expanded</div>
        }
        _index={1}
      />,
    )

    expect(screen.getByTestId('expanded')).toBeDefined()
    expect(screen.queryByTestId('compact')).toBeNull()
  })

  it('should call setExpandedIndex when clicked on desktop', () => {
    vi.mocked(useExpandableContext).mockReturnValue({
      expandedIndex: null,
      setExpandedIndex: setExpandedIndexMock,
      isMobile: false,
    })

    render(
      <ExpandableCard
        compact={<div data-testid="compact">Compact</div>}
        expanded={
          <div data-testid="expanded">Expanded</div>
        }
        _index={5}
      />,
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(setExpandedIndexMock).toHaveBeenCalledWith(5)
  })
})
