'use client'

import { createContext, useContext, useCallback, useState } from 'react';
import { Language, LanguageContextType } from '@/types/language';
import translations from '@/data/translations';

/**
 * Context for managing the application's language state
 * @internal
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Hook to access the language context
 * @throws {Error} If used outside of a LanguageProvider
 * @returns The language context containing current language, setter, and translation function
 * @example
 * ```tsx
 * const { language, setLanguage, t } = useLanguageContext();
 * const title = t('welcome');
 * ```
 */
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Hook to create language provider state and functionality
 * @returns Object containing language state and translation function
 * @internal
 */
export const useLanguageProvider = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const translation = translations[language][key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  }, [language]);

  return {
    language,
    setLanguage,
    t,
  };
};

export { LanguageContext }; 