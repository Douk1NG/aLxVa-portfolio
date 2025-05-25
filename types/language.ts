export type Language = 'en' | 'es';

export type Translation = {
  [key: string]: string;
};

export type Translations = {
  [key in Language]: Translation;
};

export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

export default {}; 