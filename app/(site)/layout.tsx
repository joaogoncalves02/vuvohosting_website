import '@/styles/globals.css'
import { ReactNode } from 'react'
import { Inter, Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DefaultSeo } from 'next-seo'
import { defaultSeo } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-heading' })

export const metadata = {
  title: 'Vuvo Hosting',
  description: 'Tecnologia que faz o teu negócio andar para a frente.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans bg-white text-neutral-800">
        <DefaultSeo {...defaultSeo} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
