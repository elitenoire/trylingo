'use client'

import { type ComponentProps, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const BREAKPOINT_QUERY = '(min-width: 640px)'

const AdaptiveModal = ({ open = false, onOpenChange, ...props }: ComponentProps<typeof Drawer>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  const [_open, _setOpen] = useState(open)
  const handleOpenChange = (_open: boolean) => {
    _setOpen(_open)
    onOpenChange?.(_open)
  }

  if (isDesktop) {
    return <Dialog open={_open} onOpenChange={handleOpenChange} {...props} />
  }
  return <Drawer open={_open} onOpenChange={handleOpenChange} {...props} />
}
AdaptiveModal.displayName = 'AdaptiveModal'

const AdaptiveModalTrigger = (props: ComponentProps<typeof DrawerTrigger>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  if (isDesktop) {
    return <DialogTrigger {...props} />
  }
  return <DrawerTrigger {...props} />
}
AdaptiveModalTrigger.displayName = 'AdaptiveModalTrigger'

const AdaptiveModalHeader = (props: ComponentProps<typeof DrawerHeader>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  if (isDesktop) {
    return <DialogHeader {...props} />
  }
  return <DrawerHeader {...props} />
}
AdaptiveModalHeader.displayName = 'AdaptiveModalHeader'

const AdaptiveModalTitle = (props: ComponentProps<typeof DrawerTitle>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  if (isDesktop) {
    return <DialogTitle {...props} />
  }
  return <DrawerTitle {...props} />
}
AdaptiveModalTitle.displayName = 'AdaptiveModalTitle'

const AdaptiveModalDescription = (props: ComponentProps<typeof DrawerDescription>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  if (isDesktop) {
    return <DialogDescription {...props} />
  }
  return <DrawerDescription {...props} />
}
AdaptiveModalDescription.displayName = 'AdaptiveModalDescription'

const AdaptiveModalContent = (props: ComponentProps<typeof DrawerContent>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  if (isDesktop) {
    return <DialogContent {...props} />
  }
  return <DrawerContent {...props} />
}
AdaptiveModalContent.displayName = 'AdaptiveModalContent'

const AdaptiveModalFooter = (props: ComponentProps<typeof DrawerFooter>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  if (isDesktop) {
    return <DialogFooter {...props} />
  }
  return <DrawerFooter {...props} />
}
AdaptiveModalFooter.displayName = 'AdaptiveModalFooter'

const AdaptiveModalClose = (props: ComponentProps<typeof DrawerClose>) => {
  const isDesktop = useMediaQuery(BREAKPOINT_QUERY)
  if (isDesktop) {
    return <DialogClose id="adaptive-modal:close" {...props} />
  }
  return <DrawerClose id="adaptive-modal:close" {...props} />
}
AdaptiveModalClose.displayName = 'AdaptiveModalClose'

export {
  AdaptiveModal,
  AdaptiveModalTrigger,
  AdaptiveModalHeader,
  AdaptiveModalTitle,
  AdaptiveModalDescription,
  AdaptiveModalContent,
  AdaptiveModalFooter,
  AdaptiveModalClose,
}
