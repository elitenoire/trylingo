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
      transition={{ duration: 4, ease: [0, 0.55, 0.45, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
