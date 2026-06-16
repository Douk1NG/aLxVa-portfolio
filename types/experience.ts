import type { Skill } from './skills'

export type Experience = {
  title: string
  company: string
  location: string
  description: string
  period: string
  skills: Skill[]
  duration: {
    short: string
    long: string
  }
}
