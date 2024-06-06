'use client'

import type { ComponentProps } from 'react'
import { ActiveButton } from '@/components/user/learn/LearnButton/ActiveButton'
import { LockedButton } from '@/components/user/learn/LearnButton/LockedButton'

type LearnButtonProps = {
  id: number
  title: string
  index: number
  totalCount: number
  percentage: number
  locked?: boolean
  current?: boolean
  completed?: boolean
  variant?: ComponentProps<typeof ActiveButton>['variant']
}

export function LearnButton({
  id,
  title,
  index,
  totalCount,
  percentage,
  current,
  completed,
  variant = 'primary',
}: LearnButtonProps) {
  const cycleLength = 8
  const cycleIndex = index % cycleLength

  let indentationLevel

  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex
  } else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex
  } else {
    indentationLevel = cycleIndex - 8
  }

  const rightPosition = indentationLevel * 40

  const isLast = index === totalCount - 1
  const label = `Lesson ${index + 1} of ${totalCount}`

  return (
    <div className="relative" style={{ right: `${rightPosition}px` }}>
      {current || completed ? (
        <ActiveButton
          title={title}
          variant={variant}
          current={current}
          completed={completed}
          percentage={Number.isNaN(percentage) ? 0 : percentage}
          // @ts-expect-error add lesson routes
          href={completed ? `/lesson/${id}` : '/lesson'}
          hrefText={completed ? 'Practice' : 'Start'}
          prompt={completed ? 'Level up your proficiency!' : label}
          ariaLabel={label}
        />
      ) : (
        <LockedButton
          icon={isLast ? 'last' : 'star'}
          title={title}
          prompt="Complete all lessons above to unlock this!"
          ariaLabel="Locked Lesson"
        />
      )}
    </div>
  )
}
