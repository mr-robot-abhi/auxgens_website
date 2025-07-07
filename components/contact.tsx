"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your business? Contact our cybersecurity experts for a consultation tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
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
                    Email Address
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
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="bg-gray-800/80 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Tell us about your cybersecurity needs..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700/50">
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

            <div className="bg-gradient-to-br from-green-600/20 to-green-700/30 backdrop-blur-sm rounded-xl p-8 text-white border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Join hundreds of businesses that trust Auxgens to protect their digital assets and ensure compliance.
              </p>
              <Button
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20 font-medium transition-all duration-200 backdrop-blur-sm border border-white/20"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
