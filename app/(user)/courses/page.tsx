import { CoursesList } from '@/components/user/courses/CoursesList'

import { getCourses } from '@/db/queries/courses'

export default async function Courses() {
  const courses = await getCourses()
  return (
    <div className="mx-auto w-full max-w-[912px] space-y-6">
      <h1 className="font-display text-2xl font-bold">Language Courses</h1>
      <CoursesList courses={courses} activeId={1} />
    </div>
  )
}
