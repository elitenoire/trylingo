import { forwardRef } from 'react'
import { Check, Crown, Star, Swords } from 'lucide-react'
import { Button, type ButtonProps } from '@/components/ui/button'

import { cn } from '@/lib/utils'

const icons = {
  check: Check,
  crown: Crown,
  star: Star,
  last: Swords,
}

type ButtonBaseProps = {
  icon: keyof typeof icons
  variant: Extract<
    ButtonProps['variant'],
    'primary' | 'secondary' | 'danger' | 'super' | 'highlight' | 'golden' | 'locked'
  >
} & Omit<ButtonProps, 'size' | 'variant'>

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ icon, variant = 'locked', className, ...props }, ref) => {
    const Icon = icons[icon]
    return (
      <Button
        ref={ref}
        size="rounded"
        variant={variant}
        className={cn(
          'size-[70px] border-b-8',
          (variant === 'primary' || variant === 'secondary') && 'dark:text-white',
          className
        )}
        {...props}
      >
        <Icon className={`size-10 ${icon === 'check' ? 'stroke-[4]' : 'fill-current'}`} />
      </Button>
    )
  }
)

ButtonBase.displayName = 'ButtonBase'
