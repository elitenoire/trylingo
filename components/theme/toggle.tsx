'use client'

import { Sun, Moon } from 'lucide-react'
import { Button, type ButtonProps } from '@/components/ui/button'
import { useThemeToggle } from '@/components/theme/useToggle'

import { cn } from '@/lib/utils'

export function ThemeToggle({ className, ...props }: ButtonProps) {
  const { isDark, toggle, hydrated } = useThemeToggle()

  // TODO: fix layout shift from hydration
  if (!hydrated) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('text-2xl', className)}
      title="Toggle theme"
      aria-label="Toggle theme"
      {...props}
      onClick={toggle}
    >
      {isDark ? (
        <Moon className="size-[1em] fill-current" />
      ) : (
        <Sun className="size-[1em] fill-current" />
      )}
    </Button>
  )
}
