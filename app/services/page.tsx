"use client"

import Link from "next/link"
import { Shield, UserCheck, Lock, Server, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Comprehensive Solutions for <span className="text-bluelagoon-600">Your Business Growth</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From strategic consulting to technology implementation, we offer end-to-end solutions that drive measurable results and sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-bluelagoon-100"
                >
                  <div className="w-16 h-16 mb-6 rounded-xl bg-bluelagoon-50 flex items-center justify-center group-hover:bg-bluelagoon-100 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-bluelagoon-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-bluelagoon-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-bluelagoon-600 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-bluelagoon-600 hover:text-bluelagoon-700 font-medium group"
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Why Choose AUXGENS Section */}
      <section className="py-20 bg-gradient-to-b from-white to-bluelagoon-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Choose <span className="text-bluelagoon-600">AUXGENS</span>?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We combine deep industry expertise with innovative solutions to deliver exceptional value to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Expertise */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-bluelagoon-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-bluelagoon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
              <p className="text-gray-700">Our team brings years of experience and deep knowledge in cybersecurity and compliance.</p>
            </div>
            
            {/* Custom Solutions */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-bluelagoon-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-bluelagoon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-700">Tailored approaches that address your unique business challenges and goals.</p>
            </div>
            
            {/* Results Driven */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 bg-bluelagoon-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-bluelagoon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-700">Track record of delivering measurable outcomes and business value.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-bluelagoon-900 mb-6">Ready to transform your business?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-bluelagoon-600 hover:bg-bluelagoon-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Started
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center border border-bluelagoon-600 text-bluelagoon-600 hover:bg-bluelagoon-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}