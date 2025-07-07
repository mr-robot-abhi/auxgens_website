"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"

const services = [
  { name: "GRC Services", href: "/services/grc" },
  { name: "Virtual CISO", href: "/services/virtual-ciso" },
  { name: "Cybersecurity & Data Privacy", href: "/services/cybersecurity" },
  { name: "Managed Security (MSSP)", href: "/services/mssp" },
  { name: "SOC as a Service", href: "/services/soc" },
  { name: "DPO as a Service", href: "/services/dpo" },
]

const solutions = [
  { name: "GDPR Compliance", href: "/solutions/gdpr" },
  { name: "CCPA Compliance", href: "/solutions/ccpa" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
            <Image
              src="/images/auxgens-new-logo.png"
              alt="Auxgens"
              width={320}
              height={240}
              className="h-24 w-auto lg:h-28"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-300 hover:text-green-400 font-medium transition-colors duration-200"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-700 transition-all duration-200 ${
                    isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-300 hover:text-green-400 font-medium transition-colors duration-200"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-700 transition-all duration-200 ${
                    isSolutionsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      href={solution.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors duration-200"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 border border-green-500/20">
                Get Started
              </Button>
            </Link>

            {/* Theme Toggle - Far Right */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-700">
            <div className="space-y-2">
              <p className="font-semibold text-white px-2">Services</p>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block pl-4 text-gray-300 hover:text-green-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white px-2">Solutions</p>
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  href={solution.href}
                  className="block pl-4 text-gray-300 hover:text-green-400 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-green-400 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-2 rounded-lg font-medium transition-all duration-200">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 backdrop-blur-sm border border-gray-700/50"
      >
        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        <span className="text-sm font-medium text-gray-300">{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-700 z-50">
          <button
            onClick={() => {
              setTheme("light")
              setIsOpen(false)
            }}
            className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors duration-200 rounded-t-lg"
          >
            <Sun className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Light Mode</span>
          </button>
          <button
            onClick={() => {
              setTheme("dark")
              setIsOpen(false)
            }}
            className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-700/50 transition-colors duration-200 rounded-b-lg"
          >
            <Moon className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-300">Dark Mode</span>
          </button>
        </div>
      )}
    </div>
  )
}
