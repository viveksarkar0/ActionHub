'use client'

import React, { useEffect, useRef } from 'react'
import { cn } from "@/lib/utils"

interface ParticleBurstSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'accent' | 'rainbow'
  particleCount?: number
}

const Spinner = React.forwardRef<HTMLDivElement, ParticleBurstSpinnerProps>(
  ({ size = 'md', color = 'primary', particleCount = 12, className, ...props }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const sizeMap = {
      sm: 50,
      md: 100,
      lg: 150,
    }

    const colorMap = {
      primary: '#3b82f6',
      secondary: '#10b981',
      accent: '#8b5cf6',
      rainbow: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8b00ff']
    }

    useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = sizeMap[size] / 4

      let particles: { x: number; y: number; speed: number; angle: number; color: string }[] = []

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: centerX,
          y: centerY,
          speed: 1 + Math.random() * 2,
          angle: (Math.PI * 2 * i) / particleCount,
          color: Array.isArray(colorMap[color]) 
            ? colorMap[color][i % colorMap[color].length] 
            : colorMap[color]
        })
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((particle, index) => {
          particle.x += Math.cos(particle.angle) * particle.speed
          particle.y += Math.sin(particle.angle) * particle.speed

          const distance = Math.sqrt(
            Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2)
          )

          if (distance > radius) {
            particle.x = centerX
            particle.y = centerY
          }

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.fill()
        })

        requestAnimationFrame(animate)
      }

      animate()
    }, [size, color, particleCount])

    return (
      <div ref={ref} className={cn("inline-block", className)} {...props}>
        <canvas 
          ref={canvasRef} 
          width={sizeMap[size]} 
          height={sizeMap[size]}
          className="rounded-full bg-gray-100 dark:bg-gray-800"
        />
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
)

Spinner.displayName = 'ParticleBurstSpinner'

export { Spinner }

