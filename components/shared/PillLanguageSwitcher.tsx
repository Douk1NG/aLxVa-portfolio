'use client'

import { Button } from '@/components/ui/button';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';

import { motion } from 'framer-motion';

const PillLanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguageSwitcher();

  return (
    <div className="inline-flex items-center rounded-full border bg-secondary/30 p-1 backdrop-blur-sm shadow-lg relative h-11">
      <Button
        variant="ghost"
        size="sm"
        disabled={language === 'en'}
        onClick={() => language !== 'en' && toggleLanguage()}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 disabled:opacity-100 relative z-10 w-14 ${language === 'en' ? 'text-primary-foreground' : 'text-foreground hover:text-primary'
          }`}
      >
        EN
        {language === 'en' && (
          <motion.span
            layoutId="active-pill"
            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        disabled={language === 'es'}
        onClick={() => language !== 'es' && toggleLanguage()}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 disabled:opacity-100 relative z-10 w-14 ${language === 'es' ? 'text-primary-foreground' : 'text-foreground hover:text-primary'
          }`}
      >
        ES
        {language === 'es' && (
          <motion.span
            layoutId="active-pill"
            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Button>
    </div>
  );
};

export default PillLanguageSwitcher;