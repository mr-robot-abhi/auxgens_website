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
    <section className="relative pt-32 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left: Text Content */}
          <div className="flex-1 w-full text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Securing Today for
                <span className="block bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 dark:from-bluelagoon-400 dark:to-bluelagoon-300 bg-clip-text text-transparent mt-2">
                  A Better Tomorrow
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                AUXGENS delivers innovative cybersecurity solutions and strategic insights to help your business achieve sustainable growth, operational excellence, and competitive advantage in today's dynamic market.
              </p>
            </div>
            
            {/* Right: Hero Image - Moved up for better initial view */}
            <div className="w-full h-64 sm:h-80 md:h-96 lg:hidden my-8 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/bg_1.jpg" 
                alt="AUXGENS Cybersecurity Solutions"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 hover:from-bluelagoon-700 hover:to-bluelagoon-600 text-white px-10 py-6 text-lg rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-bluelagoon-500/25 hover:scale-105 border border-bluelagoon-500/20">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-bluelagoon-500/50 dark:border-bluelagoon-400/50 text-bluelagoon-600 dark:text-bluelagoon-400 hover:bg-bluelagoon-500/10 dark:hover:bg-bluelagoon-400/10 hover:border-bluelagoon-500 dark:hover:border-bluelagoon-400 px-10 py-6 text-lg rounded-xl font-semibold transition-all duration-200 hover:shadow-lg bg-transparent backdrop-blur-sm"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
            {/* Features below buttons */}
            <div className="mt-12 w-full">
              <Features />
            </div>
          </div>
          
          {/* Right: Hero Image - Desktop */}
          <div className="hidden lg:flex flex-1 items-center justify-center w-full max-w-2xl h-[500px] ml-12">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/bg_1.jpg" 
                alt="AUXGENS Cybersecurity Solutions"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
