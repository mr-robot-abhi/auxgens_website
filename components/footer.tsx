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
      { name: "GDPR Compliance", href: "/solutions/gdpr" },
      { name: "CCPA Compliance", href: "/solutions/ccpa" },
    ],
  },
]

const regions = ["Asia Pacific", "United States", "Europe, Middle East, Africa", "European Union"]

export default function Footer() {
  return (
    <footer className="bg-gray-50/80 border-t border-gray-200/50 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          {/* Company Info */}
          <div className="flex flex-col items-start justify-center md:col-span-1">
            <div className="mb-2">
              <Image
                src="/images/Auxgens_Logo_expnad-removebg-preview.png"
                alt="Auxgens"
                width={140}
                height={140}
                className="object-contain h-20 w-auto lg:h-24"
              />
            </div>
            <p className="text-gray-600 mb-2 leading-relaxed text-sm max-w-xs">
              Professional managed cyber & information security data service provider with global expertise and
              cutting-edge technology.
            </p>
            <div className="flex space-x-2 mb-1">
              <Link
                href="https://www.linkedin.com/company/auxgen/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-200/80 rounded-lg flex items-center justify-center hover:bg-bluelagoon-500/20 hover:border-bluelagoon-500/50 transition-colors duration-200 border border-gray-300/50"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:sales@auxgens.net"
                className="w-8 h-8 bg-gray-200/80 rounded-lg flex items-center justify-center hover:bg-bluelagoon-500/20 hover:border-bluelagoon-500/50 transition-colors duration-200 border border-gray-300/50"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Footer Sections - right aligned */}
          <div className="md:col-span-2 flex flex-row justify-end gap-12">
            {/* Services: 2 columns */}
            <div className="mb-0">
              <h3 className="font-bold text-base mb-2 text-gray-900">Services</h3>
              <div className="grid grid-cols-2 gap-x-6">
                <ul className="space-y-1">
                  {footerSections[0].links.slice(0, 4).map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-600 hover:text-bluelagoon-600 transition-colors duration-200 text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1">
                  {footerSections[0].links.slice(4).map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-600 hover:text-bluelagoon-600 transition-colors duration-200 text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="border-t border-gray-200/50 mt-2 pt-2 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center space-x-2 text-xs">
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-bluelagoon-600" />
              <span className="text-gray-600">sales@auxgens.net</span>
            </div>
            <div className="flex items-center space-x-1 ml-3">
              <MapPin className="w-4 h-4 text-bluelagoon-600" />
              <span className="text-gray-600">C3834, Brigade Meadows, Udayapura, Bengaluru 560082.</span>
            </div>
            <div className="flex items-center space-x-1 ml-3">
              <MapPin className="w-4 h-4 text-bluelagoon-600" />
              <span className="text-gray-600">17710, 35th Dr Se Bothell, WA 98012</span>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">© 2025 Auxgens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
