import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prepends the base path to an asset URL if needed.
 * Useful for static exports deployed to subfolders (like GitHub Pages).
 */
export function getAssetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (path.startsWith('http') || path.startsWith('//')) return path
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}
