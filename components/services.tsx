"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Shield, UserCheck, Lock, Server, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Shield,
    title: "GRC Services",
    description: "Governance, Risk and Compliance framework to secure business critical data and manage privacy.",
    href: "/services/grc",
    features: ["ISO 27001 Implementation", "Risk Management", "Compliance Audits"],
  },
  {
    icon: UserCheck,
    title: "Virtual CISO",
    description: "Outsourced security leadership providing expert guidance on cybersecurity strategy and governance.",
    href: "/services/virtual-ciso",
    features: ["Security Strategy", "Risk Assessment", "Compliance Management"],
  },
  {
    icon: Lock,
    title: "Cybersecurity & Data Privacy",
    description: "Comprehensive protection against digital threats with advanced detection and response capabilities.",
    href: "/services/cybersecurity",
    features: ["Threat Detection", "Incident Response", "Security Monitoring"],
  },
  {
    icon: Server,
    title: "Managed Security (MSSP)",
    description: "24/7 security monitoring and management with specialized expertise and threat intelligence.",
    href: "/services/mssp",
    features: ["24/7 Monitoring", "Threat Intelligence", "Incident Response"],
  },
  {
    icon: Eye,
    title: "SOC as a Service",
    description: "Fully-managed Security Operations Center providing real-time threat detection and response.",
    href: "/services/soc",
    features: ["Real-time Monitoring", "Threat Analysis", "Incident Investigation"],
  },
  {
    icon: FileText,
    title: "DPO as a Service",
    description: "Dedicated Data Protection Officer services ensuring GDPR compliance and privacy management.",
    href: "/services/dpo",
    features: ["GDPR Compliance", "Privacy Audits", "Data Protection"],
  },
]

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity and compliance solutions tailored to protect your business in today's digital
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={service.title}
                className={`bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group border border-gray-700/50 hover:border-green-500/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-green-500/20">
                    <Icon className="w-8 h-8 text-green-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-200 bg-transparent backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
