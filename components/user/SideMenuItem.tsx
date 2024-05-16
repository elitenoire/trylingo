'use client'

import type { Route } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

type SideMenuItemProps = {
  label: string
  icon: string
  href: Route
  hideLabel?: boolean
}

export function SideMenuItem({ href, icon, label, hideLabel }: SideMenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <li>
      <Button
        variant={isActive ? 'active' : 'ghost'}
        className={`h-auto w-full justify-start py-2 sm:max-lg:w-auto sm:max-lg:px-2 ${isActive ? 'border-b-2' : 'text-foreground/85'}`}
        asChild
      >
        <NextLink href={href} title={label} {...(hideLabel && { 'aria-label': label })}>
          <span className="relative block size-10">
            <NextImage
              className="object-cover"
              src={`/img/icons/${icon}.svg`}
              alt={`${label} icon`}
              fill
            />
          </span>
          {!hideLabel && <span className="ml-5 truncate sm:max-lg:sr-only">{label}</span>}
        </NextLink>
      </Button>
    </li>
  )
}
