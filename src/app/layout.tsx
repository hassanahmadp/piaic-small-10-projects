import './globals.css'
import { Inter, League_Spartan } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const league_spartan = League_Spartan({ subsets: ['latin'] })

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
      <body className={league_spartan.className}>{children}</body>
    </html>
  )
}
