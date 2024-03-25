import { Gabarito, Capriola } from 'next/font/google'

import { Kodchasan, Unbounded } from 'next/font/google'

const kod = Kodchasan({ variable: '--font-kod', subsets: ['latin'], weight: ['400', '700'] })
const unbounded = Unbounded({ variable: '--font-unb', subsets: ['latin'] })

const capriola = Capriola({ variable: '--font-capriola', subsets: ['latin'], weight: '400' })

const gabarito = Gabarito({
  variable: '--font-gabarito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
})

export const fonts = `${gabarito.variable} ${capriola.variable} ${unbounded.variable} ${kod.variable}`
