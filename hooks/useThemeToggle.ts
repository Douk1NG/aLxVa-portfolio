'use client'

import { useTheme } from 'next-themes';
import { useMounted } from './useMounted';

export function useThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const isMounted = useMounted();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return {
        resolvedTheme,
        toggleTheme,
        isMounted,
    };
}
