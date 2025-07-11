"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import "../app/globals.css"

const logoImages = [
  { src: "/images/brand2.png", alt: "Brand 2" },
  { src: "/images/brand3.png", alt: "Brand 3" },
  { src: "/images/brand4.png", alt: "Brand 4" },
  { src: "/images/brand5.png", alt: "Brand 5" },
  { src: "/images/IBSFINtech-logo.png", alt: "IBSFINtech" },
]

export default function LogoCarousel() {
  // No JS interval, use CSS animation for smooth infinite left-to-right
  return (
    <div className="w-full py-4">
      <div className="overflow-x-hidden relative">
        <div
          className="flex items-center gap-16 animate-carousel-move"
          style={{ minWidth: '200%', willChange: 'transform' }}
        >
          {logoImages.concat(logoImages).map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-6 min-w-[300px] h-44 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={260}
                height={120}
                className="object-contain h-32 w-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300"
                style={{ boxShadow: '0 12px 48px 0 rgba(34,197,94,0.18), 0 4px 24px 0 rgba(0,0,0,0.18)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 