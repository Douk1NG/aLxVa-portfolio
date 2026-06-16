import type { Skill } from './skills'

export type Project = {
  title: string
  description: string
  key_description: string
  tech: Skill[]
  github: string
  demo: string
}
