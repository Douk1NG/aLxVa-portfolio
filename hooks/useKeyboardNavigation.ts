import { useEffect } from 'react';
import { Section } from '@/types/section';
import useActiveSection from './useActiveSection';

/**
 * Hook to handle keyboard-based navigation between sections.
 * Optimized to use the existing active section state and provide smooth scrolling.
 * @param sections - The list of sections in the portfolio
 */
export const useKeyboardNavigation = (sections: Section[]) => {
    const activeSection = useActiveSection();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Don't trigger if the user is typing in an input or textarea
            const target = event.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }

            const isArrowDown = event.key === 'ArrowDown';
            const isArrowUp = event.key === 'ArrowUp';

            if (!isArrowDown && !isArrowUp) return;

            const currentSectionIndex = sections.findIndex((section) => section.id === activeSection);
            if (currentSectionIndex === -1) return;

            let targetIndex = currentSectionIndex;

            if (isArrowDown && currentSectionIndex < sections.length - 1) {
                targetIndex = currentSectionIndex + 1;
            } else if (isArrowUp && currentSectionIndex > 0) {
                targetIndex = currentSectionIndex - 1;
            }

            // If we are already at the target, don't do anything (though index logic above handles this)
            if (targetIndex === currentSectionIndex) return;

            // Prevent default scrolling
            event.preventDefault();

            const targetSectionId = sections[targetIndex].id;
            const targetElement = document.getElementById(targetSectionId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [sections, activeSection]);
};
