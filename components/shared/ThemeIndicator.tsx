import { useThemeSwitcher } from '@/hooks/useThemeSwitcher'
import { cn } from '@/lib/utils'

export default function ThemeIndicator() {
  const { themes, themeId, setTheme, isActive } =
    useThemeSwitcher()

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label="Color theme"
    >
      {themes.map((theme) => {
        const active = isActive(theme.id)

        return (
          <button
            key={theme.id}
            type="button"
            onClick={() => setTheme(theme.id)}
            aria-label={theme.label}
            aria-pressed={active}
            title={theme.label}
            className={cn(
              'size-7 shrink-0 rounded-full border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
              active
                ? 'scale-110 border-foreground shadow-[0_0_0_2px_hsl(var(--primary)/0.35)]'
                : 'border-border/70 opacity-75 hover:scale-105 hover:opacity-100',
            )}
            style={{ background: theme.swatch }}
          />
        )
      })}
      <span className="sr-only">
        Current theme:{' '}
        {
          themes.find((theme) => theme.id === themeId)
            ?.label
        }
      </span>
    </div>
  )
}
