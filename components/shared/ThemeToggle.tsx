'use client'

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const getIcon = () => {
    if (resolvedTheme === 'dark') return <Moon className="h-4 w-4" />;
    return <Sun className="h-4 w-4" />;
  };

  if (!mounted) {
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
            {getIcon()}
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  );
} 