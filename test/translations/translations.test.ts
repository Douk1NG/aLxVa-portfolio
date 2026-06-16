import { describe, it, expect } from 'vitest'
import translations from '@/translations/index'

describe('Translation parity', () => {
  const languages = Object.keys(translations)
  const enKeys = Object.keys(translations.en).sort()
  const esKeys = Object.keys(translations.es).sort()

  it('should have the same number of keys for en and es', () => {
    expect(enKeys.length).toBe(esKeys.length)
  })

  it('should have identical keys for en and es', () => {
    expect(enKeys).toEqual(esKeys)
  })

  languages.forEach((lang) => {
    it(`should not have empty values for ${lang}`, () => {
      Object.entries(
        translations[lang as keyof typeof translations],
      ).forEach(([key, value]) => {
        expect(
          value,
          `Key "${key}" in language "${lang}" is empty`,
        ).not.toBe('')
        expect(
          value,
          `Key "${key}" in language "${lang}" is undefined`,
        ).toBeDefined()
      })
    })
  })
})
