import type { PropsWithChildren } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'

type MetricsItemProps = {
  title: string
  description: string
  className?: string
}

export function MetricsItem({
  children,
  title,
  description,
  className,
}: PropsWithChildren<MetricsItemProps>) {
  return (
    <AspectRatio
      ratio={1}
      className={cn(
        'flex flex-col items-center justify-center overflow-hidden rounded-full bg-muted p-4 text-center dark:text-background',
        className
      )}
    >
      <span className="absolute top-[5%] w-1/2">{children}</span>
      <span className="z-1 pt-[40%] text-[1vw] leading-none sm:text-[0.65vw] lg:text-[min(0.5vw,0.5rem)]">
        <span className="block text-[10em] font-bold">{title}</span>
        <span className="block max-w-52 text-balance text-[6em]">{description}</span>
      </span>
    </AspectRatio>
  )
}
