import { type Section } from "@/types/section";
import useActiveSection from "@/hooks/useActiveSection";
import { useLanguageContext } from "@/hooks/useLanguage";

/**
 * Props for the Taskbar component
 */
export type TaskbarProps = {
  /** List of sections to display in the taskbar */
  sections: Section[];
};

export function Taskbar({ sections }: TaskbarProps) {
  const activeSection = useActiveSection();
  const { t } = useLanguageContext();

  return (
    <nav className="hidden md:flex w-24 bg-background border-l border-border flex-col justify-center">
      <div className="flex flex-col items-center justify-around h-full">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex flex-col items-center justify-center relative group no-underline p-2"
          >
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10
                ${activeSection === section.id
                  ? 'bg-primary text-primary-foreground scale-110 shadow-sm'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-primary hover:scale-110'}`}
            >
              {section.icon}
            </span>
            <span className={`mt-1 flex items-center justify-center text-sm font-medium select-none transition-colors duration-300
              ${activeSection === section.id
                ? 'text-primary font-semibold'
                : 'text-muted-foreground group-hover:text-primary'}`}>
              {t(`nav.${section.id}`)}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}