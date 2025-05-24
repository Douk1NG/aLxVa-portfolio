export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert"

export interface Skill {
  name: string
  level: SkillLevel
  icon: string
}
