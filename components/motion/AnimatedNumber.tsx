'use client'

import { useEffect } from 'react'
import type { UseInViewOptions } from 'framer-motion'
import { useInView, useAnimate, useMotionValue } from 'framer-motion'

export type AnimatedNumberProps = {
  number: number
  from?: number
  prefix?: string
  suffix?: string
}

export function AnimatedNumber({
  from = 0,
  number,
  prefix = '',
  suffix = '',
  ...rest
}: AnimatedNumberProps & UseInViewOptions) {
  const start = useMotionValue(from)
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, {
    margin: '0px 0px -100px 0px',
    ...rest,
  })

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 0.1 })
      animate(start, number, {
        type: 'spring',
        mass: 0.8,
        stiffness: 75,
        damping: 15,
        onUpdate: (latest) => {
          const formatted = Intl.NumberFormat('en-US').format(Math.round(latest))
          scope.current.textContent = `${prefix}${formatted}${suffix}`
        },
      })
    } else {
      // reset
      animate(scope.current, { opacity: 0 }, { duration: 0.1 })
      start.set(from)
    }
  }, [isInView, animate, scope, start, from, number, prefix, suffix])

  return <span ref={scope} className="opacity-0">{`${prefix}${number}${suffix}`}</span>
}
