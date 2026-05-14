import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ERROR BAERZ™ | System States Made Physical',
  description: 'An interactive digital art experience featuring futuristic teddy baer sculptures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-grid" />
        {children}
      </body>
    </html>
  )
}
