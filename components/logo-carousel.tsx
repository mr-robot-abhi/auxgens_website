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
      <h2 className="text-4xl font-extrabold text-bluelagoon-600 dark:text-bluelagoon-400 text-center mb-6">Our Partners</h2>
      <div className="overflow-x-hidden relative">
        <div
          className="flex items-center gap-16 animate-carousel-move"
          style={{ minWidth: '200%', willChange: 'transform' }}
        >
          {logoImages.concat(logoImages).map((logo, i) => {
            let width = 160;
            let height = 80;
            let className = "object-contain h-20 w-auto";
            if (logo.src === "/images/brand4.png" || logo.src === "/images/brand5.png") {
              width = 260;
              height = 130;
              className = "object-contain h-32 w-auto";
            } else if (logo.src === "/images/brand1.png") {
              width = 140;
              height = 70;
              className = "object-contain h-16 w-auto";
            } else if (logo.src === "/images/brand3.png") {
              width = 220;
              height = 110;
              className = "object-contain h-28 w-auto";
            }
            return (
              <div
                key={i}
                className="flex items-center justify-center mx-6 min-w-[180px] h-32 cursor-pointer transition-shadow duration-200 hover:shadow-lg hover:shadow-bluelagoon-500/20"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={width}
                  height={height}
                  className={className}
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