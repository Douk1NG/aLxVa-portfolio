import { SectionName } from "../section"

export type SidebarNavItem = {
    id: SectionName;
    label: string;
    icon: React.ReactNode;
}

export type SidebarProps = {
    className?: string;
}
