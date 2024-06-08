import NextLink from 'next/link'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { MoveLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Unit } from '@/components/user/learn/Unit'

import { getUserProgress } from '@/db/queries/userProgress'
import { getUnits, getCourseProgress } from '@/db/queries/units'
import { getLessonPercentage } from '@/db/queries/lessons'

export default async function Learn() {
  const { userId } = await auth()

  const userProgressPromise = getUserProgress(userId)
  const courseProgressPromise = getCourseProgress(userId)
  const unitsPromise = getUnits(userId)
  const lessonPercentagePromise = getLessonPercentage(userId)

  const [userProgress, courseProgress] = await Promise.all([
    userProgressPromise,
    courseProgressPromise,
  ])
  const { activeCourse } = userProgress ?? {}
  const { activeLessonId } = courseProgress ?? {}

  if (!activeCourse || !activeLessonId) {
    redirect('/courses')
  }

  const [units, percentage] = await Promise.all([unitsPromise, lessonPercentagePromise])

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
      {units.map(({ lessons, ...unit }) => (
        <Unit
          key={unit.id}
          unit={unit}
          lessons={lessons}
          activeLessonId={activeLessonId}
          activeLessonPercentage={percentage}
          // TODO: map over variants array
          variant="primary"
        />
      ))}
    </div>
  )
}
