import { Translations } from '@/types/language'

import NavigationTranslations from './navigation'
import ContactTranslations from './sections/contact'
import HeroTranslations from './sections/hero'
import ProjectsTranslations from './sections/projects'
import ExperienceTranslations from './sections/experience'
import SkillTranslations from './sections/skills'

const translations: Translations = {
  en: {
    ...NavigationTranslations.en,
    ...HeroTranslations.en,
    ...SkillTranslations.en,
    ...ProjectsTranslations.en,
    ...ExperienceTranslations.en,
    ...ContactTranslations.en,
    'language.switch': 'Switch language',
  },
  es: {
    ...NavigationTranslations.es,
    ...HeroTranslations.es,
    ...SkillTranslations.es,
    ...ProjectsTranslations.es,
    ...ExperienceTranslations.es,
    ...ContactTranslations.es,
    'language.switch': 'Cambiar idioma',
  },
}

export default translations
