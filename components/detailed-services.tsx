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
    description: "Security monitoring and management with specialized expertise and threat intelligence.",
    points: ["Monitoring", "Threat Intelligence", "Incident Response"],
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
  {
    icon: ShieldCheck,
    title: "GDPR Compliance",
    description: "Comprehensive GDPR compliance solutions for EU data protection and privacy.",
    points: ["GDPR Assessment", "Data Mapping", "Compliance Program"],
    href: "/solutions/gdpr",
  },
  {
    icon: ShieldCheck,
    title: "CCPA Compliance",
    description: "California Consumer Privacy Act compliance solutions for data privacy and protection.",
    points: ["CCPA Assessment", "Data Discovery", "Compliance Program"],
    href: "/solutions/ccpa",
  },
]

export default function DetailedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bluelagoon-900 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-lg text-bluelagoon-700 max-w-3xl mx-auto">
            Protect your business with our end-to-end security services and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-bluelagoon-100 hover:border-bluelagoon-300 overflow-hidden h-full flex flex-col group"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-bluelagoon-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bluelagoon-100 transition-all duration-300">
                    <Icon className="w-8 h-8 text-bluelagoon-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-bluelagoon-900 mb-3 group-hover:text-bluelagoon-700 transition-colors">{service.title}</h3>
                  <p className="text-bluelagoon-700 mb-6 flex-grow">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-bluelagoon-500 mt-0.5 mr-2 flex-shrink-0" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="text-bluelagoon-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-6 pb-6 pt-2 border-t border-bluelagoon-100">
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="w-full border-bluelagoon-300 text-bluelagoon-700 hover:bg-bluelagoon-50 hover:border-bluelagoon-400 hover:text-bluelagoon-800 transition-colors"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
