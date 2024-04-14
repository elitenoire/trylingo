import { Hero } from '@/components/landing/Hero'
import { Languages } from '@/components/landing/Languages'
import { Metrics } from '@/components/landing/Metrics'
import { Reasons } from '@/components/landing/Reasons'

export default function Home() {
  return (
    <>
      <Hero />
      <Languages />
      <Metrics />
      <Reasons />
    </>
  )
}
