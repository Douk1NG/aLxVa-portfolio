'use client'

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex items-center rounded-full border  bg-secondary/50 p-1 backdrop-blur-sm shadow-lg">
        <div className="h-9 w-9 animate-pulse bg-muted rounded-full" />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center rounded-full border  bg-secondary/50 p-1 backdrop-blur-sm shadow-lg">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className={`rounded-full w-9 h-9 flex items-center justify-center transition-all duration-300 ${resolvedTheme === 'dark'
          ? 'bg-secondary text-primary shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        title="theme toggle"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
} 