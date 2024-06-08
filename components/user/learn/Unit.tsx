import type { ComponentProps } from 'react'
import { UnitBanner } from '@/components/user/learn/UnitBanner'
import { LearnButton } from '@/components/user/learn/LearnButton'

import type { UnitType, LessonType } from '@/db/schema'

type UnitProps = {
  unit: UnitType
  lessons: (LessonType & { completed: boolean })[]
  // activeLesson: (LessonType & { unit: UnitType }) | null
  activeLessonId: number
  activeLessonPercentage: number
  variant?: ComponentProps<typeof LearnButton>['variant']
}

export function Unit({
  variant = 'primary',
  unit,
  lessons,
  activeLessonId,
  activeLessonPercentage,
}: UnitProps) {
  const { title, description } = unit
  return (
    <section className="space-y-10 pb-16">
      <UnitBanner title={title} description={description} color={variant} />
      <ul className="flex flex-col items-center space-y-5">
        {lessons.map(({ id, completed }, idx, _lessons) => {
          return (
            <li key={id}>
              <LearnButton
                id={id}
                index={idx}
                totalCount={_lessons.length}
                title={title}
                current={id === activeLessonId}
                completed={completed}
                percentage={activeLessonPercentage}
                variant={variant}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
