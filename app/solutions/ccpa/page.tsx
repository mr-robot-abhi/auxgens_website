import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Users, Eye } from "lucide-react"

export default function CCPA() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Pure white background */}
      <div className="fixed inset-0 bg-white" />
      {/* Particle effects */}
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">CCPA Compliance</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The California Consumer Privacy Act of 2018 (CCPA) gives consumers more control over the personal
                information that businesses collect about them. This landmark law secures new privacy rights for
                California consumers.
              </p>
            </div>

            {/* CCPA Rights */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Consumer Rights Under CCPA</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: Eye,
                      title: "Right to Know",
                      desc: "The right to know about the personal information a business collects about them and how it is used and shared",
                    },
                    {
                      icon: Shield,
                      title: "Right to Opt-out",
                      desc: "The right to opt-out of the sale of their personal information",
                    },
                    {
                      icon: CheckCircle,
                      title: "Right to Non-discrimination",
                      desc: "The right to non-discrimination for exercising their CCPA rights",
                    },
                  ].map((right, index) => {
                    const Icon = right.icon
                    return (
                      <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col items-start gap-4 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                        <Icon className="w-8 h-8 text-bluelagoon-600 dark:text-bluelagoon-400 mb-2" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{right.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{right.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Our CCPA Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our CCPA Services</h2>

              {/* Gap Assessment */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Gap Assessment</h3>
                <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "AS-IS Review",
                        items: [
                          "Review of current policies & procedures on PI data privacy and security",
                          "Review of data flow diagram and data register (if any)",
                          "Review of sample contracts with third party data processors",
                        ],
                      },
                      {
                        title: "PII Data Discovery",
                        items: [
                          "Meetings with key stakeholders",
                          "Data gathering workshop with cross functional team",
                          "Discover PII across enterprise and processes",
                          "Data flow diagrams and issue identification",
                        ],
                      },
                      {
                        title: "Reporting & Training",
                        items: [
                          "Detailed report on organization CCPA compliance current state",
                          "High level roadmap and CCPA awareness among stakeholders",
                          "Privacy risk report and PI Data Map",
                          "CCPA Awareness Training for customer-facing staff",
                        ],
                      },
                    ].map((service, index) => (
                      <div key={index} className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4">{service.title}</h4>
                        <ul className="space-y-2">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-bluelagoon-600 dark:bg-bluelagoon-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gap Remediation */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Gap Remediation</h3>
                <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Policies and Procedures</h4>
                      <ul className="space-y-2">
                        {[
                          "Data Protection Policies and procedures",
                          "Data Protection Impact Assessment",
                          "Data collection procedures",
                          "PII Data processing procedures",
                          "Data Usage procedures",
                          "Data Subject Request processing procedures",
                          "Complaints procedures",
                          "Internal Auditing procedures",
                          "Breach Notification policy and procedures",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-bluelagoon-600 dark:text-bluelagoon-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Technical Remediation</h4>
                      <ul className="space-y-2">
                        {[
                          "Implement Privacy by Design principles",
                          "Data Discovery & Classification",
                          "Data Loss Prevention (Endpoint, Network, Cloud, Email)",
                          "Data Masking & Encryption",
                          "Privacy Officer as a Service",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-bluelagoon-600 dark:text-bluelagoon-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ongoing Support */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Ongoing Support</h3>
                <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-3xl mx-auto">
                  <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                    <ul className="space-y-2">
                      {[
                        "Ongoing CCPA compliance monitoring and reporting",
                        "Regular policy and procedure updates",
                        "Staff training and awareness programs",
                        "Support for data subject requests and breach notifications",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-bluelagoon-600 dark:text-bluelagoon-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 text-gray-900 dark:text-white p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                  <h2 className="text-3xl font-bold mb-4">Ready for CCPA Compliance?</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Protect your business and your customers with our CCPA compliance solutions.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-white/10 dark:bg-white/10 text-bluelagoon-800 hover:bg-white/20 dark:hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20 dark:border-white/20">
                      Start CCPA Compliance
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
