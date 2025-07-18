"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const services = [
  { name: "GRC Services", href: "/services/grc" },
  { name: "Virtual CISO", href: "/services/virtual-ciso" },
  { name: "Cybersecurity & Data Privacy", href: "/services/cybersecurity" },
  { name: "Managed Security (MSSP)", href: "/services/mssp" },
  { name: "SOC as a Service", href: "/services/soc" },
  { name: "DPO as a Service", href: "/services/dpo" },
  { name: "GDPR Compliance", href: "/solutions/gdpr" },
  { name: "CCPA Compliance", href: "/solutions/ccpa" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 transition-transform hover:scale-110 mt-3">
              <Image
                src="/images/Auxgens_Logo_expnad-removebg-preview.png"
                alt="Auxgens"
                width={140}
                height={140}
                className="object-contain h-20 w-auto lg:h-24"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 justify-end w-full">
              <nav className="flex items-center space-x-8">
                {/* Home */}
                <Link
                  href="/"
                  className="text-gray-600 hover:text-bluelagoon-500 font-medium transition-colors duration-200 relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bluelagoon-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button
                    className="flex items-center text-gray-600 hover:text-bluelagoon-500 font-medium transition-colors duration-200"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ${
                      isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-bluelagoon-500/10 hover:text-bluelagoon-600 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-bluelagoon-500 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bluelagoon-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 hover:from-bluelagoon-700 hover:to-bluelagoon-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-bluelagoon-500/25 hover:scale-105 border border-bluelagoon-500/20">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-4 border-t border-gray-200">
              <div className="space-y-2">
                <p className="font-semibold text-gray-800 px-2">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block pl-4 text-gray-600 hover:text-bluelagoon-500 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-bluelagoon-500 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-bluelagoon-600 to-bluelagoon-500 hover:from-bluelagoon-700 hover:to-bluelagoon-600 text-white py-2 rounded-lg font-medium transition-all duration-200">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}