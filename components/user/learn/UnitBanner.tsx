import NextLink from 'next/link'
import { NotebookText } from 'lucide-react'
import { Button } from '@/components/ui/button'

type UnitBannerProps = {
  title: string
  description: string
}

export function UnitBanner({ title, description }: UnitBannerProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-primary p-5 text-background">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold opacity-75">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <Button className="" size="lg" asChild>
        <NextLink href="/lesson">
          <NotebookText className="" />
          <span className="ml-2 max-xl:hidden">Continue</span>
        </NextLink>
      </Button>
    </div>
  )
}
