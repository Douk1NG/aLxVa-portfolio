import PillLanguageSwitcher from "@/components/shared/PillLanguageSwitcher"
import ThemeToggle from "@/components/shared/ThemeToggle"

export function Header() {
  return (
    <header className="flex justify-end">
      <div className="flex mr-12 mt-6 items-center gap-2">
        <PillLanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}