import { portfolioData } from '@/data/portfolio'
import { Translation } from '@/types/language'

const en: Translation = {
  'projects.title': 'Featured Projects',
  'projects.description':
    'Some of my recent work and side projects',
  'projects.code': 'Code',
  'projects.demo': 'Demo',
  ...portfolioData.translations.projects.en,
  'projects.description_label': 'About the project',
  'projects.tech_stack_label': 'Technologies Used',
  'projects.details': 'Details',
  'projects.footer_title': 'Open Source',
  'projects.footer_description':
    'Review the complete source code on GitHub for documentation and architectural patterns.',
}
const es: Translation = {
  'projects.title': 'Proyectos Destacados',
  'projects.description':
    'Algunos de mis trabajos recientes y proyectos personales',
  'projects.code': 'Código',
  'projects.demo': 'Demo',
  ...portfolioData.translations.projects.es,
  'projects.description_label': 'Sobre el proyecto',
  'projects.tech_stack_label': 'Tecnologías Utilizadas',
  'projects.details': 'Detalles',
  'projects.footer_title': 'Código Abierto',
  'projects.footer_description':
    'Revisa el código fuente completo en GitHub para documentarte sobre los patrones arquitectónicos utilizados.',
}

const projectsTranslations = { en, es }
export default projectsTranslations
