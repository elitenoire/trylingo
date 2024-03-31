export function Footer() {
  return (
    <footer className="px-1">
      <div className="rounded-4xl bg-primary-depth mx-auto h-96 text-card-foreground dark:bg-card sm:w-11/12">
        <p className="font-display">Lingo</p>
      </div>
      <p className="my-4 px-1 text-center text-sm">
        © 2024 Lingo by{' '}
        <a
          href="https://github.com/elitenoire"
          target="_blank"
          className="font-semibold decoration-dotted transition hover:underline"
        >
          @elitenoire
        </a>{' '}
        +{' '}
        <a
          href="https://www.youtube.com/@codewithantonio"
          target="_blank"
          className="font-semibold decoration-dotted transition hover:underline"
        >
          @CodeWithAntonio
        </a>
        .
      </p>
    </footer>
  )
}
