import { MobileSheet } from '@/components/user/MobileSheet'
import { SideMenu } from '@/components/user/SideMenu'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-grow flex-col px-0 sm:flex-row">
      <header className="sm:w-24 lg:w-64">
        <div className="flex items-center justify-between border-b-2 bg-primary p-2 sm:hidden">
          <MobileSheet>
            <SideMenu />
          </MobileSheet>
        </div>
        <div className="fixed inset-y-0 left-0 w-[inherit] border-r-2 bg-green-200 max-sm:hidden">
          <SideMenu />
        </div>
      </header>
      <main className="flex-1 bg-green-100 pb-24">{children}</main>
      <footer className="fixed inset-x-0 bottom-0 h-20 bg-green-200 sm:hidden" />
    </div>
  )
}
