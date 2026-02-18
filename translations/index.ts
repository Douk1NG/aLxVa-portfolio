import { Translations } from '@/types/language';

import NavigationTranslations from './navigation';
import ContactTranslations from './sections/contact';
import HeroTranslations from './sections/hero';
import ProjectsTranslations from './sections/projects';
import ExperienceTranslations from './sections/experience';
import SkillTranslations from './sections/skills';

import JourneyTranslations from './sections/journey';

const translations: Translations = {
  en: {
    ...NavigationTranslations.en,
    ...HeroTranslations.en,
    ...SkillTranslations.en,
    ...ProjectsTranslations.en,
    ...ExperienceTranslations.en,
    ...ContactTranslations.en,
    ...JourneyTranslations.en,
    'language.switch': 'Switch language',
  },
  es: {
    ...NavigationTranslations.es,
    ...HeroTranslations.es,
    ...SkillTranslations.es,
    ...ProjectsTranslations.es,
    ...ExperienceTranslations.es,
    ...ContactTranslations.es,
    ...JourneyTranslations.es,
    'language.switch': 'Cambiar idioma',
  },
};

export default translations;