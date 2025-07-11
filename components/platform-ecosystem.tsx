"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Shield, Server, Eye, FileCheck, Scale, Lock, ChevronRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

const items = [
  { id: "grc", name: "GRC Services", description: "Governance, Risk & Compliance", icon: Scale, href: "/services/grc", color: "from-blue-500 to-blue-600" },
  { id: "vciso", name: "vCISO", description: "Virtual CISO Services", icon: Shield, href: "/services/virtual-ciso", color: "from-purple-500 to-purple-600" },
  { id: "ccpa", name: "CCPA", description: "California Privacy Act", icon: Shield, href: "/solutions/ccpa", color: "from-teal-500 to-teal-600" },
  { id: "dpo", name: "DPO Service", description: "Data Protection Officer", icon: FileCheck, href: "/services/dpo", color: "from-indigo-500 to-indigo-600" },
  { id: "soc", name: "SOC Service", description: "24/7 Security Operations", icon: Eye, href: "/services/soc", color: "from-cyan-500 to-cyan-600" },
  { id: "gdpr", name: "GDPR", description: "EU Data Protection", icon: FileCheck, href: "/solutions/gdpr", color: "from-green-500 to-green-600" },
  { id: "cybersecurity", name: "Cybersecurity", description: "Data Protection", icon: Lock, href: "/services/cybersecurity", color: "from-red-500 to-red-600" },
  { id: "mssp", name: "MSSP", description: "Managed Security Services", icon: Server, href: "/services/mssp", color: "from-orange-500 to-orange-600" },
]

function MagnetLines({ tileRefs }: { tileRefs: React.RefObject<HTMLDivElement>[] }) {
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([])

  useEffect(() => {
    function updateLines() {
      const newLines = []
      for (let i = 0; i < tileRefs.length - 1; i++) {
        const refA = tileRefs[i].current
        const refB = tileRefs[i + 1].current
        if (refA && refB) {
          const rectA = refA.getBoundingClientRect()
          const rectB = refB.getBoundingClientRect()
          newLines.push({
            x1: rectA.left + rectA.width / 2,
            y1: rectA.top + rectA.height / 2,
            x2: rectB.left + rectB.width / 2,
            y2: rectB.top + rectB.height / 2,
          })
        }
      }
      setLines(newLines)
    }
    updateLines()
    window.addEventListener("resize", updateLines)
    return () => window.removeEventListener("resize", updateLines)
  }, [tileRefs])

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ left: 0, top: 0 }}>
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(34,197,94,0.5)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
    </svg>
  )
}

export default function PlatformEcosystem() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const tileRefs = items.map(() => useRef<HTMLDivElement>(null))
  const controls = useAnimation()

  // Auto-scroll effect
  useEffect(() => {
    let frame: number
    let scroll = 0
    function animate() {
      if (galleryRef.current) {
        scroll += 0.7
        if (scroll > galleryRef.current.scrollWidth / 2) scroll = 0
        galleryRef.current.scrollLeft = scroll
      }
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative pt-10 pb-20 overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Auxgens <span className="text-green-600 dark:text-green-400">Cybersecurity Platform</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our sophisticated ecosystem of cybersecurity services and solutions, now in a dynamic, animated gallery.
            </p>
          </div>
          <div className="relative w-full max-w-6xl mx-auto h-64 flex items-center">
            <div ref={galleryRef} className="relative flex flex-nowrap overflow-x-auto no-scrollbar w-full h-full z-10" style={{ scrollBehavior: 'smooth' }}>
              {items.concat(items).map((item, i) => {
                // Duplicate for infinite scroll
                const Icon = item.icon
                const ref = tileRefs[i % items.length]
                return (
                  <motion.div
                    key={i}
                    ref={ref}
                    className="group relative min-w-[260px] max-w-[260px] h-56 mx-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl flex flex-col items-center justify-center transition-all duration-300 hover:border-green-500/60 dark:hover:border-green-400/60 hover:shadow-green-500/10 dark:hover:shadow-green-400/10 cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i % items.length) * 0.08, type: "spring", stiffness: 120, damping: 18 }}
                    whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.18)" }}
                  >
                    <div className={`mb-4 p-4 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1 text-center">{item.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">{item.description}</p>
                    <Link href={item.href} className="inline-flex items-center text-green-600 dark:text-green-400 font-medium text-sm group-hover:underline">
                      {item.href.includes('/solutions/') ? 'Explore' : 'Learn More'}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
            <MagnetLines tileRefs={tileRefs} />
          </div>
          <div className="text-center mt-16">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25">
                Start Your Security Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
