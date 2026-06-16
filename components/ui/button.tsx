import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { type ButtonProps } from '@/types/ui/button-props'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-indicator disabled:pointer-events-none disabled:opacity-50 [will-change:transform]',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow glow-hover transition-all duration-[var(--duration-normal)] hover:scale-[1.03] hover:bg-primary/90 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[hsl(var(--primary-cyan,185_95%_50%))] before:via-[hsl(var(--primary-purple,270_85%_65%))] before:to-[hsl(var(--primary-cyan,185_95%_50%))] before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-[var(--duration-normal)]',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm transition-all duration-[var(--duration-normal)] hover:scale-[1.03] hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm transition-all duration-[var(--duration-normal)] hover:scale-[1.03] hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm transition-all duration-[var(--duration-normal)] hover:scale-[1.03] hover:bg-secondary/80',
        ghost:
          'transition-all duration-[var(--duration-normal)] hover:scale-[1.03] hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { className, variant, size, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
export type { ButtonProps }
