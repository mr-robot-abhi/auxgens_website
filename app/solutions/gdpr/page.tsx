import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, FileText, Users, Database, Eye, Lock, Server } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function GDPR() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Pure white background */}
      <div className="fixed inset-0 bg-white" />
      {/* Particle effects */}
      <ParticleBackground />
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">GDPR Compliance Solutions</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The General Data Protection Regulation (GDPR) is the European Union's comprehensive data protection law
                that requires businesses to protect the Personally Identifiable Information and privacy of EU citizens.
                Non-compliance could result in severe financial penalties of €20 million or 4% of annual global
                turnover, whichever is greater.
              </p>
            </div>

            {/* GDPR Overview */}
            <div className="mb-20">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Understanding GDPR</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What is GDPR?</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      The GDPR is a comprehensive data protection regulation that came into effect on May 25, 2018. It
                      applies to all organizations that offer goods and services to people in the European Union (EU),
                      or that collect and analyze personal data tied to EU residents, regardless of where the
                      organization is located.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      The regulation establishes strict rules for how personal data must be collected, processed,
                      stored, and protected, giving individuals greater control over their personal information.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Principles</h3>
                    <ul className="space-y-3">
                      {[
                        "Lawfulness, fairness, and transparency",
                        "Purpose limitation",
                        "Data minimization",
                        "Accuracy",
                        "Storage limitation",
                        "Integrity and confidentiality",
                        "Accountability",
                      ].map((principle, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-bluelagoon-600 dark:text-bluelagoon-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-red-500/10 dark:bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="font-bold text-red-600 dark:text-red-300 mb-2">Penalty for Non-Compliance</h3>
                      <p className="text-red-700 dark:text-red-200 mb-2">
                        Administrative fines of up to <strong>€20 million or 4% of annual global turnover</strong>,
                        whichever is greater.
                      </p>
                      <p className="text-red-600 dark:text-red-300 text-sm">
                        Additional consequences may include business disruption, reputational damage, and loss of
                        customer trust.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Rights */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Individual Rights Under GDPR</h2>
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Eye,
                      title: "Right to Information",
                      desc: "Individuals must be informed about how their data is collected and used",
                    },
                    {
                      icon: Database,
                      title: "Right of Access",
                      desc: "Individuals can request access to their personal data and information about processing",
                    },
                    {
                      icon: FileText,
                      title: "Right to Rectification",
                      desc: "Individuals can request correction of inaccurate or incomplete personal data",
                    },
                    {
                      icon: Lock,
                      title: "Right to Erasure",
                      desc: "The 'right to be forgotten' - individuals can request deletion of their data",
                    },
                    {
                      icon: Lock,
                      title: "Right to Restrict Processing",
                      desc: "Individuals can request limitation of how their data is processed",
                    },
                    {
                      icon: Server,
                      title: "Right to Data Portability",
                      desc: "Individuals can request their data in a structured, machine-readable format",
                    },
                    {
                      icon: Shield,
                      title: "Right to Object",
                      desc: "Individuals can object to processing of their data for specific purposes",
                    },
                    {
                      icon: Users,
                      title: "Rights Related to Automated Decision Making",
                      desc: "Protection against automated decision-making and profiling",
                    },
                  ].map((right, index) => {
                    const Icon = right.icon
                    return (
                      <div
                        key={index}
                        className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 text-center border border-bluelagoon-100 dark:border-bluelagoon-800/30"
                      >
                        <Icon className="w-12 h-12 text-bluelagoon-600 dark:text-bluelagoon-400 mx-auto mb-4" />
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{right.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{right.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Our GDPR Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Comprehensive GDPR Services</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {[
                    {
                      icon: CheckCircle,
                      title: "GDPR Compliance Assessment & Privacy Impact Assessment",
                      desc: "Comprehensive evaluation of your current data protection practices, identification of gaps, and detailed recommendations for achieving full GDPR compliance.",
                    },
                    {
                      icon: Database,
                      title: "Personal Data Discovery & Mapping",
                      desc: "Systematic discovery of personal data across your enterprise, data flow mapping, and establishment of processes governing data usage and retention.",
                    },
                    {
                      icon: Shield,
                      title: "Data Protection Control Assessment",
                      desc: "In-depth analysis of your personal data ecosystem, implementation of appropriate technical and organizational measures, and establishment of compliance metrics tracking.",
                    },
                    {
                      icon: FileText,
                      title: "Data Process Modeling & Visualization",
                      desc: "Creation of detailed data flow diagrams, process documentation, identification of compliance gaps, and development of remediation strategies.",
                    },
                    {
                      icon: Users,
                      title: "Policy and Procedure Design",
                      desc: "Development, review, and implementation of comprehensive data protection policies, procedures, and governance frameworks aligned with GDPR requirements.",
                    },
                    {
                      icon: Server,
                      title: "Application & IT Process Re-engineering",
                      desc: "End-to-end DevOps services, legacy application modernization, privacy-by-design implementation, and unified testing frameworks for GDPR compliance.",
                    },
                  ].map((service, index) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow p-6 text-center border border-bluelagoon-100 dark:border-bluelagoon-800/30 hover:shadow-xl hover:shadow-bluelagoon-500/10 transition-all duration-300"
                      >
                        <Icon className="w-12 h-12 text-bluelagoon-600 dark:text-bluelagoon-400 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Implementation Areas */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">GDPR Implementation Areas</h2>
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Data Protection Controls Implementation",
                      items: [
                        "Personal Data Discovery & GDPR Gap Assessment",
                        "Data Loss Prevention (DLP) Implementation",
                        "Data Classification and Pseudonymization (Encryption & Data Masking)",
                        "Identity Relationship Management and Data Access Governance",
                        "Privileged Identity & Access Management (PIAM)",
                        "Privacy by Design and Default Implementation",
                        "Data Retention and Deletion Policies",
                        "Cross-border Data Transfer Mechanisms",
                      ],
                    },
                    {
                      title: "Breach Detection and Response (Security Operations Center)",
                      items: [
                        "Security Information and Event Management (SIEM) Implementation",
                        "Real-time Data Breach Monitoring and Alerting",
                        "Automated Incident Response Capabilities",
                        "72-hour Breach Notification Procedures",
                        "Forensic Analysis and Evidence Collection",
                        "Breach Impact Assessment and Documentation",
                        "Regulatory Notification and Communication Management",
                      ],
                    },
                    {
                      title: "Data Protection Officer (DPO) as a Service",
                      items: [
                        "Dedicated DPO Assignment and Registration",
                        "Data Protection Policy & Procedures Review and Development",
                        "Regular Compliance Audits & Assessments",
                        "Data Breach Management and Regulatory Reporting",
                        "Data Subject Rights Management and Response",
                        "Data Protection Impact Assessment (DPIA) Facilitation",
                        "Staff Training & Awareness Programs",
                        "Ongoing Compliance Monitoring and Reporting",
                      ],
                    },
                    {
                      title: "GDPR Program Management & Governance",
                      items: [
                        "End-to-end GDPR Compliance Program Management",
                        "Stakeholder Engagement and Communication",
                        "Ongoing Compliance Monitoring and Reporting",
                        "Regular Compliance Audits and Health Checks",
                        "Vendor and Third-party Risk Management",
                        "Data Processing Agreement (DPA) Management",
                        "Privacy Notice and Consent Management",
                        "Continuous Improvement and Optimization",
                      ],
                    },
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-8 border border-bluelagoon-100 dark:border-bluelagoon-800/30"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{area.title}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {area.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-20">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Key Benefits of Our GDPR Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Legal Compliance",
                      desc: "Achieve and maintain full GDPR compliance, avoiding costly penalties and legal issues",
                    },
                    {
                      title: "Enhanced Data Protection",
                      desc: "Implement robust technical and organizational measures to protect personal data",
                    },
                    {
                      title: "Customer Trust",
                      desc: "Build and maintain customer trust through transparent and responsible data practices",
                    },
                    {
                      title: "Competitive Advantage",
                      desc: "Demonstrate your commitment to privacy and gain a competitive edge in the market",
                    },
                    {
                      title: "Risk Mitigation",
                      desc: "Reduce the risk of data breaches and associated financial and reputational damage",
                    },
                    {
                      title: "Operational Efficiency",
                      desc: "Streamline data processing activities and improve overall operational efficiency",
                    },
                    {
                      title: "Global Expansion",
                      desc: "Enable secure expansion into EU markets with confidence in your data protection practices",
                    },
                    {
                      title: "Stakeholder Confidence",
                      desc: "Increase confidence from investors, partners, and regulators through demonstrated compliance",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-bluelagoon-600/20 dark:bg-bluelagoon-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-bluelagoon-500/30">
                        <span className="text-bluelagoon-700 font-bold text-xl">{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Implementation Methodology */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our GDPR Implementation Methodology</h2>
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      phase: "Phase 1",
                      title: "Assessment & Planning",
                      desc: "Comprehensive GDPR readiness assessment, gap analysis, and implementation roadmap development",
                    },
                    {
                      phase: "Phase 2",
                      title: "Implementation",
                      desc: "Technical and organizational measures implementation, policy development, and process establishment",
                    },
                    {
                      phase: "Phase 3",
                      title: "Testing & Validation",
                      desc: "Compliance testing, validation of controls, and preparation for ongoing operations",
                    },
                    {
                      phase: "Phase 4",
                      title: "Monitoring & Maintenance",
                      desc: "Ongoing compliance monitoring, regular assessments, and continuous improvement",
                    },
                  ].map((phase, index) => (
                    <div
                      key={index}
                      className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 text-center border border-bluelagoon-100 dark:border-bluelagoon-800/30"
                    >
                      <div className="w-12 h-12 bg-bluelagoon-600/20 dark:bg-bluelagoon-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-bluelagoon-500/30">
                        <span className="text-bluelagoon-700 font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-bluelagoon-600 dark:text-bluelagoon-400 mb-2">{phase.phase}</h3>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 text-gray-900 dark:text-white p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                <h2 className="text-3xl font-bold mb-4">Ready for GDPR Compliance?</h2>
                <p className="text-xl mb-8 opacity-90 text-gray-900 dark:text-white">
                  Ensure your organization meets GDPR requirements and protects customer data with our comprehensive
                  compliance solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-white/10 dark:bg-white/10 text-bluelagoon-800 hover:bg-white/20 dark:hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20 dark:border-white/20">
                      Start GDPR Compliance
                    </Button>
                  </Link>
                  <Link href="/services/dpo">
                    <Button
                      variant="outline"
                      className="border-white/20 text-bluelagoon-800 hover:bg-white/10 dark:hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 bg-transparent backdrop-blur-sm"
                    >
                      Learn About DPO Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
