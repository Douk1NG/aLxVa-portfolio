import { portfolioData } from '@/data/portfolio'
import { Translation } from '@/types/language'

const en: Translation = {
  'experience.title': 'Work Experience',
  'experience.description':
    'My professional journey has been a playground for learning and growing as a developer, but also a reality check that comes with working in teams, building real products, and meeting deadlines.',
  ...portfolioData.translations.experience.en,
  'experience.description_label': 'Key Responsibilities',
  'experience.skills_label': 'Tech Stack',
  'experience.footer_note':
    'Detailed overview of the role and achievements during this period.',
  'experience.details': 'Details',
}

const es: Translation = {
  'experience.title': 'Experiencia Laboral',
  'experience.description':
    'Mi trayectoria profesional ha sido un espacio para aprender y crecer como desarrollador, pero también un golpe de realidad al trabajar en equipo, desarrollar productos reales y cumplir plazos.',
  ...portfolioData.translations.experience.es,
  'experience.description_label': 'Responsabilidades Clave',
  'experience.skills_label': 'Tecnologías',
  'experience.footer_note':
    'Resumen detallado del rol y logros durante este periodo.',
  'experience.details': 'Detalles',
}

const experienceTranslations = { en, es }
export default experienceTranslations
