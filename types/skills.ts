import type { IconType } from './infotag'

export type Skill = {
  name: string
} & IconType

export type SkillGroup = {
  category: string
  skills: Skill[]
}
