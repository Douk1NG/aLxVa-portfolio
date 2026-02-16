import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//** Prepends the base path to an asset URL if needed.
// example: getAssetPath('github_light.svg') => '/github_light.svg' */
export function getAssetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (path.startsWith('http') || path.startsWith('//')) return removeDoubleSlashes(path)
  return removeDoubleSlashes(`${basePath}${path.startsWith('/') ? path : `/${path}`}`)
}

//** Removes double slashes from a url.
// example: url//example//path => url/example/path */
export function removeDoubleSlashes(str: string) {
  return str.replace(/\/\//g, '/')
}