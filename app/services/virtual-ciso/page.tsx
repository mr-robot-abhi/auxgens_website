import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import CyberGrid from "@/components/cyber-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCheck, Shield, AlertTriangle, Users, Target, Clock } from "lucide-react"

export default function VirtualCISO() {
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
              <UserCheck className="w-20 h-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Virtual CISO</h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A Virtual Chief Information Security Officer is an outsourced security advisor whose responsibilities
                vary depending upon business needs. Cost-effective access to high-end cybersecurity professionals.
              </p>
            </div>

            {/* Key Challenges */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Key Cyber Security Challenges</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: AlertTriangle,
                    title: "Increasing Threat Landscape",
                    desc: "Evolving cyber threats require constant vigilance",
                  },
                  {
                    icon: Shield,
                    title: "Evolving Regulatory Compliance",
                    desc: "Complex compliance requirements across industries",
                  },
                  {
                    icon: Users,
                    title: "Unaware Employees & Insider Threats",
                    desc: "Human factor remains the weakest link",
                  },
                  { icon: Target, title: "Shortage of Skills", desc: "Cybersecurity talent gap continues to grow" },
                  {
                    icon: Clock,
                    title: "Cyber Security Budget",
                    desc: "Balancing security needs with budget constraints",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Average Time to Respond",
                    desc: "Reducing incident response time is critical",
                  },
                ].map((challenge, index) => {
                  const Icon = challenge.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-700/50"
                    >
                      <Icon className="w-8 h-8 text-red-400 mb-3" />
                      <h3 className="font-bold text-white mb-2">{challenge.title}</h3>
                      <p className="text-gray-300 text-sm">{challenge.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Why Virtual CISO */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm p-12 rounded-2xl border border-green-500/20">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Why Virtual CISO?</h2>
                <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  A virtual CISO can be a cost-effective approach to having the access your company needs to high-end
                  cybersecurity professionals. Many organizations cannot afford a full-time executive-level CISO to
                  oversee security functions.
                </p>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Virtual CISO Key Responsibilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Provide leadership on risk, governance, Incident Response, Disaster Recovery & Business Continuity",
                  "Provide Expert assessment on security threats, risks compliance",
                  "Provide consultation to build effective cybersecurity & resiliency program",
                  "Facilitate the integration of security into your business strategy, process & culture",
                  "Manage the development, roll-out, and ongoing maintenance of cybersecurity programs",
                  "Assist with integration and interpretation of information security program controls",
                  "Serve as an Industry expert (HIPAA, PCI-DSS, NIST, ISO 27001, GDPR, CCPA and various standards)",
                  "Serve as information security liaison between stakeholders",
                ].map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits of Virtual CISO</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Cost Effective", desc: "Fraction of full-time CISO cost" },
                  { title: "Expert Knowledge", desc: "Access to seasoned professionals" },
                  { title: "Flexible Engagement", desc: "Scalable based on your needs" },
                  { title: "Immediate Impact", desc: "Quick deployment and results" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-sm p-6 rounded-xl text-center border border-green-500/20"
                  >
                    <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600/20 to-green-700/30 backdrop-blur-sm text-white p-12 rounded-2xl border border-green-500/20">
                <h2 className="text-3xl font-bold mb-4">Need Expert Security Leadership?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Get access to experienced cybersecurity leadership without the full-time cost.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
                    Get Your Virtual CISO
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
