'use client'

import { useTheme } from 'next-themes'

/**
 * Return type for the useHeartColor hook
 */
interface HeartColorReturn {
  /** Heart emoji that changes based on the current theme */
  heart: '🖤' | '🤍';
}

/**
 * Hook to get a theme-appropriate heart emoji
 * @returns Object containing the heart emoji
 * @example
 * ```tsx
 * const { heart } = useHeartColor();
 * 
 * return <span>{heart}</span>;
 * ```
 */
export const useHeartColor = (): HeartColorReturn => {
  const { resolvedTheme } = useTheme()

  return {
    heart: resolvedTheme === 'dark' ? '🖤' : '🤍'
  }
}