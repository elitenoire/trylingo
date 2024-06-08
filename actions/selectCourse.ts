'use server'

import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
import { auth, currentUser } from '@clerk/nextjs/server'

import { db } from '@/db/drizzle'
import { userProgress } from '@/db/schema'
import { getCourseById } from '@/db/queries/courses'
import { getUserProgress } from '@/db/queries/userProgress'

import { BaseError, GenericError, ServerError } from '@/lib/errors'

export async function selectCourse(courseId: number) {
  try {
    const [{ userId }, user] = await Promise.all([auth(), currentUser()])

    // can only select course if user is logged in
    if (!userId || !user) {
      throw new ServerError('Login to access course.')
    }

    const course = await getCourseById(courseId)

    // can only select course if it exists
    if (!course) {
      throw new ServerError('This course is unavailable.')
    }

    // TODO: enable on units implementation
    // if (!course.units.length || !course.units[0].lesson.length){
    //     throw new ServerError('No lessons in this course!');
    // }

    const currentUserProgress = await getUserProgress(userId)
    // data for selected course
    const selection = {
      activeCourseId: courseId,
      userName: user.firstName || 'User',
      userImgSrc: user.imageUrl || '/logo.svg',
    }
    // update or insert selected course in user progress
    if (currentUserProgress) {
      // User has progress
      // update user progress with selected course
      await db.update(userProgress).set(selection)
    } else {
      // User has no progress
      // create user progress with selected course
      await db.insert(userProgress).values({
        ...selection,
        userId,
      })
    }
  } catch (error) {
    if (error instanceof BaseError) throw error
    throw new GenericError('Something went wrong!:\n', { cause: error })
  }
  // Sync changes in cached paths
  revalidateTag('get_user_progress')
  revalidatePath('/courses')
  revalidatePath('/learn')
  redirect('/learn') // Start learning!
}
