"use client"

import { ShieldCheck, UserCheck, Lock, DatabaseZap, Radar, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: ShieldCheck,
    title: "GRC Services",
    description: "Governance, Risk and Compliance framework to secure business critical data and manage privacy.",
    points: ["ISO 27001 implementation", "Risk Management", "Compliance Audits"],
    href: "/services/grc",
  },
  {
    icon: UserCheck,
    title: "Virtual CISO",
    description: "Outsourced security leadership providing expert guidance on cybersecurity strategy and governance.",
    points: ["Security Strategy", "Risk Assessment", "Compliance Management"],
    href: "/services/vciso",
  },
  {
    icon: Lock,
    title: "Cybersecurity & Data Privacy",
    description: "Comprehensive protection against digital threats with advanced detection and response capabilities.",
    points: ["Threat Detection", "Incident Response", "Security Monitoring"],
    href: "/services/cybersecurity",
  },
  {
    icon: DatabaseZap,
    title: "Managed Security (MSSP)",
    description: "24/7 security monitoring and management with specialized expertise and threat intelligence.",
    points: ["24/7 Monitoring", "Threat Intelligence", "Incident Response"],
    href: "/services/mssp",
  },
  {
    icon: Radar,
    title: "SOC as a Service",
    description: "Fully-managed Security Operations Center providing real-time threat detection and response.",
    points: ["Real-time Monitoring", "Threat Analysis", "Incident Investigation"],
    href: "/services/soc",
  },
  {
    icon: FileText,
    title: "DPO as a Service",
    description: "Dedicated Data Protection Officer services ensuring GDPR compliance and privacy management.",
    points: ["GDPR Compliance", "Privacy Audits", "Data Protection"],
    href: "/services/dpo",
  },
]

export default function DetailedServices() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:border-green-500/50 dark:hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-600 to-green-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2 mb-6 text-gray-500 dark:text-gray-400">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="w-full border-green-500/50 dark:border-green-400/50 text-green-600 dark:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-400/10 hover:text-green-700 dark:hover:text-green-300 hover:border-green-500 dark:hover:border-green-400"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
