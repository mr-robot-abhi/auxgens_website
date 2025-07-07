"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import CyberGrid from "@/components/cyber-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Shield, Users, Award } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cybersecurity-themed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-green-900/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-900/5 to-blue-900/10" />

        {/* Radial gradients for ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Particle effects */}
      <ParticleBackground />
      <CyberGrid />

      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contact Our Security Experts</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to strengthen your cybersecurity posture? Get in touch with our team of experts for personalized
                solutions and 24/7 support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
                <h2 className="text-3xl font-bold text-white mb-8">Get Started Today</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service/Solution Interest
                    </label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-gray-800/80 border-gray-600 text-white">
                        <SelectValue placeholder="Select a service or solution" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="grc">GRC Services</SelectItem>
                        <SelectItem value="virtual-ciso">Virtual CISO</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity & Data Privacy</SelectItem>
                        <SelectItem value="mssp">Managed Security (MSSP)</SelectItem>
                        <SelectItem value="soc">SOC as a Service</SelectItem>
                        <SelectItem value="dpo">DPO as a Service</SelectItem>
                        <SelectItem value="gdpr">GDPR Compliance</SelectItem>
                        <SelectItem value="ccpa">CCPA Compliance</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      className="bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400"
                      placeholder="Tell us about your cybersecurity needs, current challenges, or specific requirements..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
                        <Mail className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-300">security@auxgens.com</p>
                        <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">24/7 Emergency Hotline</h4>
                        <p className="text-gray-300">+1 (555) 911-HELP</p>
                        <p className="text-sm text-gray-400">For urgent security incidents</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Global Presence</h4>
                        <p className="text-gray-300">Asia Pacific • United States</p>
                        <p className="text-gray-300">Europe, Middle East, Africa • European Union</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
                        <Clock className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Response Time</h4>
                        <p className="text-gray-300">{"<15 minutes average"}</p>
                        <p className="text-sm text-gray-400">For critical security incidents</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Auxgens?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Industry-leading security expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">24/7 dedicated support team</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Proven track record of success</span>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-green-600/20 to-green-700/30 backdrop-blur-sm rounded-2xl p-8 text-white border border-green-500/20">
                  <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Business?</h3>
                  <p className="mb-6 opacity-90">
                    Join hundreds of businesses that trust Auxgens to protect their digital assets and ensure
                    compliance.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white/10 text-white hover:bg-white/20 font-medium transition-all duration-200 backdrop-blur-sm border border-white/20"
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
