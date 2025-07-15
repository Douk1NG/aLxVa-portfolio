'use client'

import { type ReactNode } from 'react';
import { useLanguageProvider, LanguageContext } from '@/hooks/useLanguage';
import { type LanguageContextType } from '@/types/language';

/**
 * Props for the LanguageProvider component
 */
export type LanguageProviderProps = {
  /** Child components to be wrapped with language context */
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