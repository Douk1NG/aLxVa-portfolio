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
  const [activeSection, setActiveSection] = useState<SectionName>(defaultSection);
  const intersectingSection = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = (window.location.hash.slice(1) || defaultSection) as SectionName;
      setActiveSection(hash);
    };

    // Set initial active section
    handleHashChange();

    // Add event listeners
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [defaultSection]);

  // Update active section based on scroll position
  useEffect(() => {
    if (intersectingSection) {
      const section = intersectingSection as SectionName;
      setActiveSection(section);
      // Update URL hash without triggering scroll
      window.history.replaceState(null, '', `#${section}`);
    }
  }, [intersectingSection]);

  return activeSection;
};

export default useActiveSection; 