import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Users, CheckCircle, Eye } from "lucide-react"

export default function DPOService() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Pure white background */}
      <div className="fixed inset-0 bg-white" />
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">DPO as a Service</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                This all-encompassing service fulfils your DPO responsibilities under Articles 38 and 39 of the GDPR and
                includes an experienced and dedicated DPO as your single point of contact with no conflict of interest.
              </p>
            </div>

            {/* What is DPO */}
            <div className="mb-20">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">What is a Data Protection Officer?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  A Data Protection Officer (DPO) is responsible for overseeing data protection strategy and
                  implementation to ensure compliance with GDPR requirements. Your DPO will be independent with no
                  conflict of interest with other business services.
                </p>
              </div>
            </div>

            {/* DPO Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">DPO as a Service Benefits</h2>
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    "A dedicated DPO registered with the relevant supervisory authority",
                    "A GDPR gap analysis and remedial action plan (year 1) that prioritises key issues your organisation must address",
                    "GDPR and DPA 2018 compliance monitoring – including managing your GDPR compliance action plan",
                    "Unlimited telephone and email advice within UK business hours via your dedicated DPO consultant",
                    "GDPR documentation review (policies and procedures) including a legal review for suitability",
                    "Hands on support with the creation and maintenance of your personal data processing register (Article 30 record)",
                    "Assistance with information collection to identify personal data processing activities",
                    "Guidance on handling DPIAs (data protection impact assessments), DSARs (data subject access requests)",
                    "Data breach monitoring, management and reporting support",
                    "Support and advice on delivering GDPR staff awareness training",
                    "An annual compliance audit (from year 2)",
                    "Monthly activity reports and quarterly management reports",
                    "Monthly newsletter on important GDPR and data privacy updates",
                  ].map((benefit, index) => (
                    <div key={index} className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 flex items-start gap-4 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                      <CheckCircle className="w-6 h-6 text-bluelagoon-600 dark:text-bluelagoon-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Key DPO Services</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Policy & Procedures Review",
                      desc: "Comprehensive review of data protection policies",
                    },
                    { icon: Eye, title: "Audit & Assessment", desc: "Regular compliance audits and assessments" },
                    { icon: FileText, title: "Data Security Management", desc: "Overseeing data security measures" },
                    { icon: Users, title: "Data Rights Management", desc: "Managing data subject rights and requests" },
                    { icon: CheckCircle, title: "Training & Awareness", desc: "Staff training and awareness programs" },
                  ].map((service, index) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-bluelagoon-100 dark:border-bluelagoon-800/30 hover:shadow-xl hover:shadow-bluelagoon-500/10 transition-all duration-300"
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

            {/* Why Choose Our DPO Service */}
            <div className="mb-20">
              <div className="bg-white rounded-2xl p-12 shadow border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Why Choose Our DPO Service?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Expert Knowledge", desc: "Deep GDPR and data protection expertise" },
                    { title: "Independence", desc: "No conflict of interest with business operations" },
                    { title: "Cost Effective", desc: "Fraction of full-time DPO cost" },
                    { title: "Comprehensive Support", desc: "Full range of DPO responsibilities covered" },
                  ].map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-bluelagoon-200/80 dark:bg-bluelagoon-800/40 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-bluelagoon-300/50 dark:border-bluelagoon-900/50">
                        <span className="text-gray-900 dark:text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance Areas */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Compliance Areas</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "GDPR", desc: "General Data Protection Regulation" },
                    { title: "DPA 2018", desc: "Data Protection Act 2018" },
                    { title: "CCPA", desc: "California Consumer Privacy Act" },
                    { title: "PIPEDA", desc: "Personal Information Protection" },
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow p-6 text-center border border-bluelagoon-100 dark:border-bluelagoon-800/30"
                    >
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 text-gray-900 dark:text-white p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                <h2 className="text-3xl font-bold mb-4">Need a Dedicated Data Protection Officer?</h2>
                <p className="text-xl mb-8 opacity-90">Ensure GDPR compliance with our experienced DPO services.</p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-bluelagoon-800 hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
                    Get DPO Service
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
