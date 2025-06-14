import { ReactNode } from 'react';

export type SectionName = 'about' | 'experience' | 'projects' | 'skills' | 'contact';

/**
 * Section configuration type
 */
export type Section = {
  id: SectionName;
  label: string;
  icon: ReactNode;
  component: ReactNode;
} 