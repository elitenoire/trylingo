import NextLink from 'next/link'
import { SideMenuItem } from '@/components/user/SideMenuItem'
import { SideMenuThemeButton } from '@/components/user/SideMenuThemeButton'
import { SideMenuUserButton } from '@/components/user/SideMenuUserButton'

import LogoSVG from '@/public/logo.svg'

export function SideMenu() {
  return (
    <div className="flex h-full flex-col justify-between pt-6">
      <nav className="flex flex-col gap-6 px-4 sm:max-lg:px-2">
        <NextLink
          href="/learn"
          className="focus-visible self-start rounded-xl max-sm:ml-4 sm:max-lg:self-center lg:ml-4"
        >
          <span className="hidden sm:max-lg:block">
            <LogoSVG className="w-10 hover:animate-bounce" />
          </span>
          <span className="sm:max-lg:hidden">
            <span className="font-display text-3xl font-bold -tracking-wide text-primary">
              Lingo
            </span>
          </span>
        </NextLink>
        <ul className="flex flex-col gap-y-2">
          <SideMenuItem href="/learn" icon="learn" label="Learn" />
          <SideMenuItem href="/leaderboard" icon="leaderboard" label="Leaderboard" />
          <SideMenuItem href="/quests" icon="quests" label="Quests" />
          <SideMenuItem href="/shop" icon="shop" label="Shop" />
        </ul>
      </nav>
      <div className="space-y-2 border-t-2 px-4 pb-2 pt-2 sm:max-lg:px-2">
        <SideMenuThemeButton />
        <SideMenuUserButton />
      </div>
    </div>
  )
}
