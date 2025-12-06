export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

/**
 * Individual skill item
 */
export type SkillItem = {
  name: string;
  icon: string;
  category: SkillCategory;
};

/**
 * Subcategory of skills (e.g., "UI Frameworks")
 */
export type SkillSubcategory = {
  name: string;
  skills: SkillItem[];
};

/**
 * Top-level skill group (e.g., "Frontend Development")
 */
export type SkillGroup = {
  name: string;
  skills?: SkillItem[];
  subcategories?: SkillSubcategory[];
};
