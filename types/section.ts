import { ReactNode } from 'react';

export type SectionName = 'about' | 'journey' | 'skills' | 'contact';

export type Section = {
  id: SectionName;
  label: string;
  icon: ReactNode;
  component: ReactNode;
}