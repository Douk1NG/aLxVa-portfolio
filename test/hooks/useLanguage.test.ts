import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLanguageProvider } from '@/hooks/useLanguage'

vi.mock('@/translations', () => ({
  default: {
    en: {
      test: 'Test English',
    },
    es: {
      test: 'Test Spanish',
    },
  },
}))

describe('useLanguageProvider', () => {
  it('should initialize with default language "en"', () => {
    const { result } = renderHook(() =>
      useLanguageProvider(),
    )
    expect(result.current.language).toBe('en')
  })

  it('should change language when setLanguage is called', () => {
    const { result } = renderHook(() =>
      useLanguageProvider(),
    )

    act(() => {
      result.current.setLanguage('es')
    })

    expect(result.current.language).toBe('es')
  })

  it('should return correct translation for the current language', () => {
    const { result } = renderHook(() =>
      useLanguageProvider(),
    )

    expect(result.current.t('test')).toBe('Test English')

    act(() => {
      result.current.setLanguage('es')
    })

    expect(result.current.t('test')).toBe('Test Spanish')
  })

  it('should return the key and log a warning if translation is missing', () => {
    const consoleSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => {})
    const { result } = renderHook(() =>
      useLanguageProvider(),
    )

    expect(result.current.t('nonexistent')).toBe(
      'nonexistent',
    )
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        'Translation missing for key: nonexistent',
      ),
    )

    consoleSpy.mockRestore()
  })
})
