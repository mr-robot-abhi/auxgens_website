"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Globe, Linkedin } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      "Cybersecurity Management",
      "Data Protection",
      "Network Security",
      "Identity Management",
      "Security Auditing",
      "Security Training",
    ],
  },
  {
    title: "About Us",
    links: ["Our Team", "Careers", "News & Updates", "Case Studies", "Partnerships"],
  },
  {
    title: "Support",
    links: [
      "Contact Support",
      "Emergency Response",
      "Documentation",
      "Security Center",
      "Status Page",
      "Privacy Policy",
    ],
  },
]

const regions = ["Asia Pacific", "United States", "Europe, Middle East, Africa", "European Union"]

export default function Footer() {
  return (
    <footer className="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm text-gray-900 dark:text-white border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/auxgens-green-final.png"
                alt="Auxgens"
                width={220}
                height={180}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Professional managed cyber & information security data service provider with global expertise and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-green-500/20 dark:hover:bg-green-600/20 hover:border-green-500/50 transition-colors duration-200 border border-gray-300/50 dark:border-gray-700/50"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-green-500/20 dark:hover:bg-green-600/20 hover:border-green-500/50 transition-colors duration-200 border border-gray-300/50 dark:border-gray-700/50"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 mt-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-green-600/40 dark:from-green-500/20 dark:to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-500/30 dark:border-green-500/20">
                <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">security@auxgens.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-green-600/40 dark:from-green-500/20 dark:to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-500/30 dark:border-green-500/20">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">24/7 Emergency</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 911-HELP</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-green-600/40 dark:from-green-500/20 dark:to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-500/30 dark:border-green-500/20">
                <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Global Presence</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Asia US EMEA EU</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-green-600/40 dark:from-green-500/20 dark:to-green-600/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-500/30 dark:border-green-500/20">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">{"<15"}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Response Time</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Minutes average</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Auxgens. All rights reserved. | Securing businesses worldwide with professional cybersecurity
            solutions.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
