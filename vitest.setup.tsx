import { vi } from 'vitest'
import '@testing-library/react'
import React from 'react'

// Mock matchMedia for use-media-query hook
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock ResizeObserver
class ResizeObserverMock {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

global.ResizeObserver = ResizeObserverMock
window.ResizeObserver = ResizeObserverMock

// Mock IntersectionObserver
class IntersectionObserverMock {
  root = null
  rootMargin = ''
  thresholds = []
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn()
  constructor(
    public callback: (
      entries: IntersectionObserverEntry[],
    ) => void,
    public options: IntersectionObserverInit,
  ) {}
}

global.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver
window.IntersectionObserver =
  IntersectionObserverMock as unknown as typeof IntersectionObserver

// Mock MutationObserver
class MutationObserverMock {
  observe = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn()
  constructor(
    public callback: (mutations: MutationRecord[]) => void,
  ) {}
}

global.MutationObserver =
  MutationObserverMock as unknown as typeof MutationObserver
window.MutationObserver =
  MutationObserverMock as unknown as typeof MutationObserver

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLDivElement>,
      ) => (
        <div
          {...props}
          ref={ref}
        />
      ),
    ),
    section: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLElement>,
      ) => (
        <section
          {...props}
          ref={ref}
        />
      ),
    ),
    span: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLSpanElement>,
      ) => (
        <span
          {...props}
          ref={ref}
        />
      ),
    ),
    h1: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLHeadingElement>,
      ) => (
        <h1
          {...props}
          ref={ref}
        />
      ),
    ),
    h2: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLHeadingElement>,
      ) => (
        <h2
          {...props}
          ref={ref}
        />
      ),
    ),
    p: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLParagraphElement>,
      ) => (
        <p
          {...props}
          ref={ref}
        />
      ),
    ),
    a: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLAnchorElement>,
      ) => (
        <a
          {...props}
          ref={ref}
        />
      ),
    ),
    button: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLButtonElement>,
      ) => (
        <button
          {...props}
          ref={ref}
        />
      ),
    ),
    li: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLLIElement>,
      ) => (
        <li
          {...props}
          ref={ref}
        />
      ),
    ),
    ul: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLUListElement>,
      ) => (
        <ul
          {...props}
          ref={ref}
        />
      ),
    ),
    nav: React.forwardRef(
      (
        props: Record<string, React.ReactNode>,
        ref: React.Ref<HTMLElement>,
      ) => (
        <nav
          {...props}
          ref={ref}
        />
      ),
    ),
  },
  AnimatePresence: ({
    children,
  }: {
    children: React.ReactNode
  }) => <>{children}</>,
  MotionConfig: ({
    children,
  }: {
    children: React.ReactNode
  }) => <>{children}</>,
  useScroll: () => ({
    scrollY: { onChange: vi.fn() },
    scrollYProgress: { onChange: vi.fn() },
  }),
  useTransform: () => 0,
  useSpring: () => 0,
  useReducedMotion: () => false,
  useInView: () => true, // Mock useInView to always be true for tests
}))
