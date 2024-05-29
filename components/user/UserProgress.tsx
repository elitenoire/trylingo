import NextLink from 'next/link'
import NextImage from 'next/image'
import { InfinityIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { getUserProgress } from '@/db/queries/userProgress'

type UserProgressProps = {
  hasActiveSubscription?: boolean
  muted?: boolean
}

// TODO: fetch the props directly from db instead of passing them in

export async function UserProgress({ hasActiveSubscription, muted }: UserProgressProps) {
  const userProgress = await getUserProgress()

  if (!userProgress || !userProgress.activeCourse) {
    return null
  }

  const {
    points,
    hearts,
    activeCourse: { title, altCode },
  } = userProgress

  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button variant="ghost" asChild>
        <NextLink href="/courses">
          <NextImage
            src={`/img/flags/${altCode}.svg`}
            alt={title}
            width={32}
            height={32}
            className="rounded-md border-2 border-border/80 dark:border-muted-foreground"
          />
        </NextLink>
      </Button>
      <Button variant="ghost" className={muted ? 'text-inherit' : 'text-orange-500'} asChild>
        <NextLink href="/shop">
          <NextImage src="/img/icons/xp.svg" alt="points" width={28} height={28} className="mr-2" />
          {points}
        </NextLink>
      </Button>
      <Button variant="ghost" className={muted ? 'text-inherit' : 'text-rose-500'} asChild>
        <NextLink href="/shop">
          <NextImage
            src="/img/icons/heart.svg"
            alt="hearts"
            width={22}
            height={22}
            className="mr-2"
          />
          {hasActiveSubscription ? <InfinityIcon className="size-4" strokeWidth={3} /> : hearts}
        </NextLink>
      </Button>
    </div>
  )
}
