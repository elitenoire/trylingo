import NextLink from 'next/link'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { MoveLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { getUserProgress } from '@/db/queries/userProgress'
import { getUnits } from '@/db/queries/units'

export default async function Learn() {
  const { userId } = await auth()
  const userProgress = await getUserProgress(userId)
  const { activeCourse, activeCourseId } = userProgress ?? {}

  if (!activeCourse) {
    redirect('/courses')
  }

  const units = activeCourseId && userId ? await getUnits(activeCourseId, userId) : []

  return (
    <div className="">
      <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-background pb-2 text-muted-foreground sm:z-50">
        <Button variant="ghost" size="icon" className="text-inherit" asChild>
          <NextLink href="/courses">
            <MoveLeft className="size-6" strokeWidth={2} />
          </NextLink>
        </Button>
        <h1 className="text-lg font-bold uppercase">{activeCourse.title}</h1>
      </div>
      {units.map((unit) => (
        <div key={unit.id} className="mb-10">
          {JSON.stringify(unit)}
        </div>
      ))}
    </div>
  )
}
