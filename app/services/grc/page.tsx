import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Database, Settings, Target, Eye, Zap } from "lucide-react"

export default function GRCServices() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">GRC Services</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Governance, Risk and Compliance framework that helps organizations secure business critical data and
                manage privacy and governance in a dynamically changing business environment. Our comprehensive GRC
                approach ensures your organization maintains security, meets regulatory requirements, and manages risks
                effectively.
              </p>
            </div>

            {/* What is GRC */}
            <div className="mb-20">
              <div className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-12 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Understanding GRC</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Settings className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Governance</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Establishing policies, procedures, and frameworks that guide organizational decision-making and
                      ensure accountability in security and compliance matters.
                    </p>
                  </div>
                  <div className="text-center">
                    <AlertTriangle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Risk</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Identifying, assessing, and managing potential threats to organizational assets, operations, and
                      reputation through systematic risk management processes.
                    </p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Compliance</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Ensuring adherence to regulatory requirements, industry standards, and internal policies through
                      continuous monitoring and assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Common GRC Challenges Organizations Face
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Lack of Comprehensive GRC Framework",
                    desc: "Organizations struggle without integrated governance, risk, and compliance processes, leading to gaps and inefficiencies.",
                  },
                  {
                    title: "Regulatory Compliance Demands",
                    desc: "Increasing demands from governments and regulatory organizations require constant attention and resources.",
                  },
                  {
                    title: "Cultural Misalignment",
                    desc: "Lack of alignment between organizational culture and GRC objectives hampers effective implementation.",
                  },
                  {
                    title: "Limited Visibility",
                    desc: "Insufficient visibility into critical data and crucial assets makes risk assessment and management difficult.",
                  },
                  {
                    title: "Breach Impact and Losses",
                    desc: "Potential financial and reputational losses due to security breaches or perceived threats.",
                  },
                  {
                    title: "Asset Identification Failures",
                    desc: "Difficulty in identifying and cataloging business-critical assets across the organization.",
                  },
                  {
                    title: "Incomplete Security Controls",
                    desc: "Gaps in security controls implementation and monitoring across organizational assets.",
                  },
                  {
                    title: "Tool Optimization",
                    desc: "Challenges in optimizing governance, risk, and compliance management tools and processes.",
                  },
                  {
                    title: "Posture Visibility",
                    desc: "Limited visibility into current governance, risk, and compliance posture across the organization.",
                  },
                ].map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-green-200/50 dark:border-green-800/50"
                  >
                    <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{challenge.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{challenge.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Help */}
            <div className="mb-20">
              <div className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-12 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">How Auxgens Can Help</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      Auxgens has the experience and expertise to help customers build, operate and manage an
                      information risk office. Our unique risk assessment framework takes care of implementation,
                      remediation and measurement of security controls aligning to various industry best standards and
                      practices.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      We provide end-to-end GRC services that integrate seamlessly with your existing business
                      processes, ensuring minimal disruption while maximizing security and compliance outcomes.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      Our approach combines industry best practices with innovative technologies to deliver measurable
                      results. We work closely with your team to understand your unique challenges and develop
                      customized solutions that address your specific needs.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      With our global expertise and local presence, we ensure consistent service delivery while adapting
                      to regional regulatory requirements and cultural considerations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Comprehensive GRC Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "ISO 27001 Implementation",
                    icon: Shield,
                    desc: "Complete ISO 27001 certification support including gap analysis, ISMS implementation, documentation, and audit preparation.",
                  },
                  {
                    title: "Cloud Security Assessment",
                    icon: Database,
                    desc: "Comprehensive cloud security evaluations covering AWS, Azure, GCP, and hybrid environments with remediation guidance.",
                  },
                  {
                    title: "Managed GRC Services",
                    icon: Users,
                    desc: "Ongoing GRC program management including policy updates, risk assessments, and compliance monitoring.",
                  },
                  {
                    title: "Business Continuity Planning",
                    icon: FileText,
                    desc: "BCP/DR consulting services including business impact analysis, recovery strategies, and testing procedures.",
                  },
                  {
                    title: "SOX Compliance (Section 404)",
                    icon: CheckCircle,
                    desc: "Sarbanes-Oxley compliance support including ITGC testing, documentation, and remediation activities.",
                  },
                  {
                    title: "SSAE 18 SOC 2 Audits",
                    icon: Shield,
                    desc: "SOC 2 Type I and Type II audit preparation and support for service organizations.",
                  },
                  {
                    title: "Third Party Risk Assessment",
                    icon: Users,
                    desc: "Vendor risk assessments, due diligence, and ongoing third-party risk monitoring programs.",
                  },
                  {
                    title: "Virtual CISO Services",
                    icon: Target,
                    desc: "Outsourced CISO services providing strategic security leadership and governance oversight.",
                  },
                  {
                    title: "Enterprise Risk Management",
                    icon: AlertTriangle,
                    desc: "Comprehensive risk management programs including risk identification, assessment, and mitigation strategies.",
                  },
                  {
                    title: "Compliance Gap Assessment",
                    icon: Eye,
                    desc: "Detailed gap analysis against regulatory requirements with prioritized remediation roadmaps.",
                  },
                  {
                    title: "Security Awareness Training",
                    icon: Users,
                    desc: "Customized security awareness programs including phishing simulations and compliance training.",
                  },
                  {
                    title: "Incident Response Planning",
                    icon: Zap,
                    desc: "Incident response plan development, testing, and improvement based on industry best practices.",
                  },
                ].map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-200/50 dark:border-green-800/50 text-center"
                    >
                      <Icon className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{service.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Framework Components */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">GRC Framework Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="bg-gray-700/80 backdrop-blur-sm text-white p-6 rounded-lg text-center border border-gray-600/50">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="font-bold mb-2">Process</h3>
                  <p className="text-sm">
                    Policy & procedure definition, gap analysis, re-baselining, risk assessment framework setup, ISMS
                    awareness and rollout
                  </p>
                </div>
                <div className="bg-gray-700/80 backdrop-blur-sm text-white p-6 rounded-lg text-center border border-gray-600/50">
                  <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="font-bold mb-2">People</h3>
                  <p className="text-sm">
                    ISMS awareness, rollout roles and responsibilities, 3rd party security assessments, access reviews
                    compliance
                  </p>
                </div>
                <div className="bg-gray-700/80 backdrop-blur-sm text-white p-6 rounded-lg text-center border border-gray-600/50">
                  <Database className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="font-bold mb-2">Data</h3>
                  <p className="text-sm">
                    Data governance, ownership, classification, labelling, data risk assessment, protection act
                    compliance
                  </p>
                </div>
                <div className="bg-gray-700/80 backdrop-blur-sm text-white p-6 rounded-lg text-center border border-gray-600/50">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="font-bold mb-2">Infrastructure</h3>
                  <p className="text-sm">
                    Security baseline, patches, security configuration, IT risk assessment, configuration management
                  </p>
                </div>
                <div className="bg-gray-700/80 backdrop-blur-sm text-white p-6 rounded-lg text-center border border-gray-600/50">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <h3 className="font-bold mb-2">Applications</h3>
                  <p className="text-sm">
                    SLA's, CIA assessments, service delivery, application risk management, SDLC integration
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Benefits of Our GRC Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Enhanced Security Posture",
                    desc: "Comprehensive security controls implementation and continuous monitoring to protect against evolving threats.",
                  },
                  {
                    title: "Regulatory Compliance",
                    desc: "Ensure compliance with industry regulations and standards including ISO 27001, GDPR, HIPAA, PCI DSS, and more.",
                  },
                  {
                    title: "Risk Reduction",
                    desc: "Systematic identification and mitigation of business risks through proven risk management methodologies.",
                  },
                  {
                    title: "Operational Efficiency",
                    desc: "Streamlined processes and automated controls that improve operational efficiency while maintaining security.",
                  },
                  {
                    title: "Cost Optimization",
                    desc: "Optimized resource allocation and reduced compliance costs through efficient GRC program management.",
                  },
                  {
                    title: "Stakeholder Confidence",
                    desc: "Increased confidence from customers, partners, and regulators through demonstrated security and compliance.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-200/50 dark:border-green-800/50"
                  >
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm text-gray-900 dark:text-white p-12 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your GRC Framework?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Let our experts help you build a comprehensive governance, risk, and compliance strategy that protects
                  your business and ensures regulatory compliance.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-green-800 hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
