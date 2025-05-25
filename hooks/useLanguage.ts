'use client'
import { createContext, useContext, useCallback, useState } from 'react';
import { Language, LanguageContextType } from '@/types/language';
import translations from '@/data/translations';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageProvider = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return {
    language,
    setLanguage,
    t,
  };
};

export { LanguageContext }; 