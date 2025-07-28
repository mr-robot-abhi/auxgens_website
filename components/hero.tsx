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
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Left: Text Content */}
          <div className="flex-1 w-full text-left">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Securing Today for
                <span className="block bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 dark:from-bluelagoon-400 dark:to-bluelagoon-300 bg-clip-text text-transparent mt-2 lg:mt-3">
                  A Better Tomorrow
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                AUXGENS delivers innovative cybersecurity solutions and strategic insights to help your business achieve sustainable growth, operational excellence, and competitive advantage in today's dynamic market.
              </p>
            </div>
            
            {/* Buttons - Positioned right after text */}
            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 hover:from-bluelagoon-700 hover:to-bluelagoon-600 text-white px-8 py-5 text-base sm:text-lg rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-bluelagoon-500/25 hover:scale-[1.02] border border-bluelagoon-500/20">
                  Start Your Transformation
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-bluelagoon-500/50 dark:border-bluelagoon-400/50 text-bluelagoon-600 dark:text-bluelagoon-400 hover:bg-bluelagoon-500/10 dark:hover:bg-bluelagoon-400/10 hover:border-bluelagoon-500 dark:hover:border-bluelagoon-400 px-8 py-5 text-base sm:text-lg rounded-xl font-semibold transition-all duration-200 hover:shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
            
            {/* Features below buttons */}
            <div className="mt-10 w-full">
              <Features />
            </div>
          </div>
          
          {/* Right: Hero Image - Desktop - Made larger */}
          <div className="hidden lg:flex flex-1 items-center justify-center w-full max-w-xl h-[450px] lg:ml-8">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="/images/bg_1.png" 
                alt="AUXGENS Cybersecurity Solutions"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
          
          {/* Mobile Hero Image - Moved below content */}
          <div className="w-full lg:hidden h-80 sm:h-96 md:h-[32rem] mt-12 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/bg_1.png" 
              alt="AUXGENS Cybersecurity Solutions"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
