"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LogoCarousel from "@/components/logo-carousel"
import WhyChoose from "@/components/why-choose"
import DetailedServices from "@/components/detailed-services"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState<'india' | 'usa'>('india')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Pure white background */}
      <div className="fixed inset-0 bg-white" />

      {/* Particle effects */}
      {/* Removed CyberGrid */}

      <div className="relative z-10">
        <Header />
        <Hero />
        <DetailedServices />
        <LogoCarousel />
        <WhyChoose />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}