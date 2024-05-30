import LoadingSVG from '@/public/img/icons/loader.svg'

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-loading/50">
      <LoadingSVG className="size-7 animate-spin" />
    </div>
  )
}
