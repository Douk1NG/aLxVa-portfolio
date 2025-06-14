import { type ReactNode } from 'react';

/**
 * Props for the SectionHeading component
 */
export type SectionHeadingProps = {
  /** Section title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Optional icon */
  icon?: ReactNode;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
    </div>
  )
}
