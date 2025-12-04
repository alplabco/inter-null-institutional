import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Internull | Privacy-Preserving Cross-Chain Transactions for Institutions',
  description: 'Cross-chain privacy protocol enabling confidential crypto transactions across EVM and Solana ecosystems. Permissioned privacy pools with KYC, MiCA compliance, Travel Rule support, and full auditability for institutional actors.',
  keywords: 'institutional crypto privacy, cross-chain privacy protocol, compliant privacy pools, MiCA compliance, Travel Rule crypto, DORA compliance, institutional blockchain privacy, permissioned privacy pools, KYC crypto privacy',
  openGraph: {
    title: 'Internull | Privacy-Preserving Cross-Chain Transactions',
    description: 'Deposit on one chain, withdraw on another with zero linkage. Compliant privacy for VCs, hedge funds, market makers, and family offices.',
    url: 'https://internull.xyz',
    siteName: 'Internull',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internull | Institutional Cross-Chain Privacy',
    description: 'Permissioned privacy pools with full regulatory compliance. Built for institutional digital assets.',
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
