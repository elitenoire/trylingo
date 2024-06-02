import { cache } from 'react'
import { db } from '@/db/drizzle'

export const getUnits = cache(async (activeCourseId: number, userId: string) => {
  const data = await db.query.units.findMany({
    where: ({ courseId }, { eq }) => eq(courseId, activeCourseId),
    with: {
      lessons: {
        with: {
          challenges: {
            with: { challengeProgress: { where: ({ userId: uid }, { eq }) => eq(uid, userId) } },
          },
        },
      },
    },
  })
  const normalizedData = data.map((unit) => ({
    ...unit,
    lessons: unit.lessons.map((lesson) => ({
      ...lesson,
      completed: lesson.challenges.every(
        ({ challengeProgress }) =>
          challengeProgress.length && challengeProgress.every(({ completed }) => completed)
      ),
    })),
  }))

  return normalizedData
})
