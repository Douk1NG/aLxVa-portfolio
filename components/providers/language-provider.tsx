'use client'

import { type ReactNode } from 'react';
import { useLanguageProvider, LanguageContext } from '@/hooks/useLanguage';
import { type LanguageContextType } from '@/types/language';

export type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const contextValue = useLanguageProvider();

  return (
    <LanguageContext.Provider value={contextValue as LanguageContextType}>
      {children}
    </LanguageContext.Provider>
  );
}