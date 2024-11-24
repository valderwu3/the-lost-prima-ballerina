// 'use client'

import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Lost Prima Ballerina Full Movie | Free Watch Online | No Sign Up | No Ads',
  description: 'To watch full movie of The Lost Prima Ballerina, A mesmerizing journey through the world of ballet, a home for fan communication and interaction.',
  icons: {
    apple: '/favicon/apple-touch-icon.png',
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  manifest: '/favicon/site.webmanifest',
  keywords: 'the lost prima ballerina full movie, the lost prima ballerina cast, the lost prima ballerina full movie free, the lost ballerina full movie, lost prima ballerina full movie, the lost prima ballerina'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YG5W0C47VY" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YG5W0C47VY');
          `}
        </Script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
} 