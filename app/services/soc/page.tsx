import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import CyberGrid from "@/components/cyber-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Server, Shield, Zap, TrendingUp, Users, Clock, Target } from "lucide-react"

export default function SOCService() {
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
              <Eye className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">SOC as a Service</h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                SOC-as-a-Service (SOCaaS) is a security model wherein a third-party vendor operates and maintains a
                fully-managed SOC on a subscription basis via the cloud, providing 24/7 security monitoring and
                response.
              </p>
            </div>

            {/* What is SOC */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-sm p-12 rounded-2xl border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  What is a Security Operations Centre?
                </h2>
                <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  A security operations centre (SOC) serves as an intelligence hub for the company, gathering data in
                  real time from across the organization's networks, servers, endpoints and other digital assets and
                  using intelligent automation to identify, prioritize and respond to potential cybersecurity threats.
                </p>
              </div>
            </div>

            {/* SOC Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">SOCaaS Core Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Eye, title: "Network Monitoring", desc: "24/7 network traffic analysis and monitoring" },
                  { icon: Server, title: "Log Management", desc: "Centralized log collection and analysis" },
                  { icon: Shield, title: "Threat Detection", desc: "Advanced threat detection and intelligence" },
                  { icon: Zap, title: "Incident Response", desc: "Rapid incident investigation and response" },
                  { icon: TrendingUp, title: "Reporting", desc: "Comprehensive security reporting and analytics" },
                  { icon: Target, title: "Risk & Compliance", desc: "Risk assessment and compliance management" },
                ].map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
                    >
                      <Icon className="w-12 h-12 text-green-400 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* SOCaaS Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">SOC-as-a-Service Benefits</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: TrendingUp,
                    title: "Ability to Scale",
                    desc: "Like other XaaS solutions, SOCaaS is known for its flexibility and adaptability. Teams and services can easily be scaled up or down based on the organization's needs or in response to specific events. By comparison, in a traditional SOC model, resources are finite and generally cannot be added quickly in times of need.",
                  },
                  {
                    icon: Shield,
                    title: "Enhanced Maturity",
                    desc: "In many ways, SOCaaS can be considered a 'shortcut to maturity' in that companies that retain the services of a reputable vendor will benefit from the latest, most advanced solutions and highly-skilled staff. This helps fuel faster and more accurate detection and response while simultaneously lowering overall risk.",
                  },
                  {
                    icon: Target,
                    title: "Lower Cost than On-premise SOC",
                    desc: "For most organizations, SOCaaS is more cost-effective than operating an on-premise SOC. This is because many costs, including those associated with staffing, equipment, licenses, hardware and software, are shared by multiple customers. Many SOCaaS pricing models are based on consumption, meaning that organizations only pay for the services they use.",
                  },
                  {
                    icon: Users,
                    title: "Resource Optimization",
                    desc: "SOCaaS has become a particularly attractive solution in recent years due to a staffing shortage within the cyber industry. As attracting and retaining talent has become more difficult, SOCaaS not only helps solve the challenge related to workforce availability, but also frees up employees to focus on security use cases that are more suitable for in-house roles.",
                  },
                ].map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50"
                    >
                      <div className="flex items-start space-x-6">
                        <Icon className="w-12 h-12 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock security monitoring" },
                  { icon: Zap, title: "Rapid Response", desc: "Quick incident response and remediation" },
                  { icon: Shield, title: "Advanced Analytics", desc: "AI-powered threat detection" },
                  { icon: Users, title: "Expert Team", desc: "Certified security professionals" },
                ].map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm p-6 rounded-xl text-center border border-green-500/20"
                    >
                      <Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600/20 to-green-700/30 backdrop-blur-sm text-white p-12 rounded-2xl border border-green-500/20">
                <h2 className="text-3xl font-bold mb-4">Ready for 24/7 Security Operations?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Get enterprise-grade security operations without the overhead of building your own SOC.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
                    Start SOC Service
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
