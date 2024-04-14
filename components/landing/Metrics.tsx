'use client'

import { useScroll } from 'framer-motion'
import { useRef } from 'react'

import { MetricsItem } from '@/components/landing/MetricsItem'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

import FaceOneSVG from '@/public/img/face-1.svg'
import FaceTwoSVG from '@/public/img/face-2.svg'
import FaceThreeSVG from '@/public/img/face-3.svg'
import FaceFourSVG from '@/public/img/face-4.svg'

export function Metrics() {
  const ref = useRef<HTMLUListElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', `end end`],
  })

  return (
    <section className="space-y-24 pb-8 pt-16 md:py-20">
      <AnimatedTitle>
        <h2 className="heading-section">
          <span className="text-primary">Lingo</span> by the{' '}
          <span className="text-secondary underline decoration-wavy underline-offset-4 md:underline-offset-8">
            numbers
          </span>
        </h2>
      </AnimatedTitle>
      <ul ref={ref} className="relative grid grid-cols-12 sm:grid-cols-9 lg:px-[15%]">
        <li className="sticky top-[20%] col-start-2 col-end-12 pb-8 sm:col-start-3 sm:col-end-8 sm:pb-16 lg:top-[5%] lg:pb-40">
          <MetricsItem
            className="bg-primary-light"
            number={1000}
            description="hours of fun content"
            offset={20}
            progress={scrollYProgress}
          >
            <FaceTwoSVG />
          </MetricsItem>
        </li>
        <li className="sticky top-[22.5%] col-start-2 col-end-12 pb-8 sm:col-start-1 sm:col-end-5 sm:pb-16 lg:pb-40">
          <MetricsItem
            className="bg-secondary"
            number={23}
            description="language courses"
            offset={22.5}
            progress={scrollYProgress}
          >
            <FaceFourSVG />
          </MetricsItem>
        </li>
        <li className="sticky top-[25%] col-start-2 col-end-12 pb-8 sm:col-start-6 sm:col-end-10 sm:pb-16 lg:pb-40">
          <MetricsItem
            className="bg-highlight"
            number={6}
            prefix="~"
            suffix="M"
            description="users globally"
            offset={25}
            progress={scrollYProgress}
          >
            <FaceOneSVG />
          </MetricsItem>
        </li>
        <li className="sticky top-[20%] col-start-1 col-end-13 pb-8 sm:col-start-2 sm:col-end-9 sm:pb-16 lg:top-[5%] lg:pb-40">
          <MetricsItem
            className="bg-gradient-to-b from-primary to-primary-depth to-80% shadow-lg"
            number={93}
            suffix="%"
            description="fluency in two months"
            offset={20}
            progress={scrollYProgress}
            last
          >
            <FaceThreeSVG />
          </MetricsItem>
        </li>
        <li className="col-start-1 col-end-13 h-[200vh] bg-orange-200/90 sm:col-end-10">
          <div className="h-full w-full bg-primary/20"></div>
        </li>
      </ul>
    </section>
  )
}
