'use client'

import { Button } from '@/components/ui/button';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';

const PillLanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguageSwitcher();

  return (
    <div className="inline-flex items-center rounded-full border  bg-secondary/30 p-1 backdrop-blur-sm shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        disabled={language === 'en'}
        onClick={() => language !== 'en' && toggleLanguage()}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 disabled:opacity-100 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-foreground hover:bg-primary/20 hover:text-primary'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        disabled={language === 'es'}
        onClick={() => language !== 'es' && toggleLanguage()}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 disabled:opacity-100 ${
          language === 'es'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-foreground hover:bg-primary/20 hover:text-primary'
        }`}
      >
        ES
      </Button>
    </div>
  );
};

export default PillLanguageSwitcher;