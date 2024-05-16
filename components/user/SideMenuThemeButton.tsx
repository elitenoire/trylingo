'use client'

import { Button, type ButtonProps } from '@/components/ui/button'
import { useThemeToggle } from '@/components/theme/useToggle'

export function SideMenuThemeButton({ className, ...props }: ButtonProps) {
  const { isDark, toggle, hydrated, theme } = useThemeToggle()

  return (
    <Button
      variant="ghost"
      className="h-auto w-full justify-start py-2 text-foreground/85 sm:max-lg:w-auto sm:max-lg:px-2"
      title="Toggle theme"
      {...props}
      onClick={toggle}
    >
      <span
        className={`flex size-10 items-center justify-center rounded-full text-3xl ${hydrated ? '' : 'bg-loading'}`}
      >
        {hydrated && (isDark ? '🌛' : '🌞')}
      </span>
      <span className="ml-5 truncate sm:max-lg:sr-only">
        <span className="text-muted-foreground/85">Theme: </span>
        {hydrated && theme}
      </span>
    </Button>
  )
}
