import NextLink from 'next/link'
import { MoveLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Learn() {
  return (
    <div className="">
      <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-background pb-2 text-muted-foreground sm:z-50">
        <NextLink href="/courses" asChild>
          <Button variant="ghost" size="icon" className="text-inherit">
            <MoveLeft className="size-6" strokeWidth={2} />
          </Button>
        </NextLink>
        <h1 className="text-lg font-bold uppercase">French</h1>
      </div>
    </div>
  )
}
