export type SkillLevel = "expert" | "advanced" | "intermediate" | "basic"

export type FrontendSubcategory = 
  | "UI Frameworks"
  | "Styling & Design"
  | "State Management"
  | "Form & Validation"
  | "Build & Tooling"

export type SkillGroup =
  | "Frontend Development"
  | "Backend & Database"
  | "DevOps & Cloud"
  | "Testing & Quality"
  | "Tools & Workflow"
  | "Soft Skills"

export interface Skill {
  name: string
  level: SkillLevel
  icon: string
  group: string
  subcategory?: string
}
