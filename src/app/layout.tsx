import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InterNull | Institutional Confidentiality Middleware',
  description: 'Multi-chain privacy middleware that preserves competitive advantage while enabling full regulatory compliance. Built for market makers, crypto funds, custodians, and DAOs.',
  keywords: 'institutional crypto privacy, blockchain confidentiality middleware, compliant on-chain settlements, enterprise privacy infrastructure',
  openGraph: {
    title: 'InterNull | Institutional Confidentiality Middleware',
    description: 'Privacy + Compliance + Multi-Chain. Non-Custodial infrastructure for institutional digital assets.',
    url: 'https://internull.xyz',
    siteName: 'InterNull',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InterNull | Institutional Confidentiality Middleware',
    description: 'Privacy + Compliance + Multi-Chain for institutional digital assets',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
