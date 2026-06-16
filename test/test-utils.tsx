import React, { ReactNode } from 'react'
import {
  render,
  RenderOptions,
} from '@testing-library/react'
import { LanguageContext } from '@/hooks/useLanguage'
import {
  Language,
  LanguageContextType,
} from '@/types/language'
import { vi } from 'vitest'

// Mock translations for testing
const mockTranslations: Record<
  Language,
  Record<string, string>
> = {
  en: {
    'test.key': 'Test value in English',
    welcome: 'Welcome',
    hello: 'Hello',
  },
  es: {
    'test.key': 'Valor de prueba en español',
    welcome: 'Bienvenido',
    hello: 'Hola',
  },
}

// Create a mock language context provider
export const createMockLanguageContext = (
  overrides: Partial<LanguageContextType> = {},
): LanguageContextType => {
  const defaultContext: LanguageContextType = {
    language: 'en',
    setLanguage: () => {},
    t: (key: string) => {
      const translation = mockTranslations.en[key]
      return translation || key
    },
  }

  return { ...defaultContext, ...overrides }
}

// Wrapper component for LanguageContext
export const LanguageProviderWrapper = ({
  children,
  value,
}: {
  children: ReactNode
  value?: LanguageContextType
}) => {
  const contextValue = value || createMockLanguageContext()

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom render function with LanguageContext
export const renderWithLanguageContext = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & {
    languageContext?: LanguageContextType
  },
) => {
  const { languageContext, ...renderOptions } =
    options || {}

  const Wrapper = ({
    children,
  }: {
    children: ReactNode
  }) => (
    <LanguageProviderWrapper value={languageContext}>
      {children}
    </LanguageProviderWrapper>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// Helper to create a mock setLanguage function
export const createMockSetLanguage = () => {
  const mockFn = vi.fn()
  return mockFn
}

// Helper to create a mock translation function
export const createMockT = (language: Language = 'en') => {
  return (key: string) => {
    const translation = mockTranslations[language][key]
    return translation || key
  }
}

// Export the mock translations for use in tests
export { mockTranslations }
