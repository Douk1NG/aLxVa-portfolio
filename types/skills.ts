import type { LucideIconName } from "@/components/shared/Icon";
import type { SvgIcon } from "./svgIcons";

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

export type SkillItem = {
  name: string;
  icon?: LucideIconName;
  svg?: SvgIcon;
  category: SkillCategory;
};

export type SkillGroup = {
  name: string;
  skills: SkillItem[];
  variant?: "feature" | "vertical" | "wide" | "default";
  icon: LucideIconName;
};
