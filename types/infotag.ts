import type { LucideIcon } from "lucide-react";
import type { SvgIcon } from "./svgIcons";

export type InfoTag = {
    icon: LucideIcon | SvgIcon
    titleKey: string
    href?: string
}
