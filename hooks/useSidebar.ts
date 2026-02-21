import useActiveSection from "@/hooks/useActiveSection";
import { useLanguageContext } from "@/hooks/useLanguage";
import { sections } from "@/config/sections";
import { SidebarNavItem } from "@/types/layout/sidebar";

export const useSidebar = () => {
    const activeSection = useActiveSection();
    const { t } = useLanguageContext();

    const navItems: SidebarNavItem[] = sections.map((section) => ({
        id: section.id,
        label: t(`nav.${section.id}`),
        icon: section.icon,
    }));

    const isActive = (id: string) => activeSection === id;

    return {
        navItems,
        isActive,
        activeSection,
    };
};
