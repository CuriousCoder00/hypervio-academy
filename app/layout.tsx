import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HyperVio Academy - Digital Learning Platform',
  description: 'Hypervio is a unique and modern name that combines the words "hyper" and "vio". "Hyper" suggests speed, innovation, and advancement, while "vio" could be short for "vision" or "virtual". Together, the name conveys a sense of cutting-edge technology and forward-thinking solutions. This name is well-suited for an IT company that offers internships to students and provides a range of web and IT services, as it suggests a focus on the future and a commitment to staying ahead of the curve.',
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
      sizes: '512x512',
      type: 'image/svg',
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
