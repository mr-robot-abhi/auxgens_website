import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock, Shield, Eye, Zap, Server } from "lucide-react"

export default function Cybersecurity() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Cybersecurity & Data Privacy</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.
                Next-gen cybersecurity encompassing a holistic approach—right from detection to protection, prevention
                and remediation.
              </p>
            </div>

            {/* Current Challenges */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Current Cybersecurity Challenges</h2>
              <div className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-8 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  Implementing effective cybersecurity measures is particularly challenging today because there are more
                  devices than people, and attackers are becoming more innovative. In the current digital arena, where
                  desired information is available at one's fingertips and accessible from anywhere at any time, data
                  privacy and protection stand at great risk.
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Security Operations Centre (SOC)</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Auxgens help our clients strengthen their Cybersecurity with our professionals supported by Security
                    Operations Centre (SOC) to effectively identify potential cybersecurity incidents and facilitating
                    preventive action. The SOCs help to counter Cyber threats.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Cyber Risk Protection Solution (CRPS)</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    CRPS integrates automation, deep analytics and correlation across multiple domains of security with
                    the core objective of security orchestration and automation response (SOAR). CRPS provides enhanced
                    visibility and situational awareness across the network, endpoints and the Cloud.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Eye, title: "Threat Detection", desc: "Advanced threat detection and monitoring" },
                  { icon: Zap, title: "Rapid Response", desc: "Quick incident response and remediation" },
                  { icon: Server, title: "Network Security", desc: "Comprehensive network protection" },
                  { icon: Shield, title: "Endpoint Security", desc: "Device and endpoint protection" },
                ].map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={index}
                      className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-200/50 dark:border-green-800/50 text-center"
                    >
                      <Icon className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Auxgens Cybersecurity Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Integrated Threat Detection and Response",
                    desc: "Comprehensive threat detection with automated response capabilities",
                  },
                  {
                    title: "Analytics-driven Framework",
                    desc: "Advanced analytics to contextualize security events and threats",
                  },
                  {
                    title: "Tighter Integration",
                    desc: "Integration between data, processes and products with real-time visibility",
                  },
                  {
                    title: "Cost Reduction",
                    desc: "Reduced costs in incident response and compliance management",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-200/50 dark:border-green-800/50"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-green-100/80 dark:bg-green-900/40 backdrop-blur-sm text-gray-900 dark:text-white p-12 rounded-2xl border border-green-200/50 dark:border-green-800/50">
                <h2 className="text-3xl font-bold mb-4">Strengthen Your Cybersecurity Posture</h2>
                <p className="text-xl mb-8 opacity-90">
                  Protect your organization with our comprehensive cybersecurity solutions.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-green-800 hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
                    Secure Your Business
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
