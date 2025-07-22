"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Eye, Zap } from "lucide-react"
import Features from "@/components/features"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-48 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col lg:flex-row items-start gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left: Text Content and Features */}
          <div className="flex-1 max-w-lg w-full text-left flex flex-col justify-start lg:mt-[-40px] lg:pr-8">
            <div className="space-y-4 mb-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Securing Today for
                <span className="text-bluelagoon-600 dark:text-bluelagoon-400 block bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 dark:from-bluelagoon-400 dark:to-bluelagoon-300 bg-clip-text text-transparent">
                  A Better Tomorrow
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                AUXGENS delivers innovative cybersecurity solutions and strategic insights to help your business achieve sustainable growth, operational excellence, and competitive advantage in today's dynamic market.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 hover:from-bluelagoon-700 hover:to-bluelagoon-600 text-white px-8 py-3 text-base rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-bluelagoon-500/25 hover:scale-105 border border-bluelagoon-500/20">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-bluelagoon-500/50 dark:border-bluelagoon-400/50 text-bluelagoon-600 dark:text-bluelagoon-400 hover:bg-bluelagoon-500/10 dark:hover:bg-bluelagoon-400/10 hover:border-bluelagoon-500 dark:hover:border-bluelagoon-400 px-8 py-3 text-base rounded-lg font-medium transition-all duration-200 hover:shadow-lg bg-transparent backdrop-blur-sm"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
            {/* Features directly below text/buttons */}
            <Features />
          </div>
          {/* Right: Image Placeholder */}
          <div className="flex-1 flex items-center justify-center w-full max-w-xl h-[320px] lg:h-[400px] mt-8 lg:mt-0 lg:ml-24">
            {/* Placeholder for uploaded image */}
            <div className="w-full h-full bg-gray-100 border-2 border-dashed border-bluelagoon-200 rounded-2xl flex items-center justify-center">
              <span className="text-bluelagoon-400 text-lg">Image coming soon...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
