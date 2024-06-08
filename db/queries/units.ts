import 'server-only'

import { cache } from 'react'

import { db } from '@/db/drizzle'
import { getUserProgress } from '@/db/queries/userProgress'

export const getUnits = cache(async (userId: string | null) => {
  const { activeCourseId } = (await getUserProgress(userId)) ?? {}

  if (!activeCourseId || !userId) return []

  const data = await db.query.units.findMany({
    where: ({ courseId }, { eq }) => eq(courseId, activeCourseId),
    with: {
      lessons: {
        with: {
          challenges: {
            with: {
              challengeProgress: { where: ({ userId: _userId }, { eq }) => eq(_userId, userId) },
            },
          },
        },
      },
    },
  })
  const normalizedData = data.map((unit) => ({
    ...unit,
    lessons: unit.lessons.map(({ challenges, ...lesson }) => ({
      ...lesson,
      challenges,
      completed:
        !!challenges.length &&
        challenges.every(
          ({ challengeProgress }) =>
            !!challengeProgress.length && challengeProgress.every(({ completed }) => completed)
        ),
    })),
  }))

  return normalizedData
})

export const getCourseProgress = cache(async (userId: string | null) => {
  const { activeCourseId } = (await getUserProgress(userId)) ?? {}

  if (!activeCourseId || !userId) return null

  const unitsInActiveCourse = await db.query.units.findMany({
    where: ({ courseId }, { eq }) => eq(courseId, activeCourseId),
    orderBy: ({ order }, { asc }) => [asc(order)],
    with: {
      lessons: {
        orderBy: ({ order }, { asc }) => [asc(order)],
        with: {
          unit: true,
          challenges: {
            with: {
              challengeProgress: {
                where: ({ userId: _userId }, { eq }) => eq(_userId, userId),
              },
            },
          },
        },
      },
    },
  })

  const firstUncompletedLesson = unitsInActiveCourse
    .flatMap((unit) => unit.lessons)
    .find((lesson) =>
      lesson.challenges.some(
        ({ challengeProgress }) =>
          !challengeProgress ||
          challengeProgress.length === 0 ||
          challengeProgress.some(({ completed }) => !completed)
      )
    )

  return {
    activeLesson: firstUncompletedLesson,
    activeLessonId: firstUncompletedLesson?.id,
  }
})
