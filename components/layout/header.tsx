import { MenuIcon, X } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { MenuItem } from "./menu-item";
import { MenuProps } from "@/types/menu";

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
        className="fixed top-6 left-6 z-50 p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-colors"
        onClick={openMenu}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <MenuIcon className="w-6 h-6 text-white" />
      </button>

      <nav
        ref={menuRef}
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/60" onClick={closeMenu} />

        {/* Content */}
        <div className="relative h-full w-full max-w-[320px] bg-slate-800/95 shadow-xl flex flex-col">
          <button
            className="absolute top-6 right-6 p-3 rounded-xl hover:bg-slate-700/50 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="px-4 py-24">
            <ul className="flex flex-col w-full divide-slate-700/20">
              {sections.map((section) => (
                <MenuItem
                  key={section.id}
                  section={section}
                  onClose={closeMenu}
                  currentSection={currentSection}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
