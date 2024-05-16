import NextImage from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Checkbox } from '@/components/ui/checkbox'
// import { buttonVariants } from '@/components/ui/button'

// import { cn } from '@/lib/utils'

import type { Course } from '@/db/schema'

type CoursesListCardProps = {
  course: Course
  disabled?: boolean
  active?: boolean
  onClick?: (id: number) => void
}
export function CoursesListCard({ course, disabled, active, onClick }: CoursesListCardProps) {
  const { id, title, altCode } = course
  const labelId = `${title}-${id}`
  return (
    <div className="relative">
      <Checkbox
        checked={active}
        id={labelId}
        className={`absolute right-3 top-3 size-7 rounded-md focus-visible:ring-0 [&_svg]:stroke-[4] ${active ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => {
          console.log('Clicked!')
          onClick?.(id)
        }}
        disabled={disabled}
      />
      <label
        htmlFor={labelId}
        // className={cn(
        //   buttonVariants({ size: 'none' }),
        //   'flex min-h-[217px] flex-col gap-y-6 px-[30%] pb-6 pt-14 capitalize',
        //   'peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
        //   'peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:hover:bg-card peer-disabled:active:border-b-4'
        // )}
        className="flex min-h-[217px] flex-col items-center justify-center gap-y-6 rounded-xl border-2 border-b-4 bg-card px-[30%] pb-6 pt-14 font-bold text-card-foreground ring-offset-background transition-colors hover:bg-border/60 active:border-2 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-disabled:hover:bg-card peer-disabled:active:border-b-4"
      >
        <AspectRatio ratio={3 / 2}>
          <NextImage
            src={`/img/flags/${altCode}.svg`}
            alt={`${title} flag`}
            fill
            className="rounded-md border object-cover drop-shadow-md"
          />
        </AspectRatio>
        <span>{title}</span>
      </label>
    </div>
  )
}
