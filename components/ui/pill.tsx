import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const pillVariants = cva(
  'inline-flex items-center justify-center border-2 whitespace-nowrap rounded-full text-base tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-background dark:bg-foreground/85 dark:text-background',
        primary: 'border-transparent bg-primary dark:text-background',
        secondary: 'border-transparent bg-secondary dark:text-background',
        highlight: 'border-transparent bg-highlight dark:text-background',
        primaryOutline: 'border-current bg-primary/20 text-primary',
        secondaryOutline: 'border-current bg-secondary/20 text-secondary',
        highlightOutline: 'border-current bg-highlight/20 text-highlight',
      },
      size: {
        default: 'px-8 py-2 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <div className={cn(pillVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Pill.displayName = 'Pill'

export { Pill, pillVariants }
