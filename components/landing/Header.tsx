import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/toggle'
import { MotionDiv } from '@/components/motion'

import LogoSVG from '@/public/logo.svg'

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-2xl" asChild>
            <ThemeToggle idPrefix="web" />
          </Button>
        </div>
        <MotionDiv
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          transition={{ type: 'spring', duration: 1 }}
        >
          <NextLink
            href="/"
            // className="group flex h-16 w-14 flex-col items-center gap-1 rounded-b-3xl bg-secondary/30 px-[6px] pt-2 text-2xl hover:bg-primary/25 dark:bg-card dark:hover:bg-border/70 sm:size-32 sm:rounded-b-4xl sm:pt-4 sm:text-3xl lg:w-36 lg:text-4xl"
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
