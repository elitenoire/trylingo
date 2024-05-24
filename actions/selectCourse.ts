'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { auth, currentUser } from '@clerk/nextjs/server'

import { db } from '@/db/drizzle'
import { userProgress } from '@/db/schema'
import { getCourseById } from '@/db/queries/courses'
import { getUserProgress } from '@/db/queries/userProgress'

export async function selectCourse(courseId: number) {
  const { userId } = await auth()
  const user = await currentUser()

  // can only select course if user is logged in
  if (!userId || !user) {
    throw new Error('Unauthorized!')
  }

  const course = await getCourseById(courseId)

  // can only select course if it exists
  if (!course) {
    throw new Error('Course not found!')
  }

  // TODO: enable on units implementation
  // if (!course.units.length || !course.units[0].lesson.length){
  //     throw new Error('Course is empty!');
  // }

  const currentUserProgress = await getUserProgress()
  // data for selected course
  const selection = {
    activeCourseId: courseId,
    userName: user.firstName || 'User',
    userImgSrc: user.imageUrl || '/mascot.svg',
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
      userId,
      ...selection,
    })
  }
  // force fetch db data to sync changes in the cached paths
  revalidatePath('/courses')
  revalidatePath('/learn')
  redirect('/learn')
}
