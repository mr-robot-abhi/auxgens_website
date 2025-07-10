"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Server, Eye, FileCheck, Scale, Lock, ChevronRight } from "lucide-react"
import ParticleBackground from "./particle-background"
import CyberGrid from "./cyber-grid"

const items = [
  { id: "grc", name: "GRC Services", description: "Governance, Risk & Compliance", icon: Scale, href: "/services/grc", angle: 0, radius: 280, color: "from-blue-500 to-blue-600" },
  { id: "vciso", name: "vCISO", description: "Virtual CISO Services", icon: Shield, href: "/services/virtual-ciso", angle: 45, radius: 280, color: "from-purple-500 to-purple-600" },
  { id: "ccpa", name: "CCPA", description: "California Privacy Act", icon: Shield, href: "/solutions/ccpa", angle: 90, radius: 280, color: "from-teal-500 to-teal-600" },
  { id: "dpo", name: "DPO Service", description: "Data Protection Officer", icon: FileCheck, href: "/services/dpo", angle: 135, radius: 280, color: "from-indigo-500 to-indigo-600" },
  { id: "soc", name: "SOC Service", description: "24/7 Security Operations", icon: Eye, href: "/services/soc", angle: 180, radius: 280, color: "from-cyan-500 to-cyan-600" },
  { id: "gdpr", name: "GDPR", description: "EU Data Protection", icon: FileCheck, href: "/solutions/gdpr", angle: 225, radius: 280, color: "from-green-500 to-green-600" },
  { id: "cybersecurity", name: "Cybersecurity", description: "Data Protection", icon: Lock, href: "/services/cybersecurity", angle: 270, radius: 280, color: "from-red-500 to-red-600" },
  { id: "mssp", name: "MSSP", description: "Managed Security Services", icon: Server, href: "/services/mssp", angle: 315, radius: 280, color: "from-orange-500 to-orange-600" },
]

const getPosition = (angle: number, radius: number): { x: number; y: number } => {
  const rad = (angle * Math.PI) / 180
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius }
}

export default function PlatformEcosystem() {
  const containerRef = useRef(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const centerX = 400, centerY = 300, viewBoxWidth = 800, viewBoxHeight = 600

  return (
    <section className="relative pt-10 pb-20 overflow-hidden">

      {/* Content container */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Auxgens <span className="text-green-600 dark:text-green-400">Cybersecurity Platform</span>
          </h2>
        </div>
        <br />
        <br />
        <div ref={containerRef} className="relative flex items-center justify-center w-full h-[600px]">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {items.map((item) => {
              const { x, y } = getPosition(item.angle, item.radius)
              return (
                <line key={`line-${item.id}`} x1={centerX} y1={centerY} x2={centerX + x} y2={centerY + y} stroke="rgba(34, 197, 94, 0.8)" strokeWidth="1.5" filter="url(#glow)" style={{ opacity: hoveredItem === item.id ? 1 : 0.6, transition: 'opacity 0.3s ease-in-out' }} />
              )
            })}

            <circle cx={centerX} cy={centerY} r="60" fill="none" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.5" />
            <circle cx={centerX} cy={centerY} r="90" fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1.5" />
          </svg>

          <div className="absolute z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-green-500/60 dark:border-green-400/50 shadow-2xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <Image
              src="/images/auxgens-green.png"
              alt="Auxgens Logo"
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>

          {items.map((item) => {
            const { x, y } = getPosition(item.angle, item.radius)
            const Icon = item.icon
            return (
              <div key={item.id} className="absolute z-20 animate-fade-in-up" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)', width: '180px' }} onMouseEnter={() => setHoveredItem(item.id as string)} onMouseLeave={() => setHoveredItem(null)}>
                <Link href={item.href}>
                  <div className="relative group cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-lg opacity-30 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-75 transition-opacity duration-300`} />
                    <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 w-full group-hover:border-green-500/50 dark:group-hover:border-green-400/50 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.name}</h4>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{item.description}</p>
                      <div className="flex items-center text-green-600 dark:text-green-400 text-xs font-medium">
                        {item.href.includes('/solutions/') ? 'Explore' : 'Learn More'} <ChevronRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <br />
        <br />
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
