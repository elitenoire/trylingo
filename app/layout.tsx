import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme/provider'

import { sharedMetadata } from '@/config/metadata'

import { fonts } from '@/styles/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: '%s | Lingo App',
    default: 'Lingo - Best language learning app',
  },
  description: 'The most popular language learning app. Learn languages with ease.',
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
      </body>
    </html>
  )
}
