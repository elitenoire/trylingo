import 'server-only'

import { cache } from 'react'

import { db } from '@/db/drizzle'
import { getCourseProgress } from '@/db/queries/units'

export const getLesson = cache(async (userId: string | null, id?: number) => {
  const courseProgress = await getCourseProgress(userId)

  const lessonId = id || courseProgress?.activeLessonId

  if (!lessonId || !userId) return null

  const data = await db.query.lessons.findFirst({
    where: ({ id: _lessonId }, { eq }) => eq(_lessonId, lessonId),
    with: {
      challenges: {
        orderBy: ({ order }, { asc }) => [asc(order)],
        with: {
          challengeOptions: true,
          challengeProgress: {
            where: ({ userId: _userId }, { eq }) => eq(_userId, userId),
          },
        },
      },
    },
  })

  if (!data?.challenges) return null

  return {
    ...data,
    challenges: data.challenges.map(({ challengeProgress, ...challenge }) => ({
      ...challenge,
      challengeProgress,
      completed:
        !!challengeProgress.length && challengeProgress.every(({ completed }) => completed),
    })),
  }
})

export const getLessonPercentage = cache(async (userId: string | null) => {
  const { activeLessonId } = (await getCourseProgress(userId)) ?? {}

  if (!activeLessonId || !userId) return 0

  const lesson = await getLesson(userId, activeLessonId)

  if (!lesson) return 0

  const completedChallenges = lesson.challenges.filter(({ completed }) => completed)

  return Math.round((completedChallenges.length / lesson.challenges.length) * 100)
})
