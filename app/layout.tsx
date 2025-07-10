import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Auxgens - Professional Cybersecurity & Compliance Solutions",
    template: "%s | Auxgens"
  },
  description: "Professional managed cyber & information security data service provider with global expertise. Protecting your business operations with cutting-edge technology and industry-wide experience across Asia Pacific, United States, Europe, Middle East, Africa, and European Union.",
  keywords: [
    "cybersecurity",
    "information security",
    "data protection",
    "compliance",
    "GRC services",
    "virtual CISO",
    "GDPR compliance",
    "CCPA compliance",
    "managed security",
    "SOC as a service",
    "DPO as a service",
    "ISO 27001",
    "security consulting",
    "risk management",
    "threat detection",
    "incident response",
    "security monitoring"
  ],
  authors: [{ name: "Auxgens" }],
  creator: "Auxgens",
  publisher: "Auxgens",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auxgens.com",
    siteName: "Auxgens",
    title: "Auxgens - Professional Cybersecurity & Compliance Solutions",
    description: "Professional managed cyber & information security data service provider with global expertise. Securing today for a better tomorrow.",
    images: [
      {
        url: "/images/auxgens-logo-final.png",
        width: 1200,
        height: 630,
        alt: "Auxgens - Cybersecurity Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auxgens - Professional Cybersecurity & Compliance Solutions",
    description: "Professional managed cyber & information security data service provider with global expertise. Securing today for a better tomorrow.",
    images: ["/images/auxgens-logo-final.png"],
    creator: "@auxgens",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://auxgens.com",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
