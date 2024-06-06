'use client'

import { type ComponentProps, forwardRef } from 'react'
import { Gauge } from '@suyalcinkaya/gauge'
import { ButtonBase } from '@/components/user/learn/LearnButton/ButtonBase'

type CurrentButtonProps = {
  percentage?: number
  ariaLabel?: string
  icon?: ComponentProps<typeof ButtonBase>['icon']
  variant?: ComponentProps<typeof ButtonBase>['variant']
}

export const CurrentButton = forwardRef<HTMLDivElement, CurrentButtonProps>(
  ({ percentage = 0, ariaLabel, icon = 'star', variant = 'primary', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        className="focus-visible group relative inline-flex items-center justify-center rounded-full"
        aria-label={ariaLabel}
        {...props}
      >
        <div
          aria-hidden="true"
          className="absolute -top-6 z-1 transition [transition-duration:400ms] group-data-[state=closed]:scale-100 group-data-[state=open]:scale-0 group-data-[state=closed]:opacity-100 group-data-[state=open]:opacity-0"
        >
          <div
            className="animate-bounce rounded-xl border-2 bg-popover px-3 py-2 font-bold uppercase tracking-wide [animation-duration:2s]"
            style={{ color: `hsl(var(--${variant}))` }}
          >
            Start
            <div className="absolute -bottom-2 left-1/2 size-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent" />
          </div>
        </div>
        <Gauge
          value={percentage}
          size={100}
          strokeWidth={8}
          primary={`hsl(var(--${variant}))`}
          secondary="hsl(var(--border))"
          showValue={false}
          showAnimation
        />
        <div className="absolute">
          <ButtonBase role="presentation" tabIndex={-1} icon={icon} variant={variant} />
        </div>
      </div>
    )
  }
)

CurrentButton.displayName = 'CurrentButton'
