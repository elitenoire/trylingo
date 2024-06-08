import 'server-only'

import { unstable_cache as NextCache } from 'next/cache'
import { auth } from '@clerk/nextjs/server'

import { db } from '@/db/drizzle'

export const getUserProgress = async (userId?: string | null) => {
  if (userId === null) return null

  let _userId = userId

  if (!_userId) {
    const { userId: _uid } = await auth()
    if (!_uid) return null
    _userId = _uid
  }

  return NextCache(
    async (_uid: string) => {
      return await db.query.userProgress.findFirst({
        where: ({ userId: uid }, { eq }) => eq(uid, _uid),
        with: { activeCourse: true },
      })
    },
    ['get_user_progress', _userId],
    { revalidate: 180, tags: ['get_user_progress', `get_user_progress::${_userId}`] }
  )(_userId)
}
