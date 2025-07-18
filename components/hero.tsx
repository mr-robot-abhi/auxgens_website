"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, Zap } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex items-center justify-center pt-48 pb-16">
      {/* Floating security icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield className="absolute top-20 left-10 w-8 h-8 text-bluelagoon-500/30 dark:text-bluelagoon-500/20 animate-pulse" />
        <Lock className="absolute top-40 right-20 w-6 h-6 text-blue-500/30 dark:text-blue-500/20 animate-pulse delay-1000" />
        <Eye className="absolute bottom-40 left-20 w-7 h-7 text-purple-500/30 dark:text-purple-500/20 animate-pulse delay-2000" />
        <Zap className="absolute bottom-20 right-10 w-5 h-5 text-bluelagoon-500/30 dark:text-bluelagoon-500/20 animate-pulse delay-500" />
      </div>

      <div className="text-center max-w-5xl mx-auto px-4 relative z-10">
        {/* Content */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Securing Today for
              <span className="text-bluelagoon-600 dark:text-bluelagoon-400 block bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 dark:from-bluelagoon-400 dark:to-bluelagoon-300 bg-clip-text text-transparent">
                A Better Tomorrow
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Professional managed cyber & information security data service provider with global expertise. Protecting
              your business operations with cutting-edge technology and industry-wide experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 hover:from-bluelagoon-700 hover:to-bluelagoon-600 text-white px-8 py-3 text-base rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-bluelagoon-500/25 hover:scale-105 border border-bluelagoon-500/20">
                Get Protected Today
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-bluelagoon-500/50 dark:border-bluelagoon-400/50 text-bluelagoon-600 dark:text-bluelagoon-400 hover:bg-bluelagoon-500/10 dark:hover:bg-bluelagoon-400/10 hover:border-bluelagoon-500 dark:hover:border-bluelagoon-400 px-8 py-3 text-base rounded-lg font-medium transition-all duration-200 hover:shadow-lg bg-transparent backdrop-blur-sm"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
