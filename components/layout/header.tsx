import { MenuIcon, X } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { MenuItem } from "./menu-item";
import { MenuProps } from "@/types/menu";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import MenuThemeToggle from "@/components/shared/MenuThemeToggle";

/** Mobile navigation header - for desktop, use the taskbar component */
export default function Header(
  { sections }: MenuProps) {
  const {
    isOpen,
    menuRef,
    openMenu,
    closeMenu,
    currentSection
  } = useMenu();

  return (
    <header className="md:hidden">
      <button
        className="fixed top-6 left-6 z-50 p-3 rounded-xl bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-colors"
        onClick={openMenu}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <MenuIcon className="w-6 h-6 text-primary" />
      </button>

      <nav
        ref={menuRef}
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 backdrop-blur-sm bg-background/60" onClick={closeMenu} />

        {/* Content */}
        <div className="relative w-full max-w-[320px] bg-card/95 shadow-xl flex flex-col overflow-auto">
          <button
            className="absolute top-6 right-6 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-primary" />
          </button>

          <div className="px-4 py-24">
            <ul className="flex flex-col w-full divide-border/20">
              {sections.map((section) => (
                <MenuItem
                  key={section.id}
                  section={section}
                  onClose={closeMenu}
                  currentSection={currentSection}
                />
              ))}
            </ul>

            {/* Settings */}
            <div className="mt-8 px-4 space-y-4">
              <LanguageSwitcher />
              <MenuThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
