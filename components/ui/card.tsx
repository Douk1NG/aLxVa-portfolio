import * as React from 'react'

import { cn } from '@/lib/utils'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl text-card-foreground transition-all duration-300',
      // Light mode: subtle shadows and semi-transparent backgrounds with gradient border
      'bg-card/80 shadow-(--shadow-glow-card-light)',
      'hover:shadow-[var(--shadow-light-lg),var(--glow-light-md)] hover:-translate-y-0.5',
      // Gradient border for both themes (Requirement 6.3)
      'border-2 border-transparent',
      'bg-[linear-gradient(hsl(var(--card)),hsl(var(--card))),var(--gradient-border)]',
      'bg-origin-border [background-clip:padding-box,border-box]',
      // Dark mode: glass morphism with backdrop-filter and gradient border
      'dark:bg-background-elevated/15 dark:shadow-(--shadow-glow-card)',
      'dark:bg-[linear-gradient(hsl(var(--background-elevated)/0.15),hsl(var(--background-elevated)/0.15)),var(--gradient-border)]',
      // Optimize backdrop-filter for performance - only on viewports ≥768px (Requirement 7.1)
      'md:dark:backdrop-blur-md dark:hover:shadow-(--glow-md)',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5 p-[clamp(1rem,2vw+0.5rem,2rem)] max-sm:p-4',
      className,
    )}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-sm text-muted-foreground',
      className,
    )}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'p-[clamp(1rem,2vw+0.5rem,2rem)] pt-0 max-sm:p-4 max-sm:pt-0',
      className,
    )}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex items-center p-[clamp(1rem,2vw+0.5rem,2rem)] pt-0 max-sm:p-4 max-sm:pt-0',
      className,
    )}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
