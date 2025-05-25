'use client'

import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/hooks/useLanguage';
import { Language } from '@/types/language';

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguageContext();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      className="fixed bottom-4 left-4"
    >
      {t('language.switch')} ({language.toUpperCase()})
    </Button>
  );
}

export default LanguageSwitcher;