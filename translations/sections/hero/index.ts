import { portfolioData } from '@/data/portfolio'
import { Translation } from '@/types/language'

const general: Translation = {}
const en: Translation = {
  ...general,
  ...portfolioData.translations.hero.en,
  'hero.github': 'GitHub',
  'hero.github.description': 'Check out my projects',
  'hero.linkedin': 'LinkedIn',
  'hero.linkedin.description': 'Connect with me',
  'hero.available': 'Available for work',
  'hero.email': 'Email',
  'hero.cv': 'Download CV',
  'hero.keyboardHint': 'Use Arrow Keys to navigate',
}
const es: Translation = {
  ...general,
  ...portfolioData.translations.hero.es,
  'hero.github': 'GitHub',
  'hero.github.description': 'Mira mis proyectos',
  'hero.linkedin': 'LinkedIn',
  'hero.email': 'Correo',
  'hero.cv': 'Descargar HV',
  'hero.linkedin.description': 'Conecta conmigo',
  'hero.available': 'Disponible para trabajar',
  'hero.keyboardHint': 'Usa las flechas para navegar',
}

const heroTranslations = { en, es }
export default heroTranslations
