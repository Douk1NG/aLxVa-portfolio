/**
 * Supported languages in the application
 */
export type Language = 'en' | 'es';

/**
 * Translation mapping for a single language
 */
export type Translation = {
  [key: string]: string;
};

/**
 * Translation mappings for all supported languages
 */
export type Translations = {
  [key in Language]: Translation;
};

/**
 * Language context type containing language state and translation function
 */
export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

/**
 * Return type for the useLanguageSwitcher hook
 */
export type LanguageSwitcherReturn = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};