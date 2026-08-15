/** Viewport breakpoints used for full-height portfolio layout tests */
export const VIEWPORT_LAYOUT_BREAKPOINTS = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  laptop: { width: 1280, height: 800 },
  desktop: { width: 1440, height: 900 },
  wide: { width: 1920, height: 1080 },
} as const

/** Class names that enforce viewport-fill layout on desktop (≥1024px) */
export const VIEWPORT_FILL_CLASSES = {
  main: 'portfolio-viewport',
  grid: 'portfolio-grid-fill',
  hero: 'lg:h-full',
  contentColumn: 'lg:h-full',
  section: 'lg:flex-1',
} as const

/** Charred Oxblood palette anchors for theme regression tests */
export const CHARRED_OXBLOOD_COLORS = {
  parchment: '#e7e3e2',
  sand: '#bba784',
  olive: '#9ca83e',
  forest: '#3a5229',
  charred: '#141c14',
  void: '#070807',
  lime: 'rgba(193, 211, 54',
} as const
