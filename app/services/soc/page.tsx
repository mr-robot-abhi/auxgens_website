import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Server, Shield, Zap, TrendingUp, Users, Clock, Target } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function SOCService() {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">SOC as a Service</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                SOC-as-a-Service (SOCaaS) is a security model wherein a third-party vendor operates and maintains a
                fully-managed SOC on a subscription basis via the cloud, providing 24/7 security monitoring and
                response.
              </p>
            </div>

            {/* What is SOC */}
            <div className="mb-20">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  What is a Security Operations Centre?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  A security operations centre (SOC) serves as an intelligence hub for the company, gathering data in
                  real time from across the organization's networks, servers, endpoints and other digital assets and
                  using intelligent automation to identify, prioritize and respond to potential cybersecurity threats.
                </p>
              </div>
            </div>

            {/* SOC Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">SOCaaS Core Services</h2>
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
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
                        className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 flex flex-col items-center text-center border border-bluelagoon-100 dark:border-bluelagoon-800/30 hover:shadow-xl hover:shadow-bluelagoon-500/10 transition-all duration-300"
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

            {/* SOCaaS Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">SOC-as-a-Service Benefits</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                        className="bg-white rounded-xl shadow p-6 flex flex-col items-start gap-3 border border-bluelagoon-100 dark:border-bluelagoon-800/30"
                      >
                        <Icon className="w-12 h-12 text-bluelagoon-600 dark:text-bluelagoon-400 mb-2" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Key Features</h2>
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
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
                        className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 rounded-xl shadow p-6 flex flex-col items-center text-center border border-bluelagoon-100 dark:border-bluelagoon-800/30"
                      >
                        <Icon className="w-12 h-12 text-bluelagoon-600 dark:text-bluelagoon-400 mb-4" />
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 text-gray-900 dark:text-white p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                <h2 className="text-3xl font-bold mb-4">Ready for 24/7 Security Operations?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Get enterprise-grade security operations without the overhead of building your own SOC.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-bluelagoon-800 hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
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
