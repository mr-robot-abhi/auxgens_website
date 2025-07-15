"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Globe, Linkedin, MapPin } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "GRC Services", href: "/services/grc" },
      { name: "Virtual CISO", href: "/services/virtual-ciso" },
      { name: "Cybersecurity & Data Privacy", href: "/services/cybersecurity" },
      { name: "Managed Security (MSSP)", href: "/services/mssp" },
      { name: "SOC as a Service", href: "/services/soc" },
      { name: "DPO as a Service", href: "/services/dpo" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "GDPR Compliance", href: "/solutions/gdpr" },
      { name: "CCPA Compliance", href: "/solutions/ccpa" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Partnerships", href: "#" },
    ],
  },
]

const regions = ["Asia Pacific", "United States", "Europe, Middle East, Africa", "European Union"]

export default function Footer() {
  return (
    <footer className="bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm text-gray-900 dark:text-white border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/Auxgens_Logo_expnad-removebg-preview.png"
                alt="Auxgens"
                width={280}
                height={220}
                className="h-28 w-auto"
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
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">sales@auxgens.net</span>
            </div>
            <div className="flex items-center space-x-2 ml-6">
              <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">C3834, Brigade Meadows, Udayapura, Bengaluru 560082.</span>
            </div>
            <div className="flex items-center space-x-2 ml-6">
              <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">17710, 35th Dr Se Bothell, WA 98012</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 md:mt-0">© 2025 Auxgens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
