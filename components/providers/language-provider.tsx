import { useMemo, type ReactNode } from 'react'
import {
  useLanguageProvider,
  LanguageContext,
} from '@/hooks/useLanguage'
import { type LanguageContextType } from '@/types/language'

export type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const { language, setLanguage, t } = useLanguageProvider()

  const contextValue = useMemo(
    (): LanguageContextType => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  )

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}
