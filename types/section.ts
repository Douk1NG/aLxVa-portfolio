import { ReactNode } from 'react';

export type SectionName = 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface Section {
  id: SectionName;
  label: string;
  icon: ReactNode;
  component: ReactNode;
} 