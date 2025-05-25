import { MenuItemProps } from "@/types/menu";

export function MenuItem({ section, onClose, currentSection }: MenuItemProps) {
  const isActive = currentSection === section.id;

  return (
    <li className="w-full">
      <a
        href={`#${section.id}`}
        className={`w-full px-4 py-6 flex items-center gap-4 text-lg font-medium border-b border-white/10
          ${isActive
            ? 'text-white bg-slate-700/20'
            : 'text-slate-300 hover:text-white hover:bg-slate-700/10'}
          transition-all`}
        onClick={onClose}
      >
        <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
          ${isActive ? 'bg-slate-600' : 'bg-slate-700/50'}`}>
          {section.icon}
        </span>
        <span className="truncate">{section.label}</span>
      </a>
    </li>
  );
}