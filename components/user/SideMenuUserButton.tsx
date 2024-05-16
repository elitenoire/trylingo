'use client'

import { ClerkLoaded, UserButton, ClerkLoading } from '@clerk/nextjs'

import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export function SideMenuUserButton() {
  return (
    <div className="relative flex h-[60px] items-center sm:max-lg:justify-center">
      <ClerkLoading>
        <span className="mx-4 size-10 rounded-full bg-loading sm:max-lg:mx-2" />
      </ClerkLoading>
      <ClerkLoaded>
        <UserButton
          appearance={{
            elements: {
              rootBox: 'w-full sm:max-lg:w-auto',
              userButtonAvatarBox: 'size-10',
              userButtonTrigger: cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full h-auto justify-start py-2 px-4 sm:max-lg:w-auto sm:max-lg:px-2'
              ),
            },
          }}
        />
      </ClerkLoaded>
      <span className="pointer-events-none absolute ml-20 font-bold uppercase text-foreground/85 sm:max-lg:sr-only">
        My Profile
      </span>
    </div>
  )
}
