'use client'

import { type PropsWithChildren, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

type AnimatedHeroDecorProps = {
  className?: string
  move?: number
  delay?: number
}

export function AnimatedHeroDecor({
  move = 20,
  delay = 0.8,
  children,
  className,
}: PropsWithChildren<AnimatedHeroDecorProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.3', '0.3 start'],
  })

  const scroll = useSpring(scrollYProgress, {
    stiffness: 30,
  })
  const scale = useTransform(scroll, [0, 1], [1, 0])
  const opacity = useTransform(scroll, [0, 1], [1, 0.1])
  const y = useTransform(scroll, [0, 1], ['0%', `-${move}%`])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', bounce: 0.4, duration: 1.2, delay }}
    >
      <motion.div ref={ref} className={className} style={{ y, scale, opacity }}>
        {children}
      </motion.div>
    </motion.div>
  )
}
