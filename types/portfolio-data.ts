import type { Experience } from './experience'
import type { InfoTag } from './infotag'
import type { Translation } from './language'
import type { Project } from './project'
import type { SkillGroup } from './skills'

export type SectionTranslations = {
  en: Translation
  es: Translation
}

export type PortfolioTranslations = {
  hero: SectionTranslations
  experience: SectionTranslations
  projects: SectionTranslations
}

export type PortfolioData = {
  translations: PortfolioTranslations
  experience: Experience[]
  projects: Project[]
  skills: SkillGroup[]
  info: InfoTag[]
}
