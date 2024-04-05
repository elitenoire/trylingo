import { Earth, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="space-y-8 px-4 py-20">
      <h1 className="flex w-full flex-col items-center justify-center text-balance text-center font-display text-3xl font-bold capitalize tracking-tight max-md:!leading-snug md:gap-4 md:text-5xl">
        <span>
          Master any{' '}
          <span className="rounded-xs bg-gradient-to-r from-highlight/50 to-transparent pb-[0.125em] pl-[0.125em]">
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
      <div className="mx-auto flex max-w-80 flex-col gap-3">
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button size="lg" className="text-secondary">
          <span className="truncate">I already have an account</span>
        </Button>
      </div>
    </section>
  )
}
