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

    const updateObservers = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => observer.observe(section));
    };

    // Initial observation
    updateObservers();

    // Observe DOM changes to catch dynamically added sections
    const mutationObserver = new MutationObserver(updateObservers);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return activeId;
};

export default useIntersectionObserver; 