import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Jacob Lin',
  description: 'Nice to meet you!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
