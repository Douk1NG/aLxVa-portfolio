import { useCallback, useEffect, useRef } from 'react'

type ScrollRevealOptions = {
  index?: number
  delayStep?: number
  offsetY?: number
}

function prefersReducedMotion() {
  return window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
}

function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const viewHeight =
    window.innerHeight ||
    document.documentElement.clientHeight
  const viewWidth =
    window.innerWidth ||
    document.documentElement.clientWidth

  return (
    rect.top < viewHeight &&
    rect.bottom > 0 &&
    rect.left < viewWidth &&
    rect.right > 0
  )
}

export function useScrollReveal({
  index = 0,
  delayStep = 0.08,
  offsetY = 24,
}: ScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const revealedRef = useRef(false)
  const observerRef = useRef<IntersectionObserver | null>(
    null,
  )

  const cleanupObserver = useCallback(() => {
    observerRef.current?.disconnect()
    observerRef.current = null
  }, [])

  const revealElement = useCallback(
    (element: HTMLElement) => {
      element.classList.add('scroll-reveal-visible')
      revealedRef.current = true
      cleanupObserver()
    },
    [cleanupObserver],
  )

  const tryReveal = useCallback(
    (element: HTMLElement) => {
      if (revealedRef.current) {
        element.classList.add('scroll-reveal-visible')
        return
      }

      if (prefersReducedMotion()) {
        revealElement(element)
        return
      }

      element.style.setProperty(
        '--reveal-delay',
        `${index * delayStep}s`,
      )
      element.style.setProperty(
        '--reveal-offset-y',
        `${offsetY}px`,
      )

      if (isElementInViewport(element)) {
        revealElement(element)
        return
      }

      cleanupObserver()

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            revealElement(element)
          }
        },
        { rootMargin: '-5%', threshold: 0 },
      )

      observer.observe(element)
      observerRef.current = observer
    },
    [
      cleanupObserver,
      revealElement,
      index,
      delayStep,
      offsetY,
    ],
  )

  const callbackRef = useCallback(
    (element: HTMLDivElement | null) => {
      elementRef.current = element

      if (element) {
        tryReveal(element)
      } else {
        cleanupObserver()
      }
    },
    [tryReveal, cleanupObserver],
  )

  useEffect(() => {
    const handleResize = () => {
      const element = elementRef.current
      if (!element) return
      tryReveal(element)
    }

    window.addEventListener('resize', handleResize, {
      passive: true,
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      cleanupObserver()
    }
  }, [tryReveal, cleanupObserver])

  return callbackRef
}
