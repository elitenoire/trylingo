import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/toggle'
import { MotionDiv } from '@/components/motion'

import LogoSVG from '@/public/logo.svg'
import GithubSVG from '@/public/img/github.svg'

export function Header() {
  return (
    <header className="relative flex justify-center">
      <div className="z-1 flex w-full items-center justify-between gap-2 overflow-hidden px-2 sm:px-8">
        <div className="flex flex-1 items-center justify-start gap-1 max-sm:hidden">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/elitenoire/trylingo"
              target="_blank"
              aria-label="GitHub repo"
              title="Github repo"
            >
              <GithubSVG className="size-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-2xl" asChild>
            <ThemeToggle idPrefix="web" />
          </Button>
        </div>
        <MotionDiv
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <NextLink
            href="/"
            className="group flex h-16 w-14 flex-col items-center gap-1 rounded-b-3xl bg-secondary/30 px-[6px] pt-2 text-2xl transition-colors hover:bg-primary/25 dark:bg-card dark:hover:bg-border/70 sm:size-32 sm:rounded-b-4xl sm:pt-4 sm:text-3xl lg:w-36 lg:text-4xl"
            title="Lingo app"
          >
            <LogoSVG className="w-[1.5em] group-hover:animate-bounce" />
            <span className="font-display -tracking-widest max-sm:sr-only">Lingo</span>
          </NextLink>
        </MotionDiv>
        <div className="flex flex-1 items-center justify-end">
          <Button variant="ghost">Login</Button>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="size-12 border border-solid border-border bg-card/40 text-2xl backdrop-blur-lg"
          asChild
        >
          <ThemeToggle idPrefix="mobile" />
        </Button>
      </div>
    </header>
  )
}
