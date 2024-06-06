'use Client'

import type { Route } from 'next'
import NextLink from 'next/link'
import { type ComponentProps, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Arrow as PopoverArrow } from '@radix-ui/react-popover'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { CurrentButton } from '@/components/user/learn/LearnButton/CurrentButton'
import { ButtonBase } from '@/components/user/learn/LearnButton/ButtonBase'

type RenderTriggerProps = {
  variant: ComponentProps<typeof ButtonBase>['variant']
  current?: boolean
  completed?: boolean
  percentage?: number
  ariaLabel?: string
}

const renderTrigger = ({
  percentage,
  current,
  completed,
  variant,
  ariaLabel,
}: RenderTriggerProps) => {
  if (completed) {
    return (
      <ButtonBase
        icon={variant === 'golden' ? 'crown' : 'check'}
        variant={variant}
        aria-label="Completed Lesson"
      />
    )
  }
  if (current) {
    return (
      <CurrentButton icon="star" percentage={percentage} variant={variant} ariaLabel={ariaLabel} />
    )
  }
}

type ActiveButtonContentProps = {
  title: string
  prompt: string
  href: Route
  hrefText: string
  variant: ComponentProps<typeof ButtonBase>['variant']
}

function ActiveButtonContent({ variant, title, prompt, href, hrefText }: ActiveButtonContentProps) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-bold" style={{ color: `hsl(var(--${variant}))` }}>
        {title}
      </h3>
      <p className="mb-3 text-lg">{prompt}</p>
      <Button variant={variant} className="w-full" asChild>
        <NextLink href={href}>{hrefText}</NextLink>
      </Button>
    </div>
  )
}

type ActiveButtonProps = RenderTriggerProps & ActiveButtonContentProps

export function ActiveButton({
  title,
  prompt,
  variant,
  current,
  completed,
  percentage,
  href,
  hrefText,
  ariaLabel,
}: ActiveButtonProps) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 640px)')

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          {renderTrigger({ variant, current, completed, percentage, ariaLabel })}
        </PopoverTrigger>
        <PopoverContent className="border-2 shadow-none">
          <ActiveButtonContent
            variant={variant}
            title={title}
            href={href}
            hrefText={hrefText}
            prompt={prompt}
          />
          <PopoverArrow className="fill-border" />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {renderTrigger({ variant, current, completed, percentage, ariaLabel })}
      </DrawerTrigger>
      <DrawerContent>
        <ActiveButtonContent
          variant={variant}
          title={title}
          href={href}
          hrefText={hrefText}
          prompt={prompt}
        />
      </DrawerContent>
    </Drawer>
  )
}
