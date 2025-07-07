import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import CyberGrid from "@/components/cyber-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Server, Shield, Eye, Clock, Users, Target, Zap, CheckCircle } from "lucide-react"

export default function MSSP() {
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
              <Server className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Managed Security Service Provider (MSSP)
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Auxgens offer Managed Security Service Provider (MSSP) model which helps to protect businesses from
                security threats, providing software and services that keep company data safe with a network of security
                experts.
              </p>
            </div>

            {/* What is MSSP */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-sm p-12 rounded-2xl border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white text-center mb-8">What is MSSP?</h2>
                <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  MSSPs provide cybersecurity monitoring and management, which may include virus and spam blocking,
                  intrusion detection, firewalls and virtual private network (VPN) management. MSSPs also handle matters
                  such as system changes, modifications and upgrades.
                </p>
              </div>
            </div>

            {/* Services Provided */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">MSSP Services</h2>
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

            {/* Benefits of MSSP */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits of MSSP</h2>
              <div className="grid md:grid-cols-2 gap-8">
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
                      className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50"
                    >
                      <div className="flex items-start space-x-4">
                        <Icon className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                          <p className="text-gray-300">{benefit.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Why Choose Our MSSP */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm p-12 rounded-2xl border border-green-500/20">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Auxgens MSSP?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Expert Team", desc: "Certified security professionals" },
                    { title: "Advanced Technology", desc: "Latest security tools and platforms" },
                    { title: "Global Coverage", desc: "24/7 support across time zones" },
                    { title: "Proven Results", desc: "Track record of successful implementations" },
                  ].map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-green-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600/20 to-green-700/30 backdrop-blur-sm text-white p-12 rounded-2xl border border-green-500/20">
                <h2 className="text-3xl font-bold mb-4">Ready for Managed Security Services?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Let our security experts protect your business 24/7 with comprehensive MSSP solutions.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
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
