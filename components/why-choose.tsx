"use client"

import { ShieldCheck, Users, Clock, Award, Zap } from "lucide-react"

export default function WhyChoose() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience in cybersecurity and compliance."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We tailor our solutions to meet your specific business needs and challenges."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support to ensure your business is always protected."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Trusted by businesses of all sizes with a 98% client satisfaction rate."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Quick identification and resolution of security threats to minimize business impact."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bluelagoon-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-bluelagoon-100 text-bluelagoon-800 text-xs font-semibold px-4 py-1.5 mb-4 border border-bluelagoon-200">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-bluelagoon-900 mb-4">
            Why Choose AUXGENS?
          </h2>
          <p className="text-lg text-bluelagoon-700 max-w-3xl mx-auto">
            We go beyond standard security practices to deliver exceptional value and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-bluelagoon-100 hover:border-bluelagoon-300 h-full flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-bluelagoon-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bluelagoon-100 transition-all duration-300">
                  <Icon className="w-7 h-7 text-bluelagoon-600" />
                </div>
                <h3 className="text-xl font-semibold text-bluelagoon-900 mb-3 group-hover:text-bluelagoon-700 transition-colors">{feature.title}</h3>
                <p className="text-bluelagoon-700">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-bluelagoon-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-bluelagoon-900 mb-6">
              Ready to secure your business with confidence?
            </h3>
            <p className="text-lg text-bluelagoon-700 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that trust AUXGENS for their cybersecurity and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bluelagoon-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-bluelagoon-600 text-white hover:bg-bluelagoon-700 h-12 px-8 py-3 text-base"
              >
                Get Started
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bluelagoon-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-bluelagoon-200 bg-white text-bluelagoon-700 hover:bg-bluelagoon-50 hover:text-bluelagoon-800 h-12 px-8 py-3 text-base"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
