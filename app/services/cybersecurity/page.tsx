import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import CyberGrid from "@/components/cyber-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Lock, Shield, Eye, Zap, Server } from "lucide-react"

export default function Cybersecurity() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cybersecurity-themed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-green-900/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-900/5 to-blue-900/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
      </div>

      <ParticleBackground />
      <CyberGrid />

      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <Lock className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Cybersecurity & Data Privacy</h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.
                Next-gen cybersecurity encompassing a holistic approach—right from detection to protection, prevention
                and remediation.
              </p>
            </div>

            {/* Current Challenges */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Current Cybersecurity Challenges</h2>
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20">
                <p className="text-lg text-gray-300 leading-relaxed text-center">
                  Implementing effective cybersecurity measures is particularly challenging today because there are more
                  devices than people, and attackers are becoming more innovative. In the current digital arena, where
                  desired information is available at one's fingertips and accessible from anywhere at any time, data
                  privacy and protection stand at great risk.
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Security Operations Centre (SOC)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Auxgens help our clients strengthen their Cybersecurity with our professionals supported by Security
                    Operations Centre (SOC) to effectively identify potential cybersecurity incidents and facilitating
                    preventive action. The SOCs help to counter Cyber threats.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Cyber Risk Protection Solution (CRPS)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    CRPS integrates automation, deep analytics and correlation across multiple domains of security with
                    the core objective of security orchestration and automation response (SOAR). CRPS provides enhanced
                    visibility and situational awareness across the network, endpoints and the Cloud.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
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
                      className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 text-center"
                    >
                      <Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Auxgens Cybersecurity Benefits</h2>
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
                    className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
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
              <div className="bg-gradient-to-r from-green-600/20 to-green-700/30 backdrop-blur-sm text-white p-12 rounded-2xl border border-green-500/20">
                <h2 className="text-3xl font-bold mb-4">Strengthen Your Cybersecurity Posture</h2>
                <p className="text-xl mb-8 opacity-90">
                  Protect your organization with our comprehensive cybersecurity solutions.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
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
