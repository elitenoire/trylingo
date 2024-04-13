'use client'

import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type AnimatedTitleProps = {
  className?: string
}

export function AnimatedTitle({ children, className }: PropsWithChildren<AnimatedTitleProps>) {
  return (
    <motion.div
      // reveals content vertically from center
      initial={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
      whileInView={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' }}
      viewport={{ once: true }}
      transition={{ type: 'spring', duration: 1.35 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
