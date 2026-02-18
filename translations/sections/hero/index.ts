import { Translation } from "@/types/language";

const general: Translation = {
    'hero.name': 'Dibey',
    'hero.surname': 'Valencia'

}
const en: Translation = {
    ...general,
    'hero.description': 'Web developer with 3+ years of experience, looking for a place where I can add value; I appreciate making new connections and fostering friendships, seeing it as an essential part of any work environment, let\'s build something great together!',
    'hero.role': 'Frontend Developer',
    'hero.location': 'Spain',
    'hero.github': 'GitHub',
    'hero.github.description': 'Check out my projects',
    'hero.linkedin': 'LinkedIn',
    'hero.linkedin.description': 'Connect with me',
    'hero.available': 'Available for work',
    'hero.email': 'Email',
    'hero.cv': 'Download CV'
}
const es: Translation = {
    ...general,
    'hero.description': 'Desarollador web con 3+ años de experiencia, busco un lugar en donde pueda aportar valor; aprecio hacer nuevas conexiones y fomentar amistades, viéndolo como una parte esencial de cualquier entorno de trabajo, ¡construyamos algo interesante juntos!',
    'hero.role': 'Frontend Developer',
    'hero.location': 'España',
    'hero.github': 'GitHub',
    'hero.github.description': 'Mira mis proyectos',
    'hero.linkedin': 'LinkedIn',
    'hero.email': 'Correo',
    'hero.cv': 'Descargar HV',
    'hero.linkedin.description': 'Conecta conmigo',
    'hero.available': 'Disponible para trabajar'
}

const heroTranslations = { en, es };
export default heroTranslations;