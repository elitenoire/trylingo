import type { ReactNode } from 'react'
import { MobileSheet } from '@/components/user/MobileSheet'
import { SideMenu } from '@/components/user/SideMenu'

type UserLayoutProps = {
  children: ReactNode
  userProgress: ReactNode
}

export default function UserLayout({ children, userProgress }: UserLayoutProps) {
  return (
    <div className="container flex flex-grow flex-col px-0 sm:flex-row">
      <header className="top-0 z-10 max-sm:sticky sm:w-20 lg:w-64">
        <div className="flex items-center justify-between border-b-2 border-primary-depth bg-primary p-2 text-primary-foreground/80 sm:hidden">
          <div className="w-full max-w-[300px]">{userProgress}</div>
          <MobileSheet>
            <SideMenu />
          </MobileSheet>
        </div>
        <div className="fixed inset-y-0 w-[inherit] border-r-2 max-sm:hidden">
          <SideMenu />
        </div>
      </header>
      <main className="flex flex-1 flex-row gap-6 px-6 pb-24 pt-6 sm:pb-6 lg:gap-12">
        {children}
      </main>
    </div>
  )
}
