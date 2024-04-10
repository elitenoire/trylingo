import type { Variants } from 'framer-motion'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { AnimatedList, AnimatedListItem } from '@/components/motion/AnimatedList'

import LangSVG from '@/public/img/lang.svg'
import VoiceSVG from '@/public/img/voice.svg'
import BulbSVG from '@/public/img/bulb.svg'
import RewardSVG from '@/public/img/reward.svg'

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
  hidden: { opacity: 0 },
} satisfies Variants

const item = {
  visible: { opacity: 1, y: '0%', scale: 1, transition: { duration: 0.45 } },
  hidden: { opacity: 0, y: '100%', scale: 0.85 },
} satisfies Variants

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-24">
      <AnimatedTitle>
        <h1 className="flex w-full flex-col items-center justify-center gap-2 text-balance py-6 text-center font-display text-3xl font-bold capitalize leading-normal tracking-tighter sm:text-4xl sm:leading-snug md:gap-4 md:text-5xl">
          <span>
            Master any{' '}
            <span className="rounded-full border border-highlight/25 bg-highlight/50 px-[0.35em] py-[0.125em] text-highlight-depth dark:bg-highlight/85 dark:text-background">
              language.
            </span>
          </span>
          <span className="flex flex-wrap items-center justify-center">
            Learn{' '}
            <span className="relative ml-[0.25em] flex h-[1.35em] w-[1.5em] items-center justify-center rounded-full bg-secondary/30 dark:text-secondary">
              <Globe className="z-1 h-[1.25em] w-[1.25em]" strokeWidth={2.15} />
            </span>
            <span className="mr-[0.25em]">
              <span className="sr-only">on</span>
              <span className="lowercase" aria-hidden="true">
                n
              </span>
            </span>{' '}
            the go.
          </span>
        </h1>
      </AnimatedTitle>
      <AnimatedList variants={list} className="mx-auto my-16 flex max-w-80 flex-col gap-3">
        <AnimatedListItem variants={item}>
          <Button variant="primary" size="lg" className="w-full">
            <span className="truncate">Get started</span>
          </Button>
        </AnimatedListItem>
        <AnimatedListItem variants={item}>
          <Button size="lg" className="w-full text-secondary">
            <span className="truncate">I already have an account</span>
          </Button>
        </AnimatedListItem>
      </AnimatedList>
      <div className="absolute -left-[2%] top-[10%] -z-1 sm:left-[10%]">
        <div className="size-20 -rotate-12 rounded-lg bg-gradient-to-br from-highlight/70  to-transparent p-2 text-background sm:size-24 lg:size-32">
          <LangSVG />
        </div>
      </div>
      <div className="absolute right-[10%] top-[10%] -z-1 max-md:hidden">
        <div className="size-24 rotate-12 rounded-lg bg-gradient-to-bl from-highlight/70  to-transparent p-2 text-background lg:size-32">
          <BulbSVG />
        </div>
      </div>
      <div className="absolute bottom-[10%] left-[10%] -z-1 max-md:hidden">
        <div className="size-24 -rotate-6 rounded-lg bg-gradient-to-r from-secondary/30  to-transparent p-2 text-background lg:size-32">
          <RewardSVG />
        </div>
      </div>
      <div className="absolute -right-[2%] top-1/3 -z-1 sm:right-[10%] md:top-2/3">
        <div className="size-20 rotate-12 rounded-lg bg-gradient-to-l from-secondary/30  to-transparent p-2 text-background sm:size-24 lg:size-32">
          <VoiceSVG />
        </div>
      </div>
    </section>
  )
}
