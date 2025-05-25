import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface UseMenuReturn {
  isOpen: boolean;
  menuRef: React.RefObject<HTMLElement | null>;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  currentSection: string;
}

export function useMenu(): UseMenuReturn {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const currentSection = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Handle body scroll
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    menuRef,
    openMenu: () => setIsOpen(true),
    closeMenu: () => setIsOpen(false),
    toggleMenu: () => setIsOpen(prev => !prev),
    currentSection,
  };
} 