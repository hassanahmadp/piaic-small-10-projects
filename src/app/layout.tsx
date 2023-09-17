import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const jsans = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'PIAIC',
  description: 'Created by Muhammad Ahmad Hassan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jsans.className}>{children}</body>
    </html>
  )
}
