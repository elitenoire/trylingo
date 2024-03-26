import { ThemeToggle } from '@/components/theme/toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-12 my-8">
        <ThemeToggle className="text-6xl transition" />
      </div>
      <div className="my-12 space-y-8">
        <h2 className={`font-cap text-3xl font-semibold`}>
          Cap Lingo - Stay motivated. Backed by science. anytime, anywhere.
        </h2>
        <p className={`font-sans text-xl`}>
          The free, fun, and effective way to learn a language! Teachers, we’re here to help you!
          Our free tools support your students as they learn languages through the Duolingo app,
          both in and out of the classroom.
        </p>
        <h2 className={`font-unb text-3xl font-semibold`}>
          Unb Lingo - Stay motivated. Backed by science. anytime, anywhere.
        </h2>
        <p className={`font-sans text-xl`}>
          The free, fun, and effective way to learn a language! Teachers, we’re here to help you!
          Our free tools support your students as they learn languages through the Duolingo app,
          both in and out of the classroom.
        </p>

        <h2 className={`font-kod text-3xl font-semibold`}>
          Kod Lingo - Stay motivated. Backed by science. anytime, anywhere.
        </h2>
        <p className={`font-sans text-xl`}>
          The free, fun, and effective way to learn a language! Teachers, we’re here to help you!
          Our free tools support your students as they learn languages through the Duolingo app,
          both in and out of the classroom.
        </p>

        <h2 className={`font-sans text-3xl font-semibold`}>
          Gab Lingo - Stay motivated. Backed by science. anytime, anywhere.
        </h2>
        <p className={`font-sans text-xl`}>
          The free, fun, and effective way to learn a language! Teachers, we’re here to help you!
          Our free tools support your students as they learn languages through the Duolingo app,
          both in and out of the classroom.
        </p>
      </div>
    </main>
  )
}
