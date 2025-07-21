import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Shield, Eye, Clock, Users, Target, Zap, CheckCircle } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function MSSP() {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Managed Security Service Provider (MSSP)
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Auxgens offer Managed Security Service Provider (MSSP) model which helps to protect businesses from
                security threats, providing software and services that keep company data safe with a network of security
                experts.
              </p>
            </div>

            {/* What is MSSP */}
            <div className="mb-20">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">What is MSSP?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  MSSPs provide cybersecurity monitoring and management, which may include virus and spam blocking,
                  intrusion detection, firewalls and virtual private network (VPN) management. MSSPs also handle matters
                  such as system changes, modifications and upgrades.
                </p>
              </div>
            </div>

            {/* Services Provided */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">MSSP Services</h2>
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Shield,
                      title: "Virus & Spam Blocking",
                      desc: "Advanced threat protection and email security",
                    },
                    { icon: Eye, title: "Intrusion Detection", desc: "Real-time monitoring and threat detection" },
                    { icon: Server, title: "Firewall Management", desc: "Network security and access control" },
                    { icon: Target, title: "VPN Management", desc: "Secure remote access solutions" },
                    { icon: CheckCircle, title: "System Updates", desc: "Regular system changes and modifications" },
                    { icon: Zap, title: "Incident Response", desc: "24/7 security incident management" },
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

            {/* Benefits of MSSP */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Benefits of MSSP</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Clock,
                      title: "24/7 Threat Detection",
                      desc: "Round-the-clock monitoring and threat detection capabilities",
                    },
                    {
                      icon: Users,
                      title: "Expanded Security Team",
                      desc: "Access to a team of cybersecurity experts and specialists",
                    },
                    {
                      icon: Target,
                      title: "Access To Specialized Skill Sets",
                      desc: "Expertise in various security domains and technologies",
                    },
                    {
                      icon: CheckCircle,
                      title: "Lower Total Cost Of Ownership",
                      desc: "Cost-effective alternative to building in-house security team",
                    },
                    {
                      icon: Eye,
                      title: "Access To Threat Intelligence",
                      desc: "Latest threat intelligence and security insights",
                    },
                    {
                      icon: Shield,
                      title: "Threat Hunting Capabilities",
                      desc: "Proactive threat hunting and advanced threat detection",
                    },
                    {
                      icon: Server,
                      title: "Compliance Management",
                      desc: "Help maintain regulatory compliance and standards",
                    },
                    {
                      icon: Zap,
                      title: "Minimizing Organization's Cyber Risk",
                      desc: "Comprehensive risk reduction and security posture improvement",
                    },
                  ].map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow p-6 flex flex-col items-start gap-3 border border-bluelagoon-100 dark:border-bluelagoon-800/30"
                      >
                        <Icon className="w-8 h-8 text-bluelagoon-600 dark:text-bluelagoon-400 mb-2" />
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{benefit.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Why Choose Our MSSP */}
            <div className="mb-20">
              <div className="bg-white rounded-2xl p-12 shadow border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Why Choose Auxgens MSSP?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Expert Team", desc: "Certified security professionals" },
                    { title: "Advanced Technology", desc: "Latest security tools and platforms" },
                    { title: "Global Coverage", desc: "24/7 support across time zones" },
                    { title: "Proven Results", desc: "Track record of successful implementations" },
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

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 text-gray-900 dark:text-white p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                <h2 className="text-3xl font-bold mb-4">Ready for Managed Security Services?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Let our security experts protect your business 24/7 with comprehensive MSSP solutions.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-bluelagoon-800 hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
                    Get MSSP Protection
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
