import { ReactNode } from 'react';

export interface Section {
  id: string;
  label: string;
  icon: ReactNode;
  component: ReactNode;
} 