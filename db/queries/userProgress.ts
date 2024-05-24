import { cache } from 'react'
import { auth } from '@clerk/nextjs/server'

import { db } from '@/db/drizzle'

export const getUserProgress = cache(async () => {
  const { userId } = await auth()

  if (!userId) return null

  return await db.query.userProgress.findFirst({
    where: ({ userId: uid }, { eq }) => eq(uid, userId),
    with: { activeCourse: true },
  })
})
