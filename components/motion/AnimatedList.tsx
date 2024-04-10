'use client'

import type { PropsWithChildren } from 'react'
import { motion, type Variant } from 'framer-motion'

type AnimatedListProps = {
  variants: {
    visible: Variant
    hidden: Variant
  }
  className?: string
}

export function AnimatedList({
  children,
  variants,
  className,
}: PropsWithChildren<AnimatedListProps>) {
  return (
    <motion.ul
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.ul>
  )
}

export function AnimatedListItem({
  children,
  variants,
  className,
}: PropsWithChildren<AnimatedListProps>) {
  return (
    <motion.li className={className} variants={variants}>
      {children}
    </motion.li>
  )
}
