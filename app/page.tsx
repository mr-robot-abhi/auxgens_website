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

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cybersecurity-themed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-20 bg-[url('/images/security-pattern.png')] bg-repeat bg-[length:200px_200px]" />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-200/20 dark:from-black/20 via-transparent to-green-100/10 dark:to-green-900/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-50/5 dark:via-green-900/5 to-blue-50/10 dark:to-blue-900/10" />

        {/* Radial gradients for ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.15)_0%,transparent_50%)]" />
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
        <PlatformEcosystem />
        <GRCVisuals />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
