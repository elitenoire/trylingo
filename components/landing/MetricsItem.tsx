'use client'

import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { type PropsWithChildren, useRef } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { AnimatedNumber, type AnimatedNumberProps } from '@/components/motion/AnimatedNumber'

import { cn } from '@/lib/utils'

type MetricsItemProps = {
  description: string
  progress: MotionValue<number>
  last?: boolean
  offset?: number
  className?: string
}

export function MetricsItem({
  description,
  offset = 0,
  suffix = '+',
  last,
  progress,
  children,
  className,
  ...rest
}: PropsWithChildren<MetricsItemProps & AnimatedNumberProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', `start ${offset}%`],
  })
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.5, 1, 1, 0.85]), {
    stiffness: 25,
  })
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const exitOpacity = useTransform(progress, [last ? 0.38 : 0.34, 0.38], [1, last ? 1 : 0])
  const exitScale = useTransform(progress, last ? [0.42, 0.55] : [0.34, 0.425], [1, 0.65])

  const originTop = last && { className: 'lg:origin-top' }
  return (
    <motion.div ref={ref} {...originTop} style={{ scale, opacity }}>
      <motion.div {...originTop} style={{ scale: exitScale, opacity: exitOpacity }}>
        <AspectRatio
          ratio={1}
          className={cn(
            'flex flex-col items-center justify-center overflow-hidden rounded-full bg-muted p-4 text-center dark:text-background',
            className
          )}
        >
          <span className="absolute top-[5%] w-1/2">{children}</span>
          <span className="z-1 pt-[40%] text-[1vw] leading-none sm:text-[0.65vw] lg:text-[min(0.5vw,0.5rem)]">
            <span className="block font-mono text-[10em] font-bold">
              <AnimatedNumber suffix={suffix} once={false} {...rest} />
            </span>
            <span className="block max-w-52 text-balance text-[6em]">{description}</span>
          </span>
        </AspectRatio>
      </motion.div>
    </motion.div>
  )
}
