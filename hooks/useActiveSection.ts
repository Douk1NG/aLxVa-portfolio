import { useEffect, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { SectionName } from '@/types/section';

/**
 * Hook to manage the active section in the portfolio based on scroll position and URL hash
 * @param defaultSection - The default section to show when no section is active
 * @returns The currently active section name
 * @example
 * ```tsx
 * const activeSection = useActiveSection('about');
 * ```
 */
const useActiveSection = (defaultSection: SectionName = 'about'): SectionName => {
  const [activeSection, setActiveSection] = useState<SectionName>(() => {
    // Inicializar con el hash actual o el default
    if (typeof window !== 'undefined') {
      return (window.location.hash.slice(1) || defaultSection) as SectionName;
    }
    return defaultSection;
  });

  const intersectingSection = useIntersectionObserver({ threshold: 0.5 });

  // Manejar cambios de hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = (window.location.hash.slice(1) || defaultSection) as SectionName;
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [defaultSection]);

  // Update active section based on scroll position
  useEffect(() => {
    if (intersectingSection) {
      const section = intersectingSection as SectionName;

      // Usar setTimeout para evitar setState síncrono
      const timer = setTimeout(() => {
        setActiveSection(section);
        // Update URL hash without triggering scroll
        window.history.replaceState(null, '', `#${section}`);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [intersectingSection]);

  return activeSection;
};

export default useActiveSection;