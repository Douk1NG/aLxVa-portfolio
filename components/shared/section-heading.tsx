import { type ReactNode } from 'react';

export type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
    </div>
  )
}
