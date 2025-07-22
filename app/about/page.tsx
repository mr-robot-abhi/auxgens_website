import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Globe, Users, Award, Target, Eye, CheckCircle, Zap, Lock, Server } from "lucide-react"

export default function About() {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Auxgens</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional managed cyber & information security data service provider with global expertise,
                protecting business operations with cutting-edge technology and industry-wide experience.
              </p>
            </div>

            {/* Company Overview */}
            <div className="mb-20">
              <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-12 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700/50">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Who We Are</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      Auxgens is a leading cybersecurity and compliance consulting firm that specializes in helping
                      organizations navigate the complex landscape of digital security threats and regulatory
                      requirements. Founded with the vision of making cybersecurity accessible and effective for
                      businesses of all sizes, we have grown to become a trusted partner for companies across multiple
                      industries and continents.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Our team of certified security professionals brings decades of combined experience in
                      cybersecurity, risk management, and compliance. We understand that every organization faces unique
                      challenges, which is why we tailor our solutions to meet specific business needs while maintaining
                      the highest standards of security and compliance.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      With a global presence spanning Asia Pacific, United States, Europe, Middle East, Africa, and the
                      European Union, we provide 24/7 support and local expertise wherever our clients operate. Our
                      comprehensive approach combines cutting-edge technology with human expertise to deliver solutions
                      that not only protect against current threats but also prepare organizations for emerging security
                      challenges.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      We pride ourselves on our ability to translate complex security concepts into actionable business
                      strategies, helping our clients achieve their security objectives while maintaining operational
                      efficiency and regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50">
                <Target className="w-12 h-12 text-bluelagoon-600 dark:text-bluelagoon-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  To provide comprehensive cybersecurity and compliance solutions that protect organizations from
                  evolving digital threats while ensuring regulatory compliance and business continuity.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We are committed to empowering businesses with the knowledge, tools, and support they need to operate
                  securely in an increasingly connected world, while maintaining the agility and innovation that drives
                  business success.
                </p>
              </div>
              <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50">
                <Eye className="w-12 h-12 text-bluelagoon-600 dark:text-bluelagoon-400 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  To be the leading global provider of innovative cybersecurity solutions, securing today for a better
                  tomorrow through advanced technology and expert guidance.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We envision a world where organizations can focus on their core business objectives without
                  compromising on security, knowing they have a trusted partner protecting their digital assets and
                  ensuring compliance with evolving regulations.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-bluelagoon-600 dark:text-bluelagoon-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Security First</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We prioritize security in everything we do, ensuring robust protection for our clients through
                    proactive threat detection and comprehensive risk management.
                  </p>
                </div>
                <div className="text-center">
                  <Globe className="w-16 h-16 text-bluelagoon-600 dark:text-bluelagoon-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Global Reach</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our worldwide presence enables us to provide local support with global expertise, ensuring
                    consistent service quality across all regions.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-16 h-16 text-bluelagoon-600 dark:text-bluelagoon-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Industry professionals with deep expertise in cybersecurity, compliance, and risk management,
                    continuously updating their skills to stay ahead of threats.
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-16 h-16 text-bluelagoon-600 dark:text-bluelagoon-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Excellence</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We strive for excellence in service delivery and customer satisfaction, maintaining the highest
                    standards in all our engagements.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Expertise */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Expertise</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Lock,
                    title: "Cybersecurity Management",
                    desc: "Comprehensive security strategies, threat detection, incident response, and security architecture design.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Compliance & Governance",
                    desc: "ISO 27001, GDPR, CCPA, HIPAA, PCI DSS, and other regulatory compliance frameworks and auditing.",
                  },
                  {
                    icon: Server,
                    title: "Infrastructure Security",
                    desc: "Network security, cloud security, endpoint protection, and security configuration management.",
                  },
                  {
                    icon: Eye,
                    title: "Security Operations",
                    desc: "24/7 SOC services, SIEM implementation, threat hunting, and continuous security monitoring.",
                  },
                  {
                    icon: Users,
                    title: "Risk Management",
                    desc: "Risk assessments, vulnerability management, business continuity planning, and disaster recovery.",
                  },
                  {
                    icon: Zap,
                    title: "Incident Response",
                    desc: "Rapid incident response, forensic analysis, breach notification, and recovery planning.",
                  },
                ].map((expertise, index) => {
                  const Icon = expertise.icon
                  return (
                    <div
                      key={index}
                      className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50"
                    >
                      <Icon className="w-12 h-12 text-bluelagoon-600 dark:text-bluelagoon-400 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{expertise.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{expertise.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Industry Experience */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-bluelagoon-500/10 to-blue-500/10 dark:from-bluelagoon-500/10 dark:to-blue-500/10 backdrop-blur-sm p-12 rounded-2xl border border-bluelagoon-500/20">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Industry Experience</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                  Our team has extensive experience across various industries, understanding the unique security
                  challenges and regulatory requirements of each sector.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "Financial Services & Banking",
                    "Healthcare & Life Sciences",
                    "Government & Public Sector",
                    "Technology & Software",
                    "Manufacturing & Industrial",
                    "Retail & E-commerce",
                    "Education & Research",
                    "Energy & Utilities",
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="bg-white/80 dark:bg-gray-900/60 rounded-xl shadow border border-gray-200 dark:border-bluelagoon-500/20 p-6 text-center text-gray-900 dark:text-white"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-bluelagoon-500/10 to-blue-500/10 dark:from-bluelagoon-500/10 dark:to-blue-500/10 backdrop-blur-sm p-12 rounded-2xl border border-bluelagoon-500/20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Why Choose Auxgens?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Comprehensive Solutions</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        End-to-end cybersecurity and compliance services covering all aspects of your security needs,
                        from strategy to implementation and ongoing management.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Industry Expertise</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Deep knowledge of regulatory requirements including ISO 27001, HIPAA, PCI DSS, GDPR, CCPA, and
                        other industry-specific standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Round-the-clock monitoring and support to ensure your security posture is always maintained,
                        with rapid response times for critical incidents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Scalable Services</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Flexible engagement models that scale with your business needs, from small startups to large
                        enterprises.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cutting-edge Technology</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Latest security technologies and methodologies to stay ahead of evolving threats, including
                        AI-powered threat detection and automated response systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Proven Track Record</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Successful implementations and satisfied clients across various industries and regions, with
                        measurable improvements in security posture and compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cost-effective Solutions</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Optimized service delivery models that provide maximum value for your investment, reducing the
                        total cost of ownership for cybersecurity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-bluelagoon-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">Continuous Innovation</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Ongoing research and development to stay ahead of emerging threats and regulatory changes,
                        ensuring our clients are always protected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
