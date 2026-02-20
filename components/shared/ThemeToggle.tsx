'use client'

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme, isMounted } = useThemeToggle();

  if (!isMounted) {
    return (
      <div className="inline-flex items-center rounded-full border bg-secondary/50 p-1 backdrop-blur-sm shadow-lg">
        <div className="h-9 w-9 animate-pulse bg-muted rounded-full" />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center rounded-full border bg-secondary/50 p-1 backdrop-blur-sm shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className={`rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300 ${resolvedTheme === 'dark'
          ? 'bg-secondary text-primary shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        title={`Current theme: ${resolvedTheme}. Click to switch.`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={resolvedTheme}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center h-4 w-4"
          >
            {resolvedTheme === 'dark' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  );
}
