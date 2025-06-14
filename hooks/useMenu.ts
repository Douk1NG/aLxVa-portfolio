import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { SectionName } from '@/types/section';

/**
 * Return type for the useMenu hook
 */
interface UseMenuReturn {
  /** Whether the menu is currently open */
  isOpen: boolean;
  /** Ref to the menu element for click outside detection */
  menuRef: React.RefObject<HTMLElement | null>;
  /** Function to open the menu */
  openMenu: () => void;
  /** Function to close the menu */
  closeMenu: () => void;
  /** Function to toggle the menu state */
  toggleMenu: () => void;
  /** Currently active section in the viewport */
  currentSection: SectionName | '';
}

/**
 * Hook to manage mobile menu state and functionality
 * @returns Object containing menu state, ref, and control functions
 * @example
 * ```tsx
 * const { isOpen, menuRef, toggleMenu, currentSection } = useMenu();
 * 
 * return (
 *   <nav ref={menuRef}>
 *     <button onClick={toggleMenu}>Menu</button>
 *     {isOpen && <MenuContent />}
 *   </nav>
 * );
 * ```
 */
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

    // Handle body scroll lock when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Add click outside detection
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Cleanup event listeners and styles
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