import useActiveSection from "@/hooks/useActiveSection";
import { useLanguageContext } from "@/hooks/useLanguage";
import { useMobileNav } from "@/components/providers/mobile-nav-context";
import { sections } from "@/config/sections"

import { useMediaQuery } from "@/hooks/use-media-query"

export function Sidebar() {
  const activeSection = useActiveSection();
  const { scrollToSection, activeSection: activeSectionCtx } = useMobileNav();
  const { t } = useLanguageContext();
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Determine which active section source to use based on mode
  // Note: On first render 'isMobile' is false, so it defaults to activeSection (desktop behavior). 
  // This prevents hydration mismatch.
  const currentActiveSection = isMobile ? activeSectionCtx : activeSection

  return (
    <aside className="flex">
      <nav
        className={`
          flex w-full md:w-24 glass border-l flex-col justify-center 
          md:my-0 md:mx-0
          ${isMobile
            ? 'fixed top-0 left-0 right-0 z-50 border-b border-l-0 h-16 px-4 shadow-md'
            : 'mt-4 mx-1 rounded-2xl'}
        `}
      >
        <div className="flex md:flex-col md:items-center justify-between md:justify-around h-full">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault()
                  scrollToSection(section.id)
                }
              }}
              className="flex flex-col items-center justify-center relative group no-underline mt-2 md:mt-0"
            >
              <span
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10
                ${currentActiveSection === section.id
                    ? 'bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30'
                    : 'bg-secondary/50 text-secondary-foreground hover:bg-primary/10 hover:text-primary hover:scale-110'}`}
              >
                {section.icon}
              </span>
              <span className={`text-nowrap mt-1 flex items-center justify-center text-[10px] uppercase tracking-wider font-bold select-none transition-colors duration-300
              ${currentActiveSection === section.id
                  ? 'text-primary'
                  : 'text-muted-foreground group-hover:text-primary'}`}>
                {t(`nav.${section.id}`)}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}