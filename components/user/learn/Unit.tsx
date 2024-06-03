import { UnitBanner } from '@/components/user/learn/UnitBanner'
import { LearnButton } from '@/components/user/learn/LearnButton'

import type { UnitType, LessonType } from '@/db/schema'

type UnitProps = {
  unit: UnitType
  lessons: (LessonType & { completed: boolean })[]
  activeLesson: (LessonType & { unit: UnitType }) | null
  activeLessonPercentage: number
}

export function Unit({ unit, lessons, activeLesson, activeLessonPercentage }: UnitProps) {
  const { title, description } = unit
  return (
    <div className="">
      <UnitBanner title={title} description={description} />
      <div>
        {lessons.map(({ id, completed }, idx, _lessons) => {
          const isCurrent = id === activeLesson?.id
          const isLocked = !isCurrent && !completed
          return (
            <LearnButton
              key={id}
              id={id}
              index={idx}
              totalCount={_lessons.length}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          )
        })}
      </div>
    </div>
  )
}
