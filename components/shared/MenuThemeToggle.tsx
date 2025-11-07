'use client'

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MenuThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-10 animate-pulse bg-secondary/50 rounded-lg" />
    );
  }

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant="outline"
      className="w-full bg-secondary/50 hover:bg-secondary/80 text-primary"
    >
      {theme === 'dark' ? (
        <Moon className="w-4 h-4 mr-2" />
      ) : (
        <Sun className="w-4 h-4 mr-2" />
      )}
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
}