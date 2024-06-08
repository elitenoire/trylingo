import NextLink from 'next/link'
import { NotebookText } from 'lucide-react'
import { Button } from '@/components/ui/button'

type UnitBannerProps = {
  title: string
  description: string
  color?: string
}

export function UnitBanner({ title, description, color }: UnitBannerProps) {
  return (
    <header
      className="flex w-full items-center justify-between rounded-xl p-5 text-white"
      style={{ backgroundColor: `hsl(var(--${color}))` }}
    >
      <div className="space-y-1">
        <h3 className="text-2xl font-bold opacity-70">{title}</h3>
        <p className="text-xl font-semibold">{description}</p>
      </div>
      <Button variant="immersive" className="max-xl:px-4" size="lg" asChild>
        <NextLink href="/lesson">
          <NotebookText className="" />
          <span className="ml-2 max-xl:hidden">Continue</span>
        </NextLink>
      </Button>
    </header>
  )
}
