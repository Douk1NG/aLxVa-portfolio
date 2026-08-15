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
      aria-pressed={isActive}
      className={cn(
        'group/lang-btn cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 relative z-10 w-14 hover:scale-100',
        isActive
          ? 'text-primary-foreground font-semibold hover:bg-transparent hover:text-primary-foreground'
          : 'text-muted-foreground hover:bg-primary/12 hover:text-foreground hover:shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.28)]',
      )}
    >
      {targetLanguage.toUpperCase()}
      {isActive && (
        <motion.span
          layoutId="active-pill"
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary-orange))] shadow-[0_0_16px_hsl(var(--primary)/0.5),inset_0_1px_0_hsl(var(--foreground-primary)/0.2)] transition-[box-shadow,filter] duration-300 group-hover/lang-btn:shadow-[0_0_22px_hsl(var(--primary)/0.65),inset_0_1px_0_hsl(var(--foreground-primary)/0.28)] group-hover/lang-btn:brightness-110"
          transition={{
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      )}
    </Button>
  )
}

export default LanguageToggleButton
