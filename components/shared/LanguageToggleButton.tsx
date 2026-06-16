import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Language } from '@/types/language'
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher'

type LanguageToggleButtonProps = {
  targetLanguage: Language
}

const LanguageToggleButton = ({
  targetLanguage,
}: LanguageToggleButtonProps) => {
  const { toggleLanguage, isActive } =
    useLanguageSwitcher(targetLanguage)

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        'cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 relative z-10 w-14',
        isActive
          ? 'text-secondary'
          : 'text-primary hover:text-foreground',
      )}
    >
      {targetLanguage.toUpperCase()}
      {isActive && (
        <motion.span
          layoutId="active-pill"
          className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.6,
          }}
        />
      )}
    </Button>
  )
}

export default LanguageToggleButton
