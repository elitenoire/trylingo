import type { PropsWithChildren } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

type MobileSheetProps = {}

export function MobileSheet({ children }: PropsWithChildren<MobileSheetProps>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-2xl">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-11/12 max-w-xs p-0">
        {children}
      </SheetContent>
    </Sheet>
  )
}
