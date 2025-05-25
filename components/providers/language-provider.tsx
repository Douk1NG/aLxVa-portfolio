'use client'

import { ReactNode } from 'react';
import { useLanguageProvider, LanguageContext } from '@/hooks/useLanguage';
import { LanguageContextType } from '@/types/language';

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const contextValue = useLanguageProvider();

  return (
    <LanguageContext.Provider value={contextValue as LanguageContextType}>
      {children}
    </LanguageContext.Provider>
  );
}