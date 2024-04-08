import NextImage from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { languages } from '@/config/languages'

export function Languages() {
  return (
    <section className="space-y-8 px-4 pb-8 pt-4 sm:px-[10%] md:py-20">
      <h2 className="text-center font-display text-3xl font-bold leading-normal tracking-tighter sm:text-4xl sm:leading-snug md:text-5xl">
        I want to <span className="text-highlight-depth">learn ...</span>
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-center lg:gap-4">
        {languages.map(({ flag, title }) => (
          <li key={title} className="basis-28 md:basis-40">
            <Button
              variant="ghost"
              size="lg"
              className="size-full flex-wrap bg-secondary/10 px-0 pb-4 lg:text-base"
            >
              <AspectRatio ratio={3 / 2} className="!top-1/2 mx-auto h-1/2 w-1/2 -translate-y-1/2">
                <NextImage
                  src={`/img/flags/${flag}.svg`}
                  alt={`${title} flag`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <span>{title}</span>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}
