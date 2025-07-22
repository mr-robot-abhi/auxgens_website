import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import CyberGrid from "@/components/cyber-grid"

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
        url: "/images/Auxgens_Logo_expnad-removebg-preview.png",
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
    images: ["/images/Auxgens_Logo_expnad-removebg-preview.png"],
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
          <div className="min-h-screen relative overflow-hidden">
            {/* Cybersecurity-themed background (from homepage) */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black z-0">
              {/* Subtle tech pattern overlay */}
              <div className="absolute inset-0 opacity-5 dark:opacity-20 bg-[url('/images/security-pattern.png')] bg-repeat bg-[length:200px_200px]" />
              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 dark:from-black/20 via-transparent to-bluelagoon-100/10 dark:to-bluelagoon-900/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-bluelagoon-50/5 dark:via-bluelagoon-900/5 to-blue-50/10 dark:to-blue-900/10" />
              {/* Radial gradients for ambient lighting */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,149,182,0.08)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(0,149,182,0.15)_0%,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.04)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
            </div>
            {/* Particle and grid effects (ensure z-10 for overlays) */}
            <CyberGrid />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
