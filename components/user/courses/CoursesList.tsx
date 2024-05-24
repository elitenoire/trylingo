import { CoursesListCard } from '@/components/user/courses/CoursesListCard'
import type { CourseType, UserProgressType } from '@/db/schema'

type CoursesListProps = {
  courses: CourseType[]
  activeId?: UserProgressType['activeCourseId']
}

export function CoursesList({ courses, activeId }: CoursesListProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-4">
      {courses.map((course) => (
        <li key={course.id}>
          <CoursesListCard course={course} activeId={activeId} />
        </li>
      ))}
    </ul>
  )
}
