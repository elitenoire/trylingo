import { ButtonBase } from '@/components/user/learn/LearnButton/ButtonBase'

export function LessonButtons() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-evenly gap-4">
        <ButtonBase icon="check" variant="primary" aria-label="Completed Lesson" />
        <ButtonBase icon="check" variant="highlight" aria-label="Completed Lesson" />
        <ButtonBase icon="check" variant="super" aria-label="Completed Lesson" />
        <ButtonBase icon="check" variant="secondary" aria-label="Completed Lesson" />
        <ButtonBase icon="crown" variant="golden" aria-label="Completed Lesson" />
        <ButtonBase icon="check" variant="danger" aria-label="Completed Lesson" />
        <ButtonBase icon="star" variant="danger" aria-label="Start Lesson" />
        <ButtonBase icon="last" variant="danger" aria-label="Start Lesson" />
        <ButtonBase icon="last" variant="locked" aria-label="Locked Lesson" />
      </div>
    </div>
  )
}
