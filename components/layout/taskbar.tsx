import { Section } from "@/types/section";
import useActiveSection from "@/hooks/useActiveSection";
import { useLanguageContext } from "@/hooks/useLanguage";

interface TaskbarProps {
  sections: Section[];
}

export function Taskbar({ sections }: TaskbarProps) {
  const activeSection = useActiveSection();
  const { t } = useLanguageContext();

  return (
    <nav className="hidden md:flex w-24 bg-slate-800/30 backdrop-blur-sm flex-col justify-center border-l border-slate-700/20">
      <div className="flex flex-col items-center justify-around h-full">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex flex-col items-center justify-center relative group no-underline"
          >
            <span
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10
                ${activeSection === section.id
                  ? 'bg-slate-700/50 text-white scale-110'
                  : 'text-slate-400 hover:text-slate-200 hover:scale-110'}`}
            >
              {section.icon}
            </span>
            <span className={`flex items-center justify-center text-sm font-medium select-none transition-colors duration-300
              ${activeSection === section.id
                ? 'text-white'
                : 'text-slate-400 group-hover:text-slate-200'}`}>
              {t(`nav.${section.id}`)}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}