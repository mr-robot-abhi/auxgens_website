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
      {/* Pure white background */}
      <div className="fixed inset-0 bg-white" />

      {/* Particle effects */}
      <ParticleBackground />
      {/* Removed CyberGrid */}

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