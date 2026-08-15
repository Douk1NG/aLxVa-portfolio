export const LUCIDE_ICON_NAMES = [
  'brain',
  'code-2',
  'download',
  'mail',
  'map-pin',
  'message-square',
  'shuffle',
  'users',
  'webhook',
] as const

export type LucideIconName =
  (typeof LUCIDE_ICON_NAMES)[number]

export function isLucideIconName(
  value: string,
): value is LucideIconName {
  return (LUCIDE_ICON_NAMES as readonly string[]).includes(
    value,
  )
}
