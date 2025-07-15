import { useState, useEffect } from 'react'
import { type Triangle } from '@/types/triangle'

export type { Triangle }

/**
 * Configuration constants for triangle animation
 */
const TRIANGLE_CONFIG = {
  MIN_SIZE: 80,
  MAX_SIZE: 120,
  MIN_SPEED: 0.1,
  MAX_SPEED: 0.3,
  MIN_OPACITY: 0.03,
  MAX_OPACITY: 0.08,
} as const

/**
 * Hook to create and animate floating triangles in the background
 * @param count - Number of triangles to create (default: 8)
 * @returns Array of triangle objects with their current positions and properties
 * @example
 * ```tsx
 * const triangles = useFloatingTriangles(10);
 * 
 * return (
 *   <div>
 *     {triangles.map(triangle => (
 *       <Triangle key={triangle.id} {...triangle} />
 *     ))}
 *   </div>
 * );
 * ```
 */
export const useFloatingTriangles = (count: number = 8): Triangle[] => {
  const [triangles, setTriangles] = useState<Triangle[]>([])

  useEffect(() => {
    // Initialize triangles with random positions and properties
    const initialTriangles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * (TRIANGLE_CONFIG.MAX_SIZE - TRIANGLE_CONFIG.MIN_SIZE) + TRIANGLE_CONFIG.MIN_SIZE,
      rotation: Math.random() * 360,
      speed: Math.random() * (TRIANGLE_CONFIG.MAX_SPEED - TRIANGLE_CONFIG.MIN_SPEED) + TRIANGLE_CONFIG.MIN_SPEED,
      opacity: Math.random() * (TRIANGLE_CONFIG.MAX_OPACITY - TRIANGLE_CONFIG.MIN_OPACITY) + TRIANGLE_CONFIG.MIN_OPACITY
    }))

    setTriangles(initialTriangles)

    // Animation loop
    let animationFrameId: number
    let lastTime = 0

    const animate = (currentTime: number) => {
      if (lastTime === 0) {
        lastTime = currentTime
      }
      const deltaTime = currentTime - lastTime

      setTriangles(prevTriangles =>
        prevTriangles.map(triangle => ({
          ...triangle,
          y: ((triangle.y - triangle.speed * deltaTime * 0.01) + 100) % 100,
          rotation: (triangle.rotation + triangle.speed * deltaTime * 0.01) % 360 // slower rotation
        }))
      )

      lastTime = currentTime
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [count])

  return triangles
} 