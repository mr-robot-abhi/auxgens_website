"use client"

import { useEffect, useRef, useState } from "react"
import { Settings, Users, Database, Server, Smartphone, Shield, ArrowRight, CheckCircle } from "lucide-react"

export default function ServiceFlowcharts() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
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
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50/80 via-white/80 to-blue-50/40 dark:from-slate-900/80 dark:via-slate-800/80 dark:to-blue-950/20 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Flowchart - Service Framework */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Service Framework</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive approach covering all aspects of cybersecurity and compliance
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Service Categories */}
            <div className="grid lg:grid-cols-5 gap-6 mb-8">
              <div className="bg-gray-600 text-white p-4 rounded-lg text-center">
                <Settings className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold mb-2">Process</h3>
                <p className="text-sm">Policy & procedure definition, gap analysis, risk assessment framework</p>
              </div>
              <div className="bg-gray-600 text-white p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold mb-2">People</h3>
                <p className="text-sm">ISMS awareness, roles & responsibilities, compliance management</p>
              </div>
              <div className="bg-gray-600 text-white p-4 rounded-lg text-center">
                <Database className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold mb-2">Data</h3>
                <p className="text-sm">Data governance, classification, risk assessment, protection</p>
              </div>
              <div className="bg-gray-600 text-white p-4 rounded-lg text-center">
                <Server className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold mb-2">Infrastructure</h3>
                <p className="text-sm">Security baseline, IT risk assessment, configuration management</p>
              </div>
              <div className="bg-gray-600 text-white p-4 rounded-lg text-center">
                <Smartphone className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold mb-2">Applications</h3>
                <p className="text-sm">SLA's, CIA assessments, application risk management, SDLC</p>
              </div>
            </div>

            {/* Main Pillars */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-bluelagoon-500 text-white p-6 rounded-lg text-center">
                <Settings className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Service</h3>
              </div>
              <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Governance</h3>
                <p className="text-sm">Policy & procedure definition, gap analysis, re-baselining</p>
              </div>
              <div className="bg-yellow-500 text-white p-6 rounded-lg text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Risk</h3>
                <p className="text-sm">Risk assessment framework setup, 3rd party security assessments</p>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-lg text-center">
                <Database className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Compliance</h3>
                <p className="text-sm">ITSM, Metrics, KPIs periodic audits, executive reports</p>
              </div>
            </div>

            {/* Compliance Standards */}
            <div className="bg-gray-700 text-white p-4 rounded-lg text-center">
              <p className="font-bold">
                ISO 27001, HIPAA, PCI DSS, SAS 70 - Internal audits, remediation, health check, readiness assessments
              </p>
            </div>
          </div>
        </div>

        {/* Second Flowchart - Engagement Model */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Engagement Model</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Three-phase approach to comprehensive security transformation
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Service Areas */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-bluelagoon-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Risk Assurance</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Cyber Resilience</li>
                  <li>• Control Assurance</li>
                  <li>• Operational Risk</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Security Architecture Review</li>
                  <li>• Cloud Security</li>
                </ul>
              </div>
              <div className="bg-bluelagoon-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Compliance Management</h3>
                <ul className="space-y-2 text-sm">
                  <li>• ISO 27001/NIST Compliance</li>
                  <li>• PCI DSS, FSOC, SWIFT, CPS 234</li>
                  <li>• HIPAA & HI TECH</li>
                  <li>• GDPR</li>
                  <li>• SOX ITGC Testing</li>
                  <li>• SSAE 18 / ISAE 3402 / SOC 2</li>
                </ul>
              </div>
              <div className="bg-bluelagoon-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Automation & Transformation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Alyne, Archer, MetricStream</li>
                  <li>• Galvanize, SAP GRC</li>
                  <li>• Professional Services</li>
                  <li>• Customization, Integration</li>
                  <li>• Migration</li>
                  <li>• Managed GRC Services</li>
                </ul>
              </div>
            </div>

            {/* Process Flow */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-bluelagoon-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                  1
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Assess</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Evaluate current state</p>
              </div>
              <ArrowRight className="text-bluelagoon-600 w-8 h-8" />
              <div className="text-center">
                <div className="w-16 h-16 bg-bluelagoon-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                  2
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Transform</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Implement solutions</p>
              </div>
              <ArrowRight className="text-bluelagoon-600 w-8 h-8" />
              <div className="text-center">
                <div className="w-16 h-16 bg-bluelagoon-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                  3
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Manage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ongoing monitoring</p>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-700 text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance & Continuous Improvement</h3>
              <p className="text-lg">Managed GRC Services - Archer, Alyne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
