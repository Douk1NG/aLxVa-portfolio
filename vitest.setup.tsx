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

global.ResizeObserver = ResizeObserverMock as any
window.ResizeObserver = ResizeObserverMock as any

// Mock IntersectionObserver
class IntersectionObserverMock {
    root = null
    rootMargin = ''
    thresholds = []
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn()
    constructor(public callback: any, public options: any) { }
}

global.IntersectionObserver = IntersectionObserverMock as any
window.IntersectionObserver = IntersectionObserverMock as any

// Mock MutationObserver
class MutationObserverMock {
    observe = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn()
    constructor(public callback: any) { }
}

global.MutationObserver = MutationObserverMock as any
window.MutationObserver = MutationObserverMock as any

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: React.forwardRef((props: any, ref: any) => <div {...props} ref={ref} />),
        section: React.forwardRef((props: any, ref: any) => <section {...props} ref={ref} />),
        span: React.forwardRef((props: any, ref: any) => <span {...props} ref={ref} />),
        h1: React.forwardRef((props: any, ref: any) => <h1 {...props} ref={ref} />),
        h2: React.forwardRef((props: any, ref: any) => <h2 {...props} ref={ref} />),
        p: React.forwardRef((props: any, ref: any) => <p {...props} ref={ref} />),
        a: React.forwardRef((props: any, ref: any) => <a {...props} ref={ref} />),
        button: React.forwardRef((props: any, ref: any) => <button {...props} ref={ref} />),
        li: React.forwardRef((props: any, ref: any) => <li {...props} ref={ref} />),
        ul: React.forwardRef((props: any, ref: any) => <ul {...props} ref={ref} />),
        nav: React.forwardRef((props: any, ref: any) => <nav {...props} ref={ref} />),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useScroll: () => ({ scrollY: { onChange: vi.fn() }, scrollYProgress: { onChange: vi.fn() } }),
    useTransform: () => 0,
    useSpring: () => 0,
    useReducedMotion: () => false,
    useInView: () => true, // Mock useInView to always be true for tests
}));
