import useActiveSection from "@/hooks/useActiveSection";
import { useLanguageContext } from "@/hooks/useLanguage";
import { sections } from "@/config/sections"

export function Sidebar() {
  const activeSection = useActiveSection();
  const { t } = useLanguageContext();
  const currentActiveSection = activeSection

  return (
    <aside className="hidden md:flex">
      <nav
        className="w-full md:w-24 glass border-l flex-col justify-center
          md:my-0 md:mx-0
          mt-4 mx-1 rounded-2xl"
      >
        <div className="flex md:flex-col md:items-center justify-between md:justify-around h-full">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
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