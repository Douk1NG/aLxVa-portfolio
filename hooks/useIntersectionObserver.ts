import { useEffect, useState } from 'react';
import { type SectionName } from '@/types/section';

/**
 * Props for the intersection observer hook
 */
export type UseIntersectionObserverProps = {
  /** The threshold value between 0 and 1 that triggers the intersection */
  threshold?: number;
  /** The margin around the root element */
  rootMargin?: string;
};

/**
 * Hook to observe section elements in the viewport and return the active section ID
 * @param props - Configuration options for the intersection observer
 * @param props.threshold - The threshold value between 0 and 1 that triggers the intersection (default: 0.5)
 * @param props.rootMargin - The margin around the root element (default: '0px')
 * @returns The ID of the currently intersecting section
 * @example
 * ```tsx
 * const activeSection = useIntersectionObserver({ threshold: 0.7 });
 * ```
 */
const useIntersectionObserver = ({ 
  threshold = 0.5, 
  rootMargin = '0px' 
}: UseIntersectionObserverProps = {}): SectionName | '' => {
  const [activeId, setActiveId] = useState<SectionName | ''>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id as SectionName);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Only observe elements with the data-section attribute
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return activeId;
};

export default useIntersectionObserver; 