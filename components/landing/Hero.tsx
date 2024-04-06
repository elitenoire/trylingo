import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

import LangSVG from '@/public/img/lang.svg'
import VoiceSVG from '@/public/img/voice.svg'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20">
      <h1 className="flex w-full flex-col items-center justify-center gap-2 text-balance text-center font-display text-3xl font-bold capitalize leading-normal tracking-tighter sm:leading-snug md:gap-4 md:text-5xl">
        <span>
          Master any{' '}
          <span className="rounded-full border border-highlight/25 bg-highlight/50 px-[0.35em] py-[0.125em]">
            language.
          </span>
        </span>
        <span className="flex flex-wrap items-center justify-center">
          Learn{' '}
          <span className="relative ml-[0.25em] flex h-[1.35em] w-[1.5em] items-center justify-center rounded-full bg-secondary/30">
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
      <div className="mx-auto my-16 flex max-w-80 flex-col gap-3">
        <Button variant="primary" size="lg">
          <span className="truncate">Get started</span>
        </Button>
        <Button size="lg" className="text-secondary">
          <span className="truncate">I already have an account</span>
        </Button>
      </div>
      <div className="absolute -left-[2%] top-[10%] -z-1 sm:left-[10%]">
        <div className="size-20 -rotate-12 rounded-lg bg-gradient-to-br from-highlight/50  to-transparent p-2 text-background md:size-24 lg:size-32">
          <LangSVG />
        </div>
      </div>
      <div className="absolute -right-[2%] top-1/3 -z-1 sm:right-[10%]">
        <div className="size-20 rotate-12 rounded-lg bg-gradient-to-bl from-secondary/30  to-transparent p-2 text-background md:size-24 lg:size-32">
          <VoiceSVG />
        </div>
      </div>
    </section>
  )
}
