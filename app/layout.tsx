import type { Metadata } from 'next'
import { MotionProvider } from '@/components/providers/motion-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
  icons: {
    icon: '/briefcase-business.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
