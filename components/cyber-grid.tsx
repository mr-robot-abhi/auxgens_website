"use client"

import { useEffect, useRef } from "react"

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 50
      const isDark = document.documentElement.classList.contains("dark")

      // Draw grid
      ctx.strokeStyle = isDark ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.08)"
      ctx.lineWidth = 0.5

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Add scanning lines
      const scanLine1 = (Math.sin(time * 0.001) * 0.5 + 0.5) * canvas.height
      const scanLine2 = (Math.cos(time * 0.0008) * 0.5 + 0.5) * canvas.width

      // Horizontal scan line
      ctx.strokeStyle = isDark ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, scanLine1)
      ctx.lineTo(canvas.width, scanLine1)
      ctx.stroke()

      // Vertical scan line
      ctx.beginPath()
      ctx.moveTo(scanLine2, 0)
      ctx.lineTo(scanLine2, canvas.height)
      ctx.stroke()

      time += 16
    }

    const animate = () => {
      draw()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const handleResize = () => {
      resizeCanvas()
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ background: "transparent" }}
    />
  )
}
