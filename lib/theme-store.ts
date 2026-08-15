import {
  DEFAULT_THEME_ID,
  getNextThemeId,
} from '@/data/portfolio-themes'
import { PortfolioThemeId } from '@/types/theme'

let currentThemeId: PortfolioThemeId = DEFAULT_THEME_ID
const listeners = new Set<() => void>()

export function getThemeId(): PortfolioThemeId {
  return currentThemeId
}

export function subscribeToTheme(
  callback: () => void,
): () => void {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

function notifyThemeChange() {
  listeners.forEach((callback) => callback())
}

export function applyThemeToDocument(
  themeId: PortfolioThemeId,
) {
  document.documentElement.dataset.theme = themeId
}

export function setThemeId(themeId: PortfolioThemeId) {
  if (currentThemeId === themeId) return
  currentThemeId = themeId
  applyThemeToDocument(themeId)
  notifyThemeChange()
}

export function advanceThemeId() {
  setThemeId(getNextThemeId(currentThemeId))
}

applyThemeToDocument(currentThemeId)
