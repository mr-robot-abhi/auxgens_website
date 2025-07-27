"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, Users, Award } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Asia US",
    detail: "Worldwide presence for local support",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Industry professionals",
    detail: "Security monitoring and support",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Cutting-edge technology",
    detail: "Advanced threat detection and response",
  },
]

export default function Features() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-6 relative">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={feature.title}
                className={`text-center group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-bluelagoon-500/30 to-bluelagoon-600/40 dark:from-bluelagoon-500/20 dark:to-bluelagoon-600/30 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:from-bluelagoon-400/40 dark:group-hover:from-bluelagoon-400/30 group-hover:to-bluelagoon-500/50 dark:group-hover:to-bluelagoon-500/40 transition-all duration-300 group-hover:scale-110 border-2 border-bluelagoon-500/30 dark:border-bluelagoon-500/20">
                    <Icon className="w-8 h-8 text-bluelagoon-600 dark:text-bluelagoon-400" />
                  </div>
                  <div className="absolute inset-0 bg-bluelagoon-500/20 dark:bg-bluelagoon-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto w-16 h-16 blur-xl"></div>
                </div>
                <h3 className="text-2xl font-bold text-bluelagoon-900 dark:text-white mb-3 group-hover:text-bluelagoon-700 dark:group-hover:text-bluelagoon-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-bluelagoon-700 dark:text-bluelagoon-400 font-semibold mb-2 text-base">{feature.description}</p>
                <p className="text-gray-700 dark:text-gray-300 text-base">{feature.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
