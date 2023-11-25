import { Montserrat, Fraunces } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: [ '500'],
  variable: '--font-montserrat'
})

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-fraunces'

})
