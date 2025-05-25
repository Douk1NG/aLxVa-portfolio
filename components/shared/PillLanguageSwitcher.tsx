'use client'

import { Button } from '@/components/ui/button';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';

const PillLanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguageSwitcher();

  return (
    <div className="inline-flex items-center rounded-full border border-slate-600 bg-slate-800/50 p-1 backdrop-blur-sm shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => language !== 'en' && toggleLanguage()}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
          language === 'en' 
            ? 'bg-slate-600 text-white shadow-sm' 
            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => language !== 'es' && toggleLanguage()}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
          language === 'es' 
            ? 'bg-slate-600 text-white shadow-sm' 
            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
        }`}
      >
        ES
      </Button>
    </div>
  );
};

export default PillLanguageSwitcher;