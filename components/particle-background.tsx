"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
}

interface Connection {
  x1: number
  y1: number
  x2: number
  y2: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const connectionsRef = useRef<Connection[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    })

    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80)
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle())
      }
    }

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Fade in/out effect
        const lifeFactor = particle.life / particle.maxLife
        if (lifeFactor < 0.1) {
          particle.opacity = (lifeFactor / 0.1) * 0.6
        } else if (lifeFactor > 0.9) {
          particle.opacity = ((1 - lifeFactor) / 0.1) * 0.6
        }

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Reset particle when life ends
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle()
        }
      })
    }

    const updateConnections = () => {
      connectionsRef.current = []
      const maxDistance = 120

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15
            connectionsRef.current.push({
              x1: p1.x,
              y1: p1.y,
              x2: p2.x,
              y2: p2.y,
              opacity,
            })
          }
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Detect dark mode
      const isDark = document.documentElement.classList.contains('dark')

      // Draw connections
      connectionsRef.current.forEach((connection) => {
        ctx.beginPath()
        ctx.moveTo(connection.x1, connection.y1)
        ctx.lineTo(connection.x2, connection.y2)
        ctx.strokeStyle = isDark
          ? `rgba(34, 197, 94, ${connection.opacity})`
          : `rgba(34, 197, 94, ${Math.max(connection.opacity * 2.5, 0.12)})` // more visible in light mode
        ctx.lineWidth = isDark ? 0.5 : 1.1 // thicker in light mode
        ctx.stroke()
      })

      // Draw particles
      particlesRef.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 197, 94, ${particle.opacity})`
        ctx.fill()

        // Add subtle glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 197, 94, ${particle.opacity * 0.1})`
        ctx.fill()
      })
    }

    const animate = () => {
      updateParticles()
      updateConnections()
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
