"use client"

import Link from "next/link"
import { Shield, UserCheck, Lock, Server, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

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
  {
    icon: Shield,
    title: "GDPR Compliance",
    description: "Comprehensive GDPR compliance solutions for EU data protection and privacy.",
    href: "/solutions/gdpr",
    features: ["GDPR Assessment", "Data Mapping", "Compliance Program"],
  },
  {
    icon: Shield,
    title: "CCPA Compliance",
    description: "California Consumer Privacy Act compliance solutions for data privacy and protection.",
    href: "/solutions/ccpa",
    features: ["CCPA Assessment", "Data Discovery", "Compliance Program"],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ParticleBackground />
      <section className="py-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-3xl p-10 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-bluelagoon-700 dark:text-bluelagoon-400 mb-4">Our Services</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive cybersecurity and compliance solutions tailored to protect your business in today's digital landscape.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="bg-white dark:bg-bluelagoon-900/40 backdrop-blur-sm border border-bluelagoon-100 dark:border-bluelagoon-800/30 rounded-xl p-8 flex flex-col h-full shadow hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-bluelagoon-500/20 to-bluelagoon-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-bluelagoon-500 dark:text-bluelagoon-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-bluelagoon-700 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-bluelagoon-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="mt-auto">
                      <Button
                        variant="outline"
                        className="w-full border-bluelagoon-500/50 text-bluelagoon-500 dark:text-bluelagoon-400 hover:bg-bluelagoon-500/10 hover:border-bluelagoon-400 transition-all duration-200 bg-transparent backdrop-blur-sm"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
} 