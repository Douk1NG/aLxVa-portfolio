import { useEffect, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const useActiveSection = (defaultSection: string = 'about') => {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);
  const intersectingSection = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || defaultSection;
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
      setActiveSection(intersectingSection);
      // Update URL hash without triggering scroll
      window.history.replaceState(null, '', `#${intersectingSection}`);
    }
  }, [intersectingSection]);

  return activeSection;
};

export default useActiveSection; 