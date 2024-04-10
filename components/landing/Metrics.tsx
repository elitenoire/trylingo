import { MetricsItem } from '@/components/landing/MetricsItem'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

import FaceOneSVG from '@/public/img/face-1.svg'
import FaceTwoSVG from '@/public/img/face-2.svg'
import FaceThreeSVG from '@/public/img/face-3.svg'
import FaceFourSVG from '@/public/img/face-4.svg'

export function Metrics() {
  return (
    <section className="space-y-24 pb-8 pt-16 md:py-20">
      <AnimatedTitle>
        <h2 className="px-4 py-6 text-center font-display text-3xl font-bold leading-normal tracking-tighter sm:text-4xl sm:leading-snug md:text-5xl">
          <span className="text-primary">Lingo</span> by the{' '}
          <span className="text-secondary underline decoration-wavy underline-offset-4 md:underline-offset-8">
            numbers.
          </span>
        </h2>
      </AnimatedTitle>
      <ul className="relative grid grid-cols-12 sm:grid-cols-9 lg:px-[15%]">
        <li className="sticky top-4 col-start-2 col-end-12 row-start-1 row-end-11 pb-8 sm:col-start-3 sm:col-end-8 sm:row-end-6 sm:pb-16">
          <MetricsItem
            className="bg-primary-light"
            title="1000+"
            description="hours of fun content"
          >
            <FaceTwoSVG />
          </MetricsItem>
        </li>
        <li className="sticky top-8 col-start-2 col-end-12 row-start-12 row-end-[22] pb-8 sm:col-start-1 sm:col-end-5 sm:row-start-6 sm:row-end-10 sm:pb-16">
          <MetricsItem className="bg-secondary" title="23+" description="language courses">
            <FaceFourSVG />
          </MetricsItem>
        </li>
        <li className="sticky top-8 col-start-2 col-end-12 row-start-[23] row-end-[33] pb-8 sm:col-start-6 sm:col-end-10 sm:row-start-6 sm:row-end-10 sm:pb-16">
          <MetricsItem className="bg-highlight" title="~6M" description="app users">
            <FaceOneSVG />
          </MetricsItem>
        </li>
        <li className="sticky top-4 col-start-1 col-end-13 row-start-[34] row-end-[44] pb-8 sm:col-start-2 sm:col-end-9 sm:row-start-10 sm:row-end-[17] sm:pb-16">
          <MetricsItem
            className="bg-gradient-to-b from-primary to-primary-depth to-80% shadow-lg"
            title="93%"
            description="fluency in two months"
          >
            <FaceThreeSVG />
          </MetricsItem>
        </li>
      </ul>
    </section>
  )
}
