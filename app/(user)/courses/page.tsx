import { CoursesList } from '@/components/user/courses/CoursesList'

import { getCourses } from '@/db/queries/courses'
import { getUserProgress } from '@/db/queries/userProgress'

export default async function Courses() {
  const [courses, userProgress] = await Promise.all([getCourses(), getUserProgress()])

  return (
    <div className="mx-auto w-full max-w-[912px] space-y-6">
      <h1 className="font-display text-2xl font-bold">Language Courses</h1>
      <CoursesList courses={courses} activeId={userProgress?.activeCourseId} />
    </div>
  )
}
