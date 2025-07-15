"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import "../app/globals.css"

const logoImages = [
  { src: "/images/brand2.png", alt: "Brand 2" },
  { src: "/images/brand3.png", alt: "Brand 3" },
  { src: "/images/brand4.png", alt: "Brand 4" },
  { src: "/images/brand5.png", alt: "Brand 5" },
  { src: "/images/brand1.png", alt: "IBSFINtech" },
]

export default function LogoCarousel() {
  // No JS interval, use CSS animation for smooth infinite left-to-right
  return (
    <div className="w-full py-4">
      <h2 className="text-4xl font-extrabold text-green-600 dark:text-white text-center mb-6">Our Partners</h2>
      <div className="overflow-x-hidden relative">
        <div
          className="flex items-center gap-16 animate-carousel-move"
          style={{ minWidth: '200%', willChange: 'transform' }}
        >
          {logoImages.concat(logoImages).map((logo, i) => {
            const isLarge = ["/images/brand3.png", "/images/brand4.png", "/images/brand5.png"].includes(logo.src);
            return (
              <div
                key={i}
                className="flex items-center justify-center mx-6 min-w-[180px] h-32 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={isLarge ? 220 : 160}
                  height={isLarge ? 110 : 80}
                  className={isLarge ? "object-contain h-28 w-auto" : "object-contain h-20 w-auto"}
                  style={{ boxShadow: 'none', background: 'none' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
} 