import { Gabarito, Capriola } from 'next/font/google'

const capriola = Capriola({ variable: '--font-capriola', subsets: ['latin'], weight: '400' })

const gabarito = Gabarito({
  variable: '--font-gabarito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const fonts = `${gabarito.variable} ${capriola.variable}`
