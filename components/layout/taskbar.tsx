import { Section } from "@/types/section";

interface TaskbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  sections: Section[];
}

export function Taskbar({ activeSection, onSectionChange, sections }: TaskbarProps) {
  const handleClick = (sectionId: string) => {
    onSectionChange(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-24 bg-slate-800/30 backdrop-blur-sm flex flex-col justify-center border-l border-slate-700/20">
      <div className="flex flex-col items-center justify-around h-full">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex flex-col items-center justify-center relative group cursor-pointer"
            onClick={() => handleClick(section.id)}
          >
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-10
                ${activeSection === section.id
                  ? 'bg-slate-700/50 text-white scale-110'
                  : 'text-slate-400 hover:text-slate-200 hover:scale-110'}`}
            >
              {section.icon}
            </button>
            <div className={`flex items-center justify-center text-sm font-medium select-none transition-colors duration-300
              ${activeSection === section.id
                ? 'text-white'
                : 'text-slate-400 group-hover:text-slate-200'}`}>
              {section.label}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
} 