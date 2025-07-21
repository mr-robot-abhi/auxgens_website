import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCheck, Shield, Users, Target, Clock, CheckCircle, Zap } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function VirtualCISO() {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Virtual CISO</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A Virtual Chief Information Security Officer is an outsourced security advisor whose responsibilities
                vary depending upon business needs. Cost-effective access to high-end cybersecurity professionals.
              </p>
            </div>

            {/* Key Challenges */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Key Cyber Security Challenges</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-5xl mx-auto">
                {[
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
                ].map((challenge, index, arr) => {
                  const Icon = challenge.icon
                  return (
                    <div key={index}>
                      <div className="flex items-start gap-4 py-4">
                        <Icon className="w-8 h-8 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-1">{challenge.title}</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">{challenge.desc}</p>
                        </div>
                      </div>
                      {index < arr.length - 1 && <div className="border-b border-bluelagoon-100 dark:border-bluelagoon-800/30" />}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Why Virtual CISO */}
            <div className="mb-20">
              <div className="bg-white rounded-2xl p-12 shadow border border-gray-100 dark:border-gray-800 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Why Virtual CISO?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  A virtual CISO can be a cost-effective approach to having the access your company needs to high-end
                  cybersecurity professionals. Many organizations cannot afford a full-time executive-level CISO to
                  oversee security functions.
                </p>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Virtual CISO Key Responsibilities</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-5xl mx-auto">
                {[
                  "Provide leadership on risk, governance, Incident Response, Disaster Recovery & Business Continuity",
                  "Provide Expert assessment on security threats, risks compliance",
                  "Provide consultation to build effective cybersecurity & resiliency program",
                  "Facilitate the integration of security into your business strategy, process & culture",
                  "Manage the development, roll-out, and ongoing maintenance of cybersecurity programs",
                  "Assist with integration and interpretation of information security program controls",
                  "Serve as an Industry expert (HIPAA, PCI-DSS, NIST, ISO 27001, GDPR, CCPA and various standards)",
                  "Serve as information security liaison between stakeholders",
                ].map((responsibility, index, arr) => (
                  <div key={index}>
                    <div className="flex items-start gap-4 py-4">
                      <div className="w-2 h-2 bg-bluelagoon-600 dark:bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{responsibility}</p>
                    </div>
                    {index < arr.length - 1 && <div className="border-b border-bluelagoon-100 dark:border-bluelagoon-800/30" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Benefits of Virtual CISO</h2>
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 p-8 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Cost Effective", desc: "Fraction of full-time CISO cost", icon: CheckCircle },
                    { title: "Expert Knowledge", desc: "Access to seasoned professionals", icon: Shield },
                    { title: "Flexible Engagement", desc: "Scalable based on your needs", icon: Users },
                    { title: "Immediate Impact", desc: "Quick deployment and results", icon: Zap },
                  ].map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col items-start gap-3 border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                        <Icon className="w-8 h-8 text-bluelagoon-600 dark:text-bluelagoon-400 mb-2" />
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{benefit.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-base">{benefit.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-bluelagoon-50/60 dark:bg-bluelagoon-900/10 text-gray-900 dark:text-white p-12 rounded-2xl border border-bluelagoon-100 dark:border-bluelagoon-800/30">
                <h2 className="text-3xl font-bold mb-4">Need Expert Security Leadership?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Get access to experienced cybersecurity leadership without the full-time cost.
                </p>
                <Link href="/contact">
                  <Button className="bg-white/10 text-bluelagoon-800 hover:bg-white/20 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg backdrop-blur-sm border border-white/20">
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
