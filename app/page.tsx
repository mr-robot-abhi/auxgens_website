"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import PlatformEcosystem from "@/components/platform-ecosystem"
import DetailedServices from "@/components/detailed-services"
import GRCVisuals from "@/components/grc-visuals"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import CyberGrid from "@/components/cyber-grid"
import LogoCarousel from "@/components/logo-carousel"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState<'india' | 'usa'>('india')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const locations = {
    india: {
      iframe: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7780.921274583904!2d77.50296709160054!3d12.813483199949982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sC3834%2C%20Brigade%20Meadows%2C%20Udayapura%2C%20Bangalore%20560082!5e0!3m2!1sen!2sin!4v1752561811919!5m2!1sen!2sin",
      address: "C3834, Brigade Meadows, Udayapura, Bengaluru 560082."
    },
    usa: {
      iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.1417149712083!2d-122.18795672359394!3d47.836847871211894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490060219c4bb65%3A0x509c7f4f87777b2e!2s17710%2035th%20Dr%20SE%2C%20Bothell%2C%20WA%2098012%2C%20USA!5e0!3m2!1sen!2sin!4v1752561854867!5m2!1sen!2sin",
      address: "17710, 35th Dr Se Bothell, WA 98012"
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cybersecurity-themed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-20 bg-[url('/images/security-pattern.png')] bg-repeat bg-[length:200px_200px]" />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 dark:from-black/20 via-transparent to-bluelagoon-100/10 dark:to-bluelagoon-900/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-bluelagoon-50/5 dark:via-bluelagoon-900/5 to-blue-50/10 dark:to-blue-900/10" />

        {/* Radial gradients for ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,149,182,0.08)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(0,149,182,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.04)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Particle effects */}
      <ParticleBackground />
      <CyberGrid />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <DetailedServices />
        <LogoCarousel />
        <GRCVisuals />
        {/* Removed Our Locations section */}
        <Contact />
        <Footer />
      </div>
    </div>
  )
}