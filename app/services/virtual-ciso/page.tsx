import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCheck, Shield, AlertTriangle, Users, Target, Clock } from "lucide-react"

export default function VirtualCISO() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <UserCheck className="w-20 h-20 text-green-600 dark:text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Virtual CISO</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A Virtual Chief Information Security Officer is an outsourced security advisor whose responsibilities
                vary depending upon business needs. Cost-effective access to high-end cybersecurity professionals.
              </p>
            </div>

            {/* Key Challenges */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Key Cyber Security Challenges</h2>
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
                      className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700/50"
                    >
                      <Icon className="w-8 h-8 text-red-600 dark:text-red-400 mb-3" />
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{challenge.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{challenge.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Why Virtual CISO */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 dark:from-green-500/10 dark:to-blue-500/10 backdrop-blur-sm p-12 rounded-2xl border border-green-500/20">
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
                    className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Benefits of Virtual CISO</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Cost Effective", desc: "Fraction of full-time CISO cost" },
                  { title: "Expert Knowledge", desc: "Access to seasoned professionals" },
                  { title: "Flexible Engagement", desc: "Scalable based on your needs" },
                  { title: "Immediate Impact", desc: "Quick deployment and results" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-500/10 to-green-600/20 dark:from-green-500/10 dark:to-green-600/20 backdrop-blur-sm p-6 rounded-xl text-center border border-green-500/20"
                  >
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600/20 to-green-700/30 dark:from-green-600/20 dark:to-green-700/30 backdrop-blur-sm text-gray-900 dark:text-white p-12 rounded-2xl border border-green-500/20">
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
