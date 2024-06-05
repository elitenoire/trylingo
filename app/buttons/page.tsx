import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/toggle'
import { LessonButtons } from './lessonbutton'

const ButtonsPage = () => {
  return (
    <div className="space-y-6">
      <div className="mx-12 mt-8">
        <ThemeToggle className="text-3xl" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 p-4">
        <Button disabled>Disabled</Button>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="highlight">Highlight</Button>
        <Button variant="locked">Locked</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="super">Super</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="ghost" className="text-primary">
          Primary Ghost
        </Button>
        <Button variant="ghost" className="text-secondary">
          Secondary Ghost
        </Button>
        <Button variant="active">Active</Button>
        <Button variant="incorrect">Incorrect</Button>
        <Button variant="correct">Correct</Button>
      </div>
      <LessonButtons />
    </div>
  )
}

export default ButtonsPage
