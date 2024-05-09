import type { ReactNode } from 'react'
import { UserProgress } from '@/components/user/UserProgress'

type DashboardLayoutProps = {
  main: ReactNode
}

export default function DashboardLayout({ main }: DashboardLayoutProps) {
  return (
    <>
      <div className="flex-grow-[2] basis-[330px]">{main}</div>
      <div className="sticky bottom-6 flex-grow basis-[280px] self-end max-md:hidden">
        <div className="sticky top-6 flex min-h-[calc(100vh-3rem)] flex-col justify-between gap-y-4">
          <UserProgress />
        </div>
      </div>
    </>
  )
}
