'use client'

import { type PropsWithChildren, useEffect } from 'react'
import { useAnimate, useInView } from 'framer-motion'

import { cn } from '@/lib/utils'

type ReasonsItemProps = {
  reason: string
  className?: string
  delay?: number
}

export function ReasonsItem({
  reason,
  delay,
  className,
  children,
}: PropsWithChildren<ReasonsItemProps>) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, {
    once: true,
    margin: '0% 0% -5% 10%',
    amount: 0,
  })

  useEffect(() => {
    if (isInView) {
      animate([
        [
          scope.current,
          { x: ['-101%', '0%'], opacity: [0, 1] },
          { duration: 1.2, ease: [0.16, 1, 0.3, 1], opacity: { duration: 0.1 }, delay },
        ],
        ['[data-reason]', { opacity: [0, 1] }, { duration: 0.4, ease: 'easeIn', at: '-0.8' }],
        [
          '[data-reason-text]',
          { y: ['100%', '0%'], x: ['7.5%', '0%'] },
          { duration: 0.6, ease: 'easeOut', at: '<' },
        ],
        ['[data-reason-icon]', { scale: [0, 1] }, { type: 'spring', at: '-0.2' }],
      ])
    }
  }, [isInView, animate, scope, delay])

  return (
    <div
      ref={scope}
      className={cn(
        '-translate-x-[101%] rounded-4xl transition-colors duration-300 dark:text-background',
        className
      )}
    >
      <span className="group flex items-center justify-between p-6 md:py-8" data-reason>
        <span className="block" data-reason-text>
          {reason}
        </span>
        <span className="mx-4 flex-1 border-b-4 border-dotted border-current opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-sm:hidden" />
        <span className="mr-2 block transition-transform duration-200 group-hover:-rotate-45 group-hover:scale-125 max-sm:hidden">
          <span className="block [&>svg]:size-[1.35em]" data-reason-icon>
            {children}
          </span>
        </span>
      </span>
    </div>
  )
}
