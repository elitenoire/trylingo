import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme/provider'
import { Analytics } from '@/components/Analytics'

import { sharedMetadata } from '@/config/metadata'

import { fonts } from '@/styles/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: '%s | Lingo App',
    default: 'Lingo App - Unlock a new language.',
  },
  description:
    'Master a new language with the Lingo app - the fun and easy way to speak like a local!',
  keywords: ['Duolingo', 'Language', 'Learn Languages'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts} font-sans`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
