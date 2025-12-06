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
  // A group can either have direct skills OR subcategories, but usually not both mixed in this specific design
  // We'll make it flexible
  skills?: SkillItem[];
  subcategories?: SkillSubcategory[];
};

// Keep the old Skill type for backward compatibility if needed, or remove it if we are sure.
// The plan said "Refactor skills-data.ts and types", implying we change the types.
// I will remove the old Skill type to force compilation errors where it's used, ensuring I catch all usages.
