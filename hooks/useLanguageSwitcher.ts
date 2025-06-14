import { useLanguageContext } from '@/hooks/useLanguage';
import { Language, LanguageSwitcherReturn } from '@/types/language';

/**
 * Hook to manage language switching functionality
 * @returns Object containing current language, toggle function, and translation function
 * @example
 * ```tsx
 * const { language, toggleLanguage, t } = useLanguageSwitcher();
 * 
 * return (
 *   <button onClick={toggleLanguage}>
 *     {t('switch_language')}
 *   </button>
 * );
 * ```
 */
export const useLanguageSwitcher = (): LanguageSwitcherReturn => {
  const { language, setLanguage, t } = useLanguageContext();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return {
    language,
    toggleLanguage,
    t
  };
}; 