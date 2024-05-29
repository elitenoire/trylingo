import type { ReactNode } from 'react'

type DashboardLayoutProps = {
  main: ReactNode
  userProgress: ReactNode
}

export default function DashboardLayout({ main, userProgress }: DashboardLayoutProps) {
  return (
    <>
      <div className="flex-grow-[2] basis-[330px]">{main}</div>
      <div className="sticky bottom-6 flex-grow basis-[280px] self-end max-md:hidden">
        <div className="sticky top-6 flex min-h-[calc(100vh-3rem)] flex-col justify-between gap-y-4">
          {userProgress}
        </div>
      </div>
    </>
  )
}
