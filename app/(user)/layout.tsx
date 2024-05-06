import type { ReactNode } from 'react'
import { MobileSheet } from '@/components/user/MobileSheet'
import { SideMenu } from '@/components/user/SideMenu'

type UserLayoutProps = {
  main: ReactNode
}

export default function UserLayout({ main }: UserLayoutProps) {
  return (
    <div className="container flex flex-grow flex-col px-0 sm:flex-row">
      <header className="top-0 z-1 max-sm:sticky sm:w-20 lg:w-64">
        <div className="flex items-center justify-between border-b-2 border-primary-depth bg-primary p-2 text-primary-foreground sm:hidden">
          <div className="" />
          <MobileSheet>
            <SideMenu />
          </MobileSheet>
        </div>
        <div className="fixed inset-y-0 w-[inherit] border-r-2 max-sm:hidden">
          <SideMenu />
        </div>
      </header>
      <main className="flex flex-1 flex-row gap-6 px-6 pb-24 pt-6 sm:pb-6 lg:gap-12">
        <div className="flex-grow-[2] basis-[330px]">{main}</div>
        <div className="sticky bottom-6 flex-grow basis-[280px] self-end max-md:hidden">
          <div className="sticky top-6 flex min-h-[calc(100vh-3rem)] flex-col justify-between gap-y-4">
            <div>STICKY</div>
          </div>
        </div>
      </main>
    </div>
  )
}
