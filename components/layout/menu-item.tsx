import { MenuItemProps } from "@/types/menu";
import { useLanguageContext } from "@/hooks/useLanguage";

export function MenuItem({
  section,
  onClose,
  currentSection,
}: MenuItemProps) {
  const isActive = currentSection === section.id;
  const { t } = useLanguageContext();

  return (
    <li className="w-full">
      <a
        href={`#${section.id}`}
        className={`w-full px-4 py-6 flex items-center gap-4 text-lg border-b border-border rounded-sm
          ${isActive
            ? 'bg-primary/10 text-primary font-semibold shadow-sm'
            : 'bg-background text-secondary-foreground hover:bg-secondary hover:text-primary'}
          transition-all`}
        onClick={onClose}
      >
        <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm
          ${isActive
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground'}`}>
          {section.icon}
        </span>
        <span className="truncate">{t(`nav.${section.id}`)}</span>
      </a>
    </li>
  );
}